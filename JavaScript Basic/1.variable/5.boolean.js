
//  불리언(boolean) 타입
let 참 = true;
let 거짓 = false;

console.log(참);
console.log(거짓);

// boolean 활용 예시: 형용사처럼 일까 아닐까 같은 답을
// 표현할때 is를 붙여서 사용 할 수 있다.
let isFree = true; //isFree ? 이거 무료니? 
let isActivated = false; //isActivated 활성화가 되었니?
let isEnrolled = true // isEnrolled 등록이 되었니? 

console.log(isFree);
console.log(isActivated);
console.log(isEnrolled);

// 중요! 

// 기본값이 true = Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);



// 기본값이 fales = Falshy 거짓인 값 
// boolean값으로 변환해주는 연산자 '!!'
console.log(!!0);
console.log(!!-0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);


