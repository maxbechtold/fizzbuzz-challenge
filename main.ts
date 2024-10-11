export function fizzbuzz(num: number) {
    if (num % 5 == 0 && num % 3 == 0) {
        console.log("FizzBuzz");
        return "FizzBuzz";
    }
    if (num % 3 == 0) {
        console.log("Fizz")
        return "Fizz";
    }
    if (num % 5 == 0) {
        console.log("Buzz")
        return "Buzz";
    }
    console.log(num)
    return num
}

export function main() {
    for (var i = 1; i <= 100; i++) {
        fizzbuzz(i)
    }
}