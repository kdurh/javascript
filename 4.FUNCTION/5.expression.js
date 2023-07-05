// 함수 선언문 function name() {}
// 함수 표현식 const name = function() { }

let add = function (a, b) {
    return a+ b;
}

// 화살표 함수 const name = () => { }
console.log(add(1,2));
add = (a,b) => {
    return a + b;
};
add = (a,b) => a + b;

//생성자 함수 const object = new Function();

// IIFE ( Immediately-Invoked Function Expressions) : 생성과 동시에 실행
(function run() {
    console.log('😍');
})();