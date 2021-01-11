module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            svg: {
                files: ['svg/{,**/}*.svg'],
                tasks: ['grunticon'],
            },
        },

        grunticon: {
            icons: {
                files: [{
                    expand: true,
                    cwd: 'svg',
                    src: ['*.svg', '*.png'],
                    dest: 'sass/svg'
                }],
                options: {
                    datasvgcss: '_svg.scss',
                    cssprefix: '@mixin icon-'
                }
            }
        }

    });

    // grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-grunticon');
    grunt.registerTask('default', ['grunticon:icons']);
};
