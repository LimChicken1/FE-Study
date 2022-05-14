

//static 정적 프로퍼티, 메서드에 대해 알아보기 
class Fruit {
  static MAX_FRUITS = 4;
  //생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji
  }
  //class별로 공통적으로 사용할 수있고, 만들어진 인스턴스 데이터에 참조할 필요가 없는 경우라면, static을 만들 수있다.
  //클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit('banana',  '🍌');
  }
  //인스턴스 레벨의 메서드
  display = () => {
      console.log(`${this.name}: ${this.emoji}`);
  };
  
}
//class안에 static을 넣지 않으면 클래스이름 자체로는 접근이 안됨.
// console.log(Fruit.name);
// Fruit.display();

// 클래스 레벨의 함수는 클래스 이름으로 접근이 가능하고
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// 인스턴스 레벨의 속성,함수는 만들어진 인스턴스를 통해서 접근이 가능함.
// apple은 Fruit 클래스의 인스턴스이다. 
const apple = new Fruit('apple', '🍎');
// orange는 Fruit 클래스의 인스턴스이다 
const orange = new Fruit('orange', '🍊');


console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.emoji);
apple.display();

// obj는 그냥 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj ={name: 'chicken'}

// static 사용 예제
Math.pow();
Number.isFinite(1);