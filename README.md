# web-io

## Basics

```javascript
var x = 1;   //Declaring variables

console.log('Hello World');   //Printing in console

var a = [1,29,69,"Hahahaha"];   //Array

var x = {
  Name : "Nikesh",    //Key and Value
  Surname : "Kumar",
  Semester  : "II",
}   //Objects

```
## Day2

- extend inherits a different class to some other class

- Import

Eg.
```javascript
var cow = 'moo';
var manipal = 'mit'

export default {cow,manipal}
```

- Export

There can only be one default export but there can be multiple named exports

- Render

So this basically render HTML code to the browser

eg.
```javascript

render() {
  return  (
    <div id="First JS Test">Hello</div>
  )
}
```
- Making a const
eg.
```javascript
const logo = require('../assets/logo.png');
```