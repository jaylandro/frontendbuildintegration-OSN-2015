# Maven-grunt
An example of a grunt build file for a Maven project. 

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

We are using this in conjuction with eirslett's great [frontend build plugin](https://github.com/eirslett/frontend-maven-plugin). If you have any questions, feel free to reach out.