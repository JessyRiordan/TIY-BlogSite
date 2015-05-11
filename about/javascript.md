# Reading JavaScript

## Basic Literal Types

_**`null`- null or empty value: no object value is present. "Intentionally empty". One of the six primative data types.**_

  * Click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) for a reference for null. 

_**`Boolean` - a value that can be one of two things: true or false. One of the six primative data types.**_

  * Click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) for a reference for Boolean.

_**`number` - numeric data value. One of the six primative data types.**_

```
4
3.14159
0.5
```

_**`String` - a sequence of characters used to represent text. One of the six primative data types.**_

```
"Four"
"Twelve hundred and 5"
"The Iron Yard"
```

## Special Constants

_**`Infinity` - a numeric value representing infinity, specifically positive infinity.**_

```
insert example here
```

_**`NaN` - Not-A-Number: represents undefined value or a value that can not be represented.**_

```
insert example here
```

_**`undefined` - indicates that a variable has not yet been assigned a value. One of the six primative data types.**_

```
insert example here
```

## Basic Operators

### Arithmetic

_**`+` - Addition: produces the sum of numeric operands.**_

```
x + y
5 + 3 // yeilds 8
```

_**`-` - Subtraction: produces the difference of numeric operands.**_  

```
x - y
5 - 3 // yeilds 2
``` 

_**`*` - Multiplication: produces the product of two operands.**_

```
x * y
5 * 3 // yeilds 15
```

_**`/` - Division: produces the quotient of numeric operands. The left operand is the dividend and the right operand is the divisor.**_

```
x / y
15 / 3 // yeilds 5
``` 


### Comparison
_**`==` - is equal to**_

```
5 == 5 // yeilds "true
5 == 4 // yeilds "false"
```

_**`!=` - not equal to**_

```
5 != 5 // yeilds "false"
5 != 4 // yeilds "true"
```

_**`<` - less than**_

```
5 < 7 // yeilds "true"
5 < 4 // yeilds "false"
```

_**`>` - greater than**_

```
5 > 7 // yeilds "false"
5 > 4 // yeilds "true"
```

_**`<=` - less than or equal to**_

```
4 <= 4 // yeilds "true"
4 <= 5 // yeilds "true"
4 <= 3 // yeilds "false"
```

_**`>=` - greater than or equal to**_

```
6 >= 6 // yeilds "true"
6 >= 4 // yeilds "true"
6 >= 9 // yeilds "false"
```

### Assignment
* `var` - identifier
* `=` - is assigned
* `+=` - addition assignment ```` x+=y // yeilds x = x + y ````
* `|` - or

## Functions

For help with functions click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).

### Definition

A function represents a set of statements that performs a procedure or calculates a value. 

```
insert example here
```
### Expressions and Operators
_**`typeof`**_
 * Returns a string that indicating the type of unevaluated object.
 
```
typeof 24 // yeilds "number"
typeof "Riordan" // yeilds "String"
typeof Array // yeilds "function
typeof function // yeilds "function
typeof null // yeilds "object
typeof Infinity // yeilds "number
```
