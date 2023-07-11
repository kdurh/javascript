// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 잇는 카운터를 만들기
// Counter 클래스 만들기

class Counter{
    #value;
    constructor(initNum) {
        this.#value = initNum < 0 || isNaN(initNum) ? 0 : initNum;
    }
    get value() {
        return this.#value;
    }
    increment = () => {
        this.#value++;
    }
}

const a = new Counter(-2);
console.log(a);
a.increment();
console.log(a);
console.log(a.value);