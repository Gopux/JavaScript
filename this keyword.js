const user=new Object()
//console.log(typeof user)
user.username=""
user.price=999
user.greet=function(){
  console.log(`${this.username}, welcome///`)
  console.log(this)
}
//console.log(user)
user.username="sam"
user.greet()
//console.log(this)
