Its just a memory space that the javascript engine sets up before executing your code. it sets up a memory space for your variables and functions, thats what explain when you call your function and then actually create it works, its already there in memory and javascript recognize it when it sees it, and for variables they are set to "undefined".

</br>

```js
// example of hoisting

add(2, 2) // this will work fine and it will return 4

function add(a, b){
  return a + b;
}

console.log(x); // this will return "undefined" 

var x;
```
