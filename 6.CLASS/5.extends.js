// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('잔다');
//     }
// }
// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('잔다');
//     }
//     play() {
//         console.log('놀자');
//     }
// }

class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('먹자!');
    }
    sleep() {
        console.log('잔다');
    }  
}

class Tiger extends Animal {}
// 자식에서 constructor를 정의하는 순간 부모클래스에 constructor를 다 받와야함
class Dog extends Animal {
    constructor(color, ownerName) {
        super(color);
        this.ownerName = ownerName;
    }
    play() {
        console.log('놀자~~');
    }
    // 오버라이딩 overriding
    eat() {
        super.eat();
        console.log('강아지가 먹는다');
    }
}

const tiger = new Tiger(' 노랑 ');
console.log(tiger);
tiger.sleep();
tiger.eat();

const dog = new Dog('빨강','DD');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();