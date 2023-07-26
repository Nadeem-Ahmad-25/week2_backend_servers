
var count = 0;
function counter(){
    console.clear()
    console.log(count);
    count = count +1;
    setTimeout(counter, 1000);
}
setTimeout(counter, 1000);
//setInterval(counter,1000);