
**Closure** fel JS, hia function traja3 function o5ra, haw example:  
</br>

```js

function foo(){
  let x = 'hello';
  return function(){
    console.log(x)
  }
}

// tnadi 3al foo() w tzid tnadi 3al function eli raje3tha el foo
foo()()

```

