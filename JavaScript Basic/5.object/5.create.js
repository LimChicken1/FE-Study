
// const apple = {
//   name:'apple',
//   displeay: function() {
//       console.log(`${this.name}:π`);
//   },
// };

// apple.displeay();
// const orange = {
//   name:'orange',
//   displeay: function() {
//       console.log(`${this.name}:π`);
//   },
// };
// console.log(apple);
// console.log(orange);



//μμ±μ ν¨μ
function Fruit(name, emoji) { //Fruit <λλ¬Έμλ‘ λ§λ€λ©΄ μμ±μ ν¨μλ₯Ό λ§λ€ μμμ.
  this.name = name; //thisλ₯Ό μ΄μ©νλ©΄ κ°μ²΄ μκΈ° μμ μ κ°λ¦¬ν¬μ μμ
  this.emoji = emoji
  this.display = () => {
      console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // μλ΅κ°λ₯
}

const apple = new Fruit('apple', 'π');
const orange = new Fruit('orange', 'π');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.emoji);
apple.display();