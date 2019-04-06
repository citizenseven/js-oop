class Calculate{
    constructor(numberA, numberB){
        this.numberA = numberA;
        this.numberB = numberB;
    }
    add(num1 = null, num2 = null){
        if(num1 === null || num2 === null){
            return this.numberA + this.numberB;
        }
        return num1 + num2;
    }
    sub(num1 = null, num2 = null){
        if(num1 === null || num2 === null){
            return this.numberA - this.numberB;
        }
        return num1 - num2;
    }
    mul(num1 = null, num2 = null){
        if(num1 === null || num2 === null){
            return this.numberA * this.numberB;
        }
        return num1 * num2;
    }
    div(num1 = null, num2 = null){
        if(num1 === null || num2 === null){
            return this.numberA / this.numberB;
        }
        return num1 / num2;
    }
}
const calculate = new Calculate(67,14);
console.log(calculate.add());
console.log(calculate.sub());
console.log(calculate.mul());
console.log(calculate.div());

