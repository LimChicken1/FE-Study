//조건문

/*if(조건식) {
  동작문1
  동작문2
  동작문3
}
*/

/*if(true) { <-조건이 true라면 실행
  console.log('Hello, if!');
}*/

let conditional = true;

if (conditional) {
  console.log("Hello, if!");
}

//else,else if , switch

if (false) {
  console.log('Hello,if!');
} else {
  console.log('Hello,else');
}

let stopLight = '초록불';

if (stopLight === '빨간불') {
  console.log('멈춤!');
} else if (stopLight === '노란불'){
  console.log('천천히');
} else if (stopLight === '초록불'){
  console.log('출발');
} 

//논리 연산자 
//and(&&) , or(||)

let day = 'saturday';

if (day === 'saturday' && day === 'sunday') {
  console.log('주말이다!');
} else {
  console.log('출근하자');
}


//예제 
// 90점 이상 A+ 
// 90점 미만 80점 이상 A
// 80점 이상 70점 미만 B+ 
// 70점 이상 60점 미만 B
// 60점 미만 F
const score = 40;
if (score >= 90) {
  console.log('A+');
} else if (score < 90 && score >= 80 ) {
  console.log('A');
} else if (score < 80 && score >= 70 ) {
  console.log('B+');
} else if (score < 70 && score >= 60 ) {
  console.log('B');
} else (score >= 60) //else는 false일때 실행됨 score(60미만)보다 60이 크다는것은 flase니까 else가 실행됨.
  console.log('F');

  //즉, if , else if는 조건이 true일때 실행 되고 
  //else는 조건이 false가 되면 실행됨.
  