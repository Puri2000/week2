let string="welcome to javascript"
var rev=""
function reverse(){
    for (i=string.length-1;i>=0;i--){
    rev+=string.charAt(i)
}
return rev
}
let res= reverse()
console.log(res)