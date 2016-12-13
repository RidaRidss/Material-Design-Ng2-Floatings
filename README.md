/*step 1:*/ npm install -g angular-cli
/*step 2:*/ ng new Project
/*step 3:*/ cd project
/*step 4:* ng serve
/*step 5:*/ npm install -g protractor
/*step 6:*/ protractor --version
/*step 7:*/ note:Protractor needs two files to run, a spec file and a configuration file.
/*step 8:*/ spec.js and conf.js file
/*step 9:*/ note:This configuration tells Protractor where your test files (specs) are, and where to talk to your Selenium Server (seleniumAddress). It will use the defaults for all other configuration. Chrome is the default browser.	
	exports.config = {
seleniumAddress: 'http://localhost:4200/',
  specs: [
    './e2e/e2e-spec.ts'
  ]
/*step 10:*/ webdriver-manager update --standalone
/*step 11:*/ webdriver-manager start
/*step 12:*/ protractor protractor.conf.js
