const textObj = new String('Hello World!');
const text = 'Hello World';
console.log(textObj);
console.log(text);
console.log(text.length);
console.log(text.substring);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));

console.log(text.indexOf('tx'));
console.log(text.indexOf('h'));
console.log(text.indexOf('H'));

console.log(text.startsWith('He'));
console.log(text.endsWith('!'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0,2));
console.log(text.slice(2));
console.log(text.slice(-2));

const space = '             space            ';
console.log(space.trim());

const longText = 'Get to the past';
console.log(longText.split(' '));
console.log(longText.split(' ',2));