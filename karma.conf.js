module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'src/main/resources/templates/app/bower_components/angular/angular.js',
      'src/main/resources/templates/app/bower_components/angular-route/angular-route.js',
      'src/main/resources/templates/app/bower_components/angular-mocks/angular-mocks.js',
      'src/main/resources/templates/app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'src/main/resources/templates/app/components/**/*.js',
      'src/main/resources/templates/app/catalog/*.js',
      'src/main/resources/templates/app/genre/*.js',
      'src/main/resources/templates/app/movie/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
