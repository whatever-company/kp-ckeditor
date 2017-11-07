"use strict";

module.exports = function (grunt) {
	var wrench = require('wrench');

	grunt.registerTask(
		'ckbuild',
		'Build CKEditor',
		function () {
			var done = this.async();
			var options = this.options({
				skin: 'moono',
				skinPath: null,
				ignore: [
					'dev',
					'README.md',
					'.gitignore',
					'.gitattributes',
					'.idea',
					'.mailmap',
					'.DS_Store',
					'tests',
					'package.json',
					'bender.js',
					'.bender',
					'bender-err.log',
					'bender-out.log',
					'node_modules'
				],
				plugins: {},
				pluginPaths: null,
				cwd: grunt.config.get('paths').npm + 'ckeditor-dev/dev/builder/'
			});

			function writeConfigFile() {
				var config =
					'var CKBUILDER_CONFIG = ' +
					JSON.stringify({
						skin: options.skin,
						ignore: options.ignore,
						plugins: options.plugins
					}) +
					';'
				;

				grunt.file.write(
					options.cwd + 'build-config.js',
					config
				);
			}

			function copyPlugins() {
				if (!options.pluginPaths) return;

				options.pluginPaths.forEach(function (path) {
					wrench.copyDirSyncRecursive(
						path.src,
						grunt.config.get('paths').npm + 'ckeditor-dev/plugins/' + path.dest
					);
				});
			}

			function copySkin() {
				if (!options.skinPath) return;

				wrench.copyDirSyncRecursive(
					options.skinPath,
					grunt.config.get('paths').npm + 'ckeditor-dev/skins/' + options.skin
				);
			}

			function build() {
				grunt.log.warn('Build:', options.cwd)
				grunt.util.spawn({
					grunt: false,
					cmd: 'chmod',
					args: [ '+x',  './build.sh'],
					opts: {
						cwd: options.cwd,
						stdio: 'inherit'
					}
				}, function (error, results, code) {
					var success = !error && (!code || code === 0);
					if (success) {
						grunt.util.spawn(
							{
								grunt: false,
								cmd: './build.sh',
								args: ['--no-zip', '--no-tar'],
								opts: {
									cwd: options.cwd,
									stdio: 'inherit'
								}
							},
							function (error, results, code) {
								var success = !error && (!code || code === 0);
								if (!success) {
									grunt.log.error(error);
								} else {
									done(success);
								}
							}
						);
					} else {
						grunt.log.error(error)
					}
				});
			}

			writeConfigFile();
			copySkin();
			copyPlugins();
			build();
		}
	);
};
