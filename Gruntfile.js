//Gruntfile.js

//Our wrapper function ()required by Grunt and its plugins)
module.exports = function(grunt) {
	//configure grunt
	grunt.initconfig({
		//get the configuration info from package.json
		//this way we can use the things like name, version etc
		//here we are reading the info from package.json and string it into pkg
		//so we can later use the properties like pkg.name and pkg.version for name and versions respectively.
		pkg:grunt.file.readJSON('package.json');
		
		//all our configuration will go here
		
		//lint our js files and tell us if there are any errors.
		jshint: {
			options: {
				reporter: require('jshint-stylish')
			}
		},
		//when this task is run lint the gruntfile and all the js files
		build: ['Gruntfile.js', 'src/**/*.js']
	});
	
	//Load Grunt plugins
	//we can only load this if these are there in our package.json
	//make sure you have run npm install so our app can find these packages.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
};