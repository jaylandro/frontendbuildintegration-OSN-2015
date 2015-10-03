# frontin-OSN-2015
Integrating front end build tools into your build process

This repo contains 3 seperate examples of frontent build scripts to be used with different build systems.

Example #1

# Maven-grunt
An example of a grunt build file for a cmaven project. 

#### Included in this gruntfile:
* File sync to Tomcat on save
* JavaScript concatenation and uglification
* SVG optimization and spriting
* Version based cachebreaker 
* Watch task to trigger SASS recompile

#### To use this grunt file:
* Copy the gruntfile and package.json file to the src root of your theme directory.
* Type 'npm install'
* Type 'grunt'
* If utilizing the 'grunt watch' task, edit the tomcatTheme directory to point to your theme's directory in Tomcat

We are using this in conjuction with a Maven frontend build task. If you have any questions, feel free to reach out.