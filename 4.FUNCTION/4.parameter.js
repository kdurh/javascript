//매개변수의 기본값은 무조건 undefined
//매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
//매개변수 기본값 Default num1 = 1, num2 = 1
function add(num1 = 1,num2 = 1) {
    console.log(num1);
    console.log(num2);
    console.log(arguments);
    console.log(arguments[1]);
    return num1 + num2;
}
add();

//Rest 매개변수 Rest Parameters
function sum(a,b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
}
sum(1,2,3,4,5,6,7,8);