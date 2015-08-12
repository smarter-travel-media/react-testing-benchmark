#React Testing Performance Benchmark

##Description
This is a sample project to benchmark the performance differences between running
unit tests between jest and mocha.

##System Setup
Jest is not compatible with node 0.12: https://github.com/facebook/jest/issues/243
See package.json for version information.

###Jest Setup
 A standard jest setup that used babel-jest to compile jsx and es6 before the tests are run.

 ```
 "jest": {
   "scriptPreprocessor": "node_modules/babel-jest",
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
 mocha --compilers js:babel/register
 ```

##Usage
 To run the tests
 ```bash
 #jest tests
 npm run jest

 #mocha tests
 npm run mocha
 ```
