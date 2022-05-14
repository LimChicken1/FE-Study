const obj = {
  name:'칙힝',
  age:33,
};

//코딩하는 시점에, 정적으로 접근이 확정될때 쓸 수있다
obj.name;
obj.age;

//동적으로 속성에 접근하고 싶을때 []대괄호 표기법 사용가능!
function getValue(obj, key) {
  //return obj.key; 객체안에 key라는 이름이 없기 때문에 동적으로는 접근할 수없음! 
    return obj[key]; //대괄호를 통해 동적으로 접근할 수있게 만들어줘야함.
}
console.log(getValue(obj, 'name'));

//key값 동적으로 추가하는 방법.
function addKey(obj, key , value) {
  obj[key] = value;
}
addKey(obj, 'job', 'engineer'); //
console.log(obj);

function deleteKey(obj, key) {
  delete Obj[key];
}
