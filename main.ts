export function fizzbuzz(num: number) {
    if (calculate_modulo(num, getSecondDivisor()) == 0 && calculate_modulo(num, getFirstDivisor()) == 0) {
        console.log("FizzBuzz");
        return "FizzBuzz";
    }
    if (calculate_modulo(num, getFirstDivisor()) == 0) {
        console.log("Fizz")
        return "Fizz";
    }
    if (calculate_modulo(num, getSecondDivisor()) == 0) {
        console.log("Buzz")
        return "Buzz";
    }
    console.log(num)
    return num
}

function getSecondDivisor() {
    return 5;
}

function getFirstDivisor() {
    return 3;
}

function calculate_modulo(num: number, divisor: number): number {
    return num % divisor
}

export function main() {
    for (var i = 1; i <= 100; i++) {
        fizzbuzz(i)
    }
}