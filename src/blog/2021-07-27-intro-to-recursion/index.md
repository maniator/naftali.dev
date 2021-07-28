---
path: "intro-to-recursion"
date: "2013-01-10T20:57:00.000Z"
title: "Fibonacci, an introduction to recursion"
tags: ["programming", "recursion"]
---

Recursion can be as simple as:

```javascript
function foo() {
    //do bar foo();
}

foo();
```
It is as simple as that, or so you think...
The most common way I have seen that recursion is taught is by learning how to code Fibonacci numbers.

Fibonacci numbers are like so: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, .., where the next number is always equal to the sum of the previous two numbers.
One way to get a certain Fibonacci number is with a loop:

```javascript
var result = 1,
    term1 = 0,
    term2 = 1,
    i = 1;
while (i < 10) {
    result = term1 + term2;
    console.log(result);
    term1 = term2;
    term2 = result;
    i++;
}
```

The above will print the first 10 Fibonacci numbers to the console.

[here is a demo](https://jsfiddle.net/maniator/NmMHW/embedded/js,result/dark/)

Another (easier) way to get the first ten Fibonacci numbers is with a recursive function:

```javascript
function fib(x) {
    if (x === 0) {
        return 0;
    } else if (x === 1) {
        return 1;
    } else {
        return fib(x-1)+fib(x-2);
    }
}
```

[Here is a demo that will print the 10th Fibonacci number to the console](http://jsfiddle.net/maniator/SCCYn/embedded/js,result/dark/)

Even the above example might not be the best approach.

The following example calculates the Fibonacci number and caches the previous results,
so we do not have to keep recalculating them all of the time:

```javascript
function fibDriver(n) {
    return n === 0 ? 0 : fib(0, 1, n);
}

function fib(a, b, n) {
    return n === 1 ? b : fib(b, a + b, n-1);
}
```

### Demo

Yes, I know what you are thinking -- <br />
When will I ever need to use recursion for Fibonacci numbers? <br />
How can I use recursion in a real example? <br />
Here is an example that I have on one of my sites:

I have a table of parents and their descendants, and I want to change all the descendants of one child so this is what I did:

(this is pseudocode, so please do not use this is in the "real" world)

```javascript
var allDescendants = [];

function getDescendants(row) {
    var rowId = row.id;
    //calls a function that gets all rows with this parent id
    var children = getRowsWithParent(rowId);
    for (var i = 0; i &lt; children.length; ++i) {
        allDescendants.push(children[i]);
        getDescendants(children[i]); //recurse down
    }
}

var tableRow = someRow;
getDescendants(tableRow);
console.log(allDescendants); //now should contain all of the descendant rows
```

The above is just one example of many of how you can use recursion (and all of its power).

##### The above post was moved from its original location [here](https://blog.javascriptroom.com/2013/01/10/fibonacci-an-introduction-to-recursion/)
