//콜백함수 
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

//전달된 action은 콜백함수이다.
//전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
//함수를 가리키고 있는 함수에 래퍼런스(참조값)가 전달된다.
//그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에(콜백)됨.
function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(1, 2, add);
calculator(1, 2, multiply)

//분명 전단계 함수 파트를 들었는데 이해가 안될까?
//부분부분 이해가 안된 용어가 있어서 매칭이 안되는게 아닐까? 
//이해가 안된 용어
//참조값 ,외부로부터 전달받는다?