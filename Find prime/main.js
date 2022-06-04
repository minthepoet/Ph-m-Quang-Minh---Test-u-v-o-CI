function userClick(){
    var inputA = parseInt(document.getElementById("number-a").value);   
    console.log(inputA);
    var inputB = parseInt(document.getElementById("number-b").value);
    console.log(inputB);

var isPrime = 0;
var i;
var j;
var answer = [];
var final;

for (i = inputA; i <= inputB; i++){
    if (i === 0 || i === 1){
        continue;
    }
    isPrime = 1;
    for (j = 2; j <= i / 2; ++j){
        if ( i % j === 0){
            isPrime = 0;
            break;
        }
    }
    if (isPrime == 1 ){
        console.log(i);
        answer.push(i);
       
    }
}
    document.getElementById("display-screen").innerHTML = answer
}
