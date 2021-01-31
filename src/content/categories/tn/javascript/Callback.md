its just a function that is used as a parameter in some function.  

</br>

```js
// example

function foo(cb){
  return cb('hello')
}

// greet is the paramter of the "cb()" function
foo(function(greet){
  console.log(greet);
});
```
