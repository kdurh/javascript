// 주석
/**
 * 주석
 */
/** 변수 규칙
 * 라틴문자 (0-9,a-z,A-Z), _
 * 대소문자 구분
 * 추천 : camelCase
 * 한국어 X
 * 예약어 X
 * 숫자 시작 X
 * 특수문자 X (_,$ 예외)
 * 이모지 X
 * 여러개의 변수를 1,2,3 X -> 구체적인 이름으로
 */

let apple;
let redApple;

// 나쁜예제
let number = 20;

// 좋은예제 
let myAge = 20;

//나쁜예제
let audio1;
let audio2;

//좋은 예제
let backgroundAudio;
let windAudio;

// 꿀 (찾고싶은거 먼저 구체적인거 뒤로)
let audioBackground;
let audioWind;