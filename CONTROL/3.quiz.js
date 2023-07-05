//퀴즈
let num = 3;
// num 짝수 👍 홀수 👎

//if
if(num%2 == 0) {
    console.log('👍');
} else {
    console.log('👎');
}

let emoju = num%2==0 ? '👍' :'👎';
console.log(emoju);