//사용예제 1
// function add(a, b) {
//   console.log('function');
//   return a + b;
// }

// const result = add(1,2); //함수 호출 (인자값)
// console.log(result);

// 사용예제 2
// let lastName = '김';
// let firstName = '지수';
// // let fullName =`${lastName} ${firstName}`;
// console.log(fullName);

// let lastName = '임';
// let firstName = '승현';
// // let fullName =`${lastName2} ${firstName2}`;
// console.log(fullName);

//사용예제2 함수로 만들기 
//내가 먼저 해보기 
//결과 : 실패! 
// function userName ('a' + 'b') {
//   return 'a' + 'b';
// } 

// let result= userName('김' +'지수');
// console.log(userName);

// 강의 답안 
function userName(lastName,firstName) {
  return `${lastName} ${firstName}😎`;
}

let lastName = '김';
let firstName = '지수';

console.log(userName(lastName,firstName));

let lastName2 = '임';
let firstName2 = '승현';

console.log(userName(lastName2,firstName2));