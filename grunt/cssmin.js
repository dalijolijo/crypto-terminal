'use strict';

module.exports = {
	all: {
		files: [{
			expand: true,
			cwd: 'css',
			src: ['**/*.css'],
			dest: 'build/css',
			ext: '.min.css'
		}]
	},
	homepage: {
		files: [{
			expand: true,
			cwd: 'homepage/css',
			src: ['**/*.css'],
			dest: 'build/homepage/css',
			ext: '.min.css'
		}]
	}
};
