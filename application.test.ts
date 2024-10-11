import { fizzbuzz, main } from "./main";

describe("A Test", () => {
  it("succeeds", () => {
    expect(true as boolean).toEqual(true as boolean);
  });

  it("works", () => {
    main()
  });

  it("turns 3 to Fizz", () => {
    expect(fizzbuzz(3)).toEqual("Fizz")
  })
  it("turns 5 to Buzz", () => {
    expect(fizzbuzz(5)).toEqual("Buzz")
  })
  it("turns 15 to FizzBuzz", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz")
  })
});
