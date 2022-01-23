import { passwordChecker } from "../../../src/functions/passwordChecker/passwordChecker";

test("checks that passwordChecker returns true if a string is less than 8 characters and contains only numbers", () => {
    const result = passwordChecker('12345')

    expect(result).toBe(1)
})

test("checks that passwordChecker returns true if a string is less than 8 characters and contains only letters", () => {
    const result = passwordChecker('jake')

    expect(result).toBe(2)
})

test("checks that passwordChecker returns true if a string is atleast 8 characters and contains letters and numbers", () => {
    const result = passwordChecker('jakewalker1')

    expect(result).toBe(3)
})

test("checks that passwordChecker returns true if a string is atleast 8 characters and contains letters and numbers and special character", () => {
    const result = passwordChecker('jakewalker1@@')

    expect(result).toBe(4)
})
