// function add (a, b){
//   return a + b;
// }
// console.log(add(3, 1));
// ///Spread operator ///
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen','Cory'];
// var groupB = ['Vikram'];
//
// var final = [...groupB,3 , ...groupA];
// console.log(final);
//

// var person = ['Andrew', 25];
// var personTwo = ['Jen', 29];
//
// function greet(a, b){
//   return 'Hi '+a+' you are '+b;
// }
// console.log(greet(...person));
// console.log(greet(...personTwo));


var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];
final.forEach(function(name){
  console.log('Hi '+name);
});
