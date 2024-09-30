function power(n){
  if(n!=0 && ((n & (n-1))==0)){
    console.log("power of 2");
  }
  else{
    console.log("not power of 2");
  }
}


power(31)
power(32)
power(16)
power(168)

function hello(name,age,location){
  return{
    name,age,location
  }
}
console.log(hello("rohith","22","hyderabad"));
console.log(hello("rohith","22","hyderabad"));




