This Software Follow *Semantic Versioning Specification* [SemVer](http://semver.org/)

# Exchanger

## Task
Implement a function **exchanger** changing currency notes to the combination of the minimal possible amount of coins with the following notation:
* H - half a dollar
* Q - a quarter
* D - a dime
* N - a nickel
* P - a penny

### Example:
```js
exchanger(0)     // { }
exchanger(1)     // { "P": 1 }
exchanger(15)    // { "D": 1, "N": 1 }
exchanger(294)   // { "H": 5, "Q": 1, "D": 1", "N": 1, "P": 4 } 
exchanger(10000) // throws "The exchange limit is exceeded"
```

### Requirements
* `src/index.js` - the solution file
* `test/test.js` - the file to *test the solution*

### Version
* The working code should reside in the **exchanger branch**
* No less than two git commits and push to `© GitHub`

### Tips
* `npm ini`     - initialize the repository and *follow the instructions*
* `npm i mocha` - install the **Mocha** *test framework*
* `npm t`       - test the solution
* `open package.json and edit:`
```json
  "scripts": {
    "test": "mocha test/test.js"
  }
```

#### Optional
* `npm i babel-preset-env --save-dev` - use the *latest JavaScript*
* `npm i babel-core --save-dev`       - convert the source code into a *compatible JavaScript*
* `open package.json and edit:`
```json
  "scripts": {
    "init": "mkdir dist",
    "clean": "rm -rf dist",
    "note": "cp LICENSE README.md dist",
    "build": "babel src test -d dist --presets env && npm run note",
    "test": "npm run build && mocha --require babel-core/register dist/test.js"
  }
```
