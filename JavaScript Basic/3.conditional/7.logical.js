//제어문에서 자주 쓰이는 연산자 
//논리연산자 Logical operator 

//&& 그리고 
//|| 또는
//! 부정(단항연산자에서 온것)
//!! 불리언값으로 변환해주는것 (단항연산자 응용버전)


//AND 연산자
// let num =8;
// if(num >= 0 && num <9){ // 
//   console.log('하이');
// }

//OR 연산자 : 둘중  하나만 True이면 됨.
// let num =8;
// if(num >= 0 || num >20 ){ // 
//   console.log('하이');
// }

//부정연산자 
let num =8;
if(!(num >= 0 && num <9)){ // 
  console.log('하이');
}

if(num !=8) {
  console.log('헬로');
}

//Quiz 
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log(true || true ); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log(!'text'); //false
console.log(!!'text'); //true