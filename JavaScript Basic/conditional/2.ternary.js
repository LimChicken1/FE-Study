//삼항 조건 연산자 Teranry Operator
//조건식 ? 참인경우 : 거짓인경우에 실행하는것. 

let fruit ='apple';
if(fruit === 'apple'){
  console.log('🍎');
} else {
  console.log('🍻');
}
fruit === 'apple' ? console.log('🍎') : console.log('🍻');

let emoji = fruit === 'apple' ? '🍎' : '🍻';
console.log(emoji);