//불리언 타입
let 참 = true;
let 거짓 = false;

console.log(참);
console.log(거짓);

//활용예:
let isFree = true;
let isActivated = false;
let isEnrolled = true;

console.log(isFree);
console.log(isActivated);
console.log(isEnrolled);

console.clear();

// !!를 붙이면 값을 true나 false로 변환해줌
//Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

//Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);
