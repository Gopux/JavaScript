let a=10// global scope
var b=20
const c=30
// {
//   let a=50// local scope
//   console.log(`block scope:${a}`)
// }
//console.log(`global scope:${a}`)
// Block Scope

{
  var f=40
  const e=3.14
  console.log(c)
}

console.log(f)
