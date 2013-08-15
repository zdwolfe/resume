module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-ejs-static');

    grunt.initConfig({
        ejs_static: {
            resume: {
                options: {
                    dest: '../',
                    path_to_data: './data/data.json',
                    path_to_layouts: './layouts/',
                    index_page: 'resume',
                    parent_dirs: false,
                    underscores_to_dashes: true,
                    pretty: true,
                    file_extension: '.html'
                }
            }
        },
    });

    // build the site for resume during development
    grunt.registerTask('resume', [
                       'ejs_static:resume'
    ]);
};
