// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000
class Employee {
    constructor(name, department, hoursPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }
    calculatePay = () => {
        return this.payRate * this.hoursPerMonth;
    }
}

class FullTime extends Employee {
    static PAY_RATE = 10000;
    constructor(name, department, hoursPerMonth) {
        super(name,department, hoursPerMonth, FullTime.PAY_RATE);
    }
}

class PartTime extends Employee {
    static PAY_RATE = 8000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, PartTime.PAY_RATE);
    }
}
const full = new FullTime('A','Consultant','2');
const part = new PartTime('B','Developer','10');
console.log(full.calculatePay());
console.log(part.calculatePay());