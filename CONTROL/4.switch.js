// 조건문 Conditional Statement
// switch
// if else if else if else if ... else
// 정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우

let day = 7; // 0: 월
let dayName;

switch(day) {
    case 0:
        dayName = '월요일';
        break;
    case 1:
        dayName = '화요일';
        break;
    case 2:
        dayName = '수요일';
        break;
    case 3:
        dayName = '목요일';
        break;
    case 4:
        dayName = '금요일';
        break;
    case 5:
        dayName = '토요일';
        break;
    case 6:
        dayName = '일요일';
        break;
    default:
        dayName = '해당하는 요일 없음';
}
console.log(dayName);

let condition = 'bad'; //ok good -> 좋음, bad => 나쁨
let text;
switch(condition) {
    case 'ok':
    case 'good':
        text = '좋음';
        break;
    case 'bad':
        text = '나쁨';
        break;
}
console.log(text);