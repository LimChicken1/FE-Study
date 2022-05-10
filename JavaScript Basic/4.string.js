//문자열 타입 
let string ="안녕하세요";
console.log(string);

string = '안녕?!';
console.log(string);


// 특수 문자 출력 방법
string = "'안녕!'";
console.log(string);


// \n <br/> 
//\t : tap 
//\\ : \
// \u09AC :unit code 
// MDN String Escape sequences
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
string = '안녕!\n칙힝아\t\t 내이름은\\ '; 
console.log(string);

//템플릿 리터럴? (Template Literal) ``
let id ="칙힝";
let greetings ="'안녕!, " + id + "👍\n 최고에요!'";
console.log(greetings);

// 위의 예시를 간편하게 할 수 있는 방법이 템플릿 리터럴 (Template Literal)이다.

greetings = `'안녕, ${id}🤞
즐거운 하루 보내요!`;
console.log(greetings);