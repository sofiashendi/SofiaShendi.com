// Files for common.js
var arrJsCommonFiles = [];

arrJsCommonFiles.push('_/js/common.js');

module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: false,
					yuicompress: false,
					optimization: 2
				},
				files: {
					'_/css/base.css': '_/css/base.less',
				}
			},
			production: {
				options: {
					compress: true
				},
				files: {
					'_/css/base.min.css': '_/css/base.less',
				}
			}
		},
		concat: {
			options: {
				separator: '',
			},
			default: {
				files: {
					'_/js/base.js': arrJsCommonFiles,
				}
			}
		},
		uglify: {
			default: {
				files: {
					'_/js/base.min.js': arrJsCommonFiles,
				}
			}
		},
		watch: {
			styles: {
				files: ['_/css/**/*.less', arrJsCommonFiles], // which files to watch
				tasks: ['less', 'concat', 'uglify'],
				options: {
					nospawn: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['less', 'watch', 'concat', 'uglify']);
};
