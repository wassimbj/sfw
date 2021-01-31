<!-- its just a function that is used as a parameter in some function.   -->

**Callback** hia function testo3mel ka parameter fi function o5ra. haw example:   

</br>

```js
// example

function foo(cb){
  return cb('hello')
}

// greet, hia el parameter ta3 el "cb" function 
foo(function(greet){
  console.log(greet);
});
```
