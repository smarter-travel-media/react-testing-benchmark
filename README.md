#React Testing Performance Benchmark

##Description
This is a sample project to benchmark the performance differences between running
unit tests between jest and mocha.

###Jest Setup
 A standard jest setup that used babel-jest to compile jsx and es6 before the tests are run.

 ```
 "jest": {
   "scriptPreprocessor": "node_modules/babel-jest",
   "testFileExtensions": [
     "es6",
     "js",
     "jsx"
   ],
   "moduleFileExtensions": [
     "js",
     "json",
     "es6",
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
 To run the jest tests
 ```bash
 #jest tests
 npm run jest

 #mocha tests
 npm run mocha 
 ```
