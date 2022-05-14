//원시 타입은 값이 복사되어 전달됨.
let a = 1;
let b = a; //1
console.log(a);

b=2;
console.log(a);
console.log(b);

//객체 타입은 참조값(메모리 주소 , 레퍼런스)가 복사되어 전달됨
let apple = {  //2. apple이 가르키고 있는 주소값이 복사됨.
  name:'사과',
};

let orange = apple; //1.apple이라는 객체에 orange를 할당하게 되면 어떻게 될까? 
orange.name ='오렌지'; //3. 객체안에 이름을 바꾸게 되면 
console.log(apple); //4. apple을 출력해도 oramge로 바뀌게 된다.
console.log(orange);