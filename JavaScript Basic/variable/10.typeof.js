
// typeof : 데이터 타입을 확인할 수있는 연산자
// 값을 타입 문자열로 반환해주는 연산자
let variable;
console.log(typeof variable);

variable = "";
console.log(typeof variable);

variable = 123; // 할당된 값에 따라 타입이 결정됨
console.log(typeof variable);

// 컴파일 언어의 타입 확인방법
// Int variable =0; 
//컴파일할때 숫자구나 라고 정적으로 결정이됨
// 한번 tpye이 결정되면 다른 tpye으로 변경할 수없음

variable = {}; //type object
console.log(typeof variable);

variable = function () {};  //type funtion
console.log(typeof variable);

variable = Symbol(); //type Symbol
console.log(typeof variable);