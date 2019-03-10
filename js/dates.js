const today = new Date();


let val;

val = today.getMinutes();
val = today.getSeconds();
val = today.getHours();
val = today.getDay();
val = today.getDate();
val = 15;

console.log(val);

if(val > 25){
    console.log("Almost Pay Day"); 
}
else{
    console.log("I am Broke!");
}
