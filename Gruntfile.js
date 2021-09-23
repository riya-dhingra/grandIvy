module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: "src/assets/",
            src: ["*.*", "**/*.*"],
            dest: "dist/assets/",
          }
        ]
      },
      bower: {
        files: [
          {
            expand: true,
            cwd: "bower_components/bootstrap/dist/css/",
            src: ["bootstrap.min.css"],
            dest: "dist/bower_components/",
          },
          {
            expand: true,
            cwd: "bower_components/bootstrap/dist/js/",
            src: ["bootstrap.min.js"],
            dest: "dist/bower_components/",
          },
          {
            expand: true,
            cwd: "bower_components/jquery/dist/",
            src: ["jquery.min.js"],
            dest: "dist/bower_components/",
          }
        ]
      },
    },
    sass: {
      dev: {
        options: {
          sourcemap: false
        },
        files: {
          "dist/css/<%= pkg.name %>.css": "src/scss/style.scss"
        }
      }
    },
    htmlbuild: {
      dist: {
        src: './src/index.html',
        dest: './dist/',
        options: {
          beautify: true,
          relative: true,
          basePath: false,
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        globals: {
          jQuery: true,
        }
      }
    },

    watch: {
      html: {
        files: ['./src/*.html'],
        tasks: ['htmlbuild']
      },
      css: {
        files: 'src/scss/*.scss',
        tasks: ['sass'],
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    },
    clean: {
      dist: {
        src: "dist/**/*"
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'dist/*.css',
            'dist/*.min.js',
            'dist/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './dist'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify', 'sass', 'copy', 'htmlbuild', 'browserSync',
    'watch']);

};
