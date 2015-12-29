"use strict";

module.exports = function (grunt) {
	require('jit-grunt')(grunt, {
		bower: 'grunt-bower-task',
		copy: 'grunt-contrib-copy'
	})({
		customTasksDir: 'tasks'
	});

	grunt.initConfig({
		paths: {
			npm: 'node_modules/',
			bower: 'bower_components/'
		}
	});

	// load config from tasks/options
	grunt.file.recurse(
		'./tasks/config/',
		function (abspath, rootdir, subdir, filename) {
			/* jshint unused: true */
			// keep only .js files
			if (!grunt.file.isMatch('*.js', filename)) { return; }

			var key = filename.replace(/\.js$/, '');
			var config = require('./tasks/config/' + (subdir || "") + key)(grunt);
			if (config) {
				grunt.config.set(key, config);
			}
		}
	);


	grunt.registerTask(
		'build',
		"Build CKEditor",
		[
			'npm-install',
			'ckbuild',
			'copy'
		]
	);
};