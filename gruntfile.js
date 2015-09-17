module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

	sass: {
	  dist: {
	    options: {
		  	style: 'compressed'
		  },
		  files: {
				'stylesheets/jquery.lightbox-0.5.css': 'sass/jquery.lightbox-0.5.scss',
				'stylesheets/skeleton.css': 'sass/skeleton.scss',
				'stylesheets/global.css': 'sass/styles.scss'
		  }
		}	
	},
	
	htmlhint: {
		build: {
			options: {
				'tag-pair': true,
				'tagname-lowercase': false,
				'attr-lowercase': false,
				'attr-value-double-quotes': false,
				'doctype-first': true,
				'spec-char-escape': true,
				'id-unique': true,
				'head-script-disabled': false,
				'style-disabled': true
			},
			src: ['*.html']
		}
	},
	
	autoprefixer: {
		single_file: {
			options: {
				browsers: ['last 2 version', 'ie 8', 'ie 9']
			},
	      src: 'stylesheets/global.css',
	      dest: 'stylesheets/global.css'
	  },
  },
	
	watch: {
		html: {
			files: ['*.html'],
			tasks: ['htmlhint']
		},
		css: {
			files: ['sass/*.scss'],
			tasks: ['sass']
		},
		autoprefixer: {
			files: ['stylesheets/*.css'],
			tasks: ['autoprefixer']
		},
	},
	
  });
  //The following line used up top replaces the need for loadNpmTasks
  //require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'autoprefixer']);

};