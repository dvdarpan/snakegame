
// Keep a global reference of the window object, if you don't, the window will
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    livereloadx: {
      static: true,
      filter: [
    	{type: 'exclude', pattern: '.{git,svn}/'},
    	{type: 'include', pattern: '*/'},
    	{type: 'include', pattern: '*.{html,shtml,tmpl,xml,css,js,json,jpeg,jpg,gif,png,ico,cgi,php,py,pl,pm,rb}'}
 	],
 	 }
  });

  grunt.loadNpmTasks('livereloadx');
  grunt.registerTask('default', ['livereloadx']);
}
// be closed automatically when the JavaScript object is garbage collected.
