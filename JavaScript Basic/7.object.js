// slid 노트 주소 
// https://slid.cc/docs/462fdba2b68c4d809cc017da7d4c1c88

//객체로 묶지 않았을때 생기는일 
let name ="apple";
let color ="red";
let display ="🍎";
let orangeName ="orange";

//객체를 쓰지않는다면,
//예시처럼 과일이 많이지면 많아 질 수록  
//변수의 값을 반복적으로 바꿔줘야하는 번거로움이 생긴다.

//객체로 묶는 방법

let apple = {
  name:"apple",
  color:"red",
  display: "🍎",
};

console.log(apple); //객체 전체를 출력
console.log(apple.name); //객체에서 1개씩 접근하고 싶을때
console.log(apple.color);
console.log(apple.display);

//오렌지 만들기

let orange = {
  name:"orang",
  color:"yellow",
  display:"🍊"
};

console.log(orange);
console.log(orange.color);
console.log(orange.name);
console.log(orange.display);