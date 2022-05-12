// let 재할당이 가능
let a =1;
a = 2;

//connt 재할당이 불가능
//1. 상수
//2. 상수변수 또는 변수
const text ="hello";
// text ="hello";
//text = "hi"; 이렇게 하면 안됨

//1. 상수 
const MAX_FRUITS = 5; //상수를 사용할때 변수는 항상 대문자를 쓰고 단어와 단어사이는 _ 를 사용한다. 

//2. 재할당 불가능한 상수변수 또는 변수 
const apple = {
  name:"apple",
  color:"red",
  display: "🍎",
};

console.log(apple); 
apple.name ="orange";
console.log(apple);
//다만, apple이라는 object로 할당은 되지않지만, apple이라는 변수에 메모리 주소가 할당되어 있기 때문에, apple.name = 'orange'; 을 출력하면 'orange'로 출력이 된다 그 이유는  

//apple ={}; object도 다른 값으로 재할당이 불가능함. 
// 바뀌지않을 값을 const로 선언해야한다 ID,PASSWORLD 등


