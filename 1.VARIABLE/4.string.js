//문자열 타입
let string = '안녕하세요';
string =  `안녕`;
console.log(string);
string = "'안녕!'";
console.log(string);

// 특수문자 출력하는법
string = "'안녕!'";
console.log(string);

string = '안녕! \nㅎㅎ \t\t내 이름은 \\\u09AC';
console.log(string);

//템플릿 리터럴 (Template Literal)
let id = 'ㅎㅇ';
let grettings = "'안녕!, " + id + "\n즐거운 !'";
console.log(grettings);

grettings = `안녕, ${id}
즐거운!`;
console.log(grettings);