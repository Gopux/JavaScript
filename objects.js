const sym=Symbol();// Symbol is defined
let obj={
  "iq":101,
  username:"hitesh",
  isLoggedIn:true,
  array:[10,20,30],
  fullname:{
    name:"hc"
  },
  print:function(a,b){
    return (a+b)
  },
  [sym]:"key"
}

console.log(obj.array.length)
console.log(obj.fullname.name)
console.log(obj.print(10,5))
console.log(obj["iq"])
console.log(typeof sym)
console.log(obj[sym])


