//조건문에 해당됨 
// swich 
// siwch의 성격 
// if else if else if else if ... else

//swich를 사용해야하는 경우 
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우 (ex.요일)

//MDN 사이트 Switch 내용
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/switch 

let day = 4; // 0:월요일 , 1:화요일 ... 6:일요일 

let dayName; //if문으로 만든다면? 코드가 길어짐 
if(day === 0 ) {
  dayName ='월요일';
} else if(day === 1) {
  dayName ='화요일';
} else if(day === 2) {
  dayName ='수요일';
} else if(day === 3) {
  dayName ='목요일';
} else if(day === 4) {
  dayName ='금요일';
} else if(day === 5) {
  dayName ='토요일';
} else if(day === 6) {
  dayName ='일요일';
}
console.log(dayName);

//switch로 간편하게 만드는법 
let = day =6 
dayName = day
switch(day) {
    case 0 : 
      dayName ='월요일';
      break; //해당 요일의 조건이 맞으면 break(멈춤)될 수 있도록 꼭 넣어야한다
    case 1 :
      dayName ='화요일';
      break;
    case 2 :
      dayName ='수요일'; 
      break;
    case 3 :
      dayName ='목요일';
      break;
    case 4 :
      dayName ='금요일';
      break;
    case 5 :
      dayName ='토요일';   
      break;
    case 6 :
      dayName ='일요일';  
      break;       
}
console.log(dayName);

//break; 를 쓰지않아도 되는 경우 

let condition = 'bad'; // okay ,good ->좋음! , bad -> 나쁨! 
//하나 이상에 여러가지 case가 동일한 코드를 수행해야 한다면 break를 쓰지않아도 된다. 
let text;
switch(condition) {
  case 'okay':
  case 'good':
    text = '좋음!';
    break;
  case 'bad':
    text = '나쁨';
    break;
}
console.log(text); 
//궁금증 이런 코드를 어떻게 활용할수 있고 무엇을 만들 수 있을까? 
//솔직히 감이 안잡힌다. 

//switch에 else = default: 
let = day =10 
dayName = day
switch(day) {
    case 0 : 
      dayName ='월요일';
      break; //해당 요일의 조건이 맞으면 break(멈춤)될 수 있도록 꼭 넣어야한다
    case 1 :
      dayName ='화요일';
      break;
    case 2 :
      dayName ='수요일'; 
      break;
    case 3 :
      dayName ='목요일';
      break;
    case 4 :
      dayName ='금요일';
      break;
    case 5 :
      dayName ='토요일';   
      break;
    case 6 :
      dayName ='일요일';  
      break;
      default:  
      console.log('해당하는 요일이 없음!');
}