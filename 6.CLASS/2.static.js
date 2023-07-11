//static 정적 프로퍼티, 메서드

class Fruit {
    static MAX_FRUITS = 5;
    // 생성자 :  new 키워드로 개체를 생성할때 호출되는 함수
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    //클래스 레벨의 메서드
    static makeRandomFruit() {
        // 클래스 레벨의 메서드에서는 this를 참조할 수없음.
        return new Fruit('banana','🍌');
    }

    // 만들어진 인스턴스와 밀접한 연관이 있기 때문에 인스턴스 레벨로 두는게 좋음
    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    }

}
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);


//apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
//orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');


console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = {name : 'du'}

Math.pow();
Number.isFinite(1);