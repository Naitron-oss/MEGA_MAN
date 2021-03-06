// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'app/scss/**/*.scss',
            tasks: ['sass']
        },
        // sass: {
        //     dev: {
        //         files: {
        //             'app/css/main.css': 'app/scss/main.scss'
        //         }
        //     }
        // },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        './js/**/*.js',
                        './*.html'
                    ]
                },
          options: {
              port: 3002
          }
            }
        }
    });

    // load npm tasks
    //grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};