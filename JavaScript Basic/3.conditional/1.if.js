// 조건문 conditional Statement
//if(조건) { }
//if(조건) { } else { }
//if(조건) { } else if(조건2) {} else {}
let fruit ='apple';
if(fruit === 'apple'){
  console.log('🍎');
} else if(fruit === 'orange') { //else : 위의 조건이 아니라면 
  console.log('🍊');
} else {
  console.log('🍻');
}

 console.clear

// console.log가 출력되지 않게 하려면? 
//if(false,null,0,undefined)
if(false) {
  console.log('출력되면안됨!');
}
