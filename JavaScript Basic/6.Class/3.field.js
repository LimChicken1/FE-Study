
// 접근제어자-캡슐화 : 외부에서 데이터를 변경 할 수없게 만드는것. 
// private(#) , public(기본), protected : 다른언어에서는 접근제어 키워드가 있지만 javascript에는 없다.
class Fruit {
    #name;
    #emoji;
    #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji
  }
  #display = () => {
      console.log(`${this.#name}: ${this.#emoji}`);
  };
  
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지' // #field 에서는 외부에서 접근이 불가능함.
console.log(apple);
