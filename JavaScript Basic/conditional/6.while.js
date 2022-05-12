// while(조건) {} 조건이 맞으면 계속 코드블럭을 실행함.
// 조건이 false가 될때까지 {} 코드를 반복 실행 
// while은 변수를 초기화하거나 증가하는 부분이 없기 때문에 외부에서 해줘야함

// let num = 5; //5부터 시작해서 5가 0보다 크니까 실행이 됨-> num--1; 에서 1이 감소하면 4가 되고 4가 0보다 크기때문에 0이 false가 될때까지 반복하는것 
while(num >= 0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;
while(isActive) {
  console.log('아직살아있다!');
  if(i === 1000){
    break;
  }
  i++; 
}

//do while 
do {
  console.log('아직살아있다!');
} while(isActive);

//while vs do while 차이점
//1. while은 조건이 맞을때만 실행됨 let isActive =false 라서 실행이 안됨.
let isActive = false;
let i = 0;
while(isActive) {
  console.log('아직살아있다!');
  if(i === 1000){
    break;
  }
  i++; 
}

//2. do while은 false여도 일단 실행하고 그다음에 조건을 검사한다.  

//do while 
do {
  console.log('do-while 아직살아있다!');
} while(isActive);