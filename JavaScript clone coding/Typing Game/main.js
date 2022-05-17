// 랜덤으로 뜨는 text와 비교해서 text와 같을 경우 점수를 1점 올려주는 코드를 작성한다. 
//점수는 변경되어야 하기 때문에 변수의 선언은 let으로 한다

let score = 0;
let time = 9;
let isPlaying = false;


//input창에 글자를 입력했을때 그 값을 받아오는 기능 
const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay =document.querySelector('.score');
const timeDisplay =document.querySelector('.time');

//console 창의 값을 받아오기 위해서 무엇을 해야할까?
//이벤트를 걸어준다 
//wordInput.addEventListener('이벤트','기능')


//Input 
wordInput.addEventListener('input',()=>{
  
  if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
    score++; //if에서 true라면 score를 +1씩 증가시킨다 
    scoreDisplay.innerText = score; //점수가 +1씩 올라가는 변수가 담겨있음
    wordInput.value =""; //정답일때 input value 초기화 
  }
})

//함수를 1초마다 실행시켜주는 interval(인터벌(=시간적인 간격)) 만들기 
setInterval(countDown,1000);




//button을 눌렀을때 남은시간이 카운트다운(시간제한)이 되도록 만들기 
function countDown(){
    time > 0 ? time -- : isPlaying =false; //삼항연산자 
}




//처음 본 메서드
//.innerText , .toLowerCase():소문자로 비교해주는 메서드?  

//복습하기 
//삼항연산자, 

