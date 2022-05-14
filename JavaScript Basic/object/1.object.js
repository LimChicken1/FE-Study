// Object literal {key :value}
// New Object() claas를 이용해서 객체를 만들수있음
// Object.create(); create를 이용해서 객체를 만들수 있음
// key - 문자,숫자,문자열,심볼
// value -원시값(숫자,문자), 객체(함수)

let apple = {
  name:'apple',
  'hello-bye': '🤚', //문자열은 -를 통해 여러가지를 연결해서 사용할 수있다.
  0:1, //숫자도 사용가능
  ['hello-bye']: '🤚' //대괄호 안에 작성된 문자열들은 전부 key 
}

//속성, 데이터에 접근하기 위해서는 객체.name; 

console.log(apple.name);//apple.name; //마침표 표기법 dot notation
console.log(apple['hello-bye']); //대괄호 표기법 bracket notation 
apple['name'];

// 속성 추가 
apple.emoji ='🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

//속성 삭제 
delete apple.emoji;
console.log(apple.emoji); //undefined
