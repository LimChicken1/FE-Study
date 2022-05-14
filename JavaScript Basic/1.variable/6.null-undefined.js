//null , undefined 


// undefined 메모리상에 어떤 데이터도 들어있지 않고,
// 정해져있지 않은 상태를 나타냄 
let variable;
console.log(variable);

// null 데이터가 없다는것을 명시 하는 것.
// 변수가 비어 있는 것.
variable = null
console.log(variable);

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태! 
activeItem = null; // 활성화된 아이템이 없는 상태! 

//typeof = type을 출력할 수 있는 명령어
console.log(typeof 123); // number
console.log(typeof "text"); //string
console.log(typeof null); // object javascript 자체에서 null을 표현 하기 위해서 
                          // object를 만들고 null을 표현한다 
                          // 즉, null을 만들어서 할당하면 메모리상에 null이 할당되어 비어있다는것을 나타낼수 있다.
                          
console.log(typeof undefined);  // undefined 메모리에 들어 있지 않은 상태 
