// 퀴즈!
// let num = 2;
//num의 숫자가 짝수이면 👍 출력 홀수라면👎 출력
//if 문
//삼항조건 연산자
//if 문 

//내가 문제 풀었던 반식
let num = 2;
if(num === 2){
  console.log('👍');
} else {
  console.log('👎');
}

//삼항 연산자 
let num = 2
num === 2 ? console.log('👍') : console.log('👎')

//삼항 연산자 더 간결하게 하는 방법
let emoji = num===2 ? '👍': '👎';
console.log(emoji);

//드림코딩 엘리가 문제 푸는 방법
let num =2
if (num % 2 ===0) {
  console.log('👍');
} else {
  console.log('👎');
}

//삼항 연산자 
num % 2 === 0 ? console.log('👍') : console.log('👎')
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);


