#React Testing Performance Benchmark

##Description
This is a sample project to benchmark the performance differences between running
unit tests between jest and mocha. I have implemented the same sum function 3 times and the same
react component 3 times. This was done to minimize any caching each framework may utilize. In the real world
the same test would not be run several times. 

##System Setup
Jest is not compatible with node 0.12: https://github.com/facebook/jest/issues/243
See package.json for version information.

###Jest Setup
 A standard jest setup that used babel-jest to compile jsx and es6 before the tests are run.

 ```
 "jest": {
    "scriptPreprocessor": "node_modules/babel-jest",
    "unmockedModulePathPatterns": [
      "node_modules/react"
    ],
    "testFileExtensions": [
      "js",
      "jsx"
    ],
    "moduleFileExtensions": [
      "js",
      "jsx"
    ]
 }
 ```

###Mocha Setup
 This is a standard setup using chai for assertions and jsdom to moch the dom.

 ```
 mocha -R list --compilers js:babel/register
 ```

##Usage
 To run the tests
 ```bash
 #jest tests
 npm run jest

 #mocha tests
 npm run mocha
 ```
