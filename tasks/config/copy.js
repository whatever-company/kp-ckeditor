'use strict';

module.exports = function (grunt) {
	return {
		main: {
			src: ['ckeditor/**'],
			dest: 'dist/',
			expand: true,
			flatten: false,
			cwd: grunt.config.get('paths').bower + 'ckeditor-dev/dev/builder/release/'
		}
	};
};