module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'js/namespaces.js',
          'js/constants.js',
          'js/canvas.js',
          'js/pallette.js',
          'js/main.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    // jasmine: {
    //   columnChart: {
    //     src: [
    //       'js/namespaces.js',
    //       'js/constants.js',
    //       'js/canvas.js',
    //       'js/pallette.js',
    //       'js/main.js'
    //     ],
    //     options: {
    //       keepRunner: false,
    //       specs: ['test/*.js'],
    //       helpers: [
    //         'libs/jquery-2.1.3.min.js',
    //         'libs/d3.min.js',
    //         'libs/jasmine-jquery.js'
    //       ]
    //     }
    //   }
    // },
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js' ], //, 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'jasmine']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint', 'jasmine']);

  grunt.registerTask('default', ['jshint', 'jasmine', 'concat', 'uglify']);

};