
// const apple = {
//   name:'apple',
//   displeay: function() {
//       console.log(`${this.name}:🍎`);
//   },
// };

// apple.displeay();
// const orange = {
//   name:'orange',
//   displeay: function() {
//       console.log(`${this.name}:🍊`);
//   },
// };
// console.log(apple);
// console.log(orange);

//생성자 함수
function Fruit(name, emoji) { //Fruit <대문자로 만들면 생성자 함수를 만들 수있음.
  this.name = name; //this를 이용하면 객체 자기 자신을 가리킬수 있음
  this.emoji = emoji
  this.display = () => {
      console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략가능
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.emoji);
apple.display();