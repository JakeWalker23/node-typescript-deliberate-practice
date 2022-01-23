import { passwordChecker } from "./passwordChecker";
const prompt = require("prompt-sync")({ sigint: true });

export function run() {
    console.log("Welcome to password validation")
    const password: string = prompt("Enter a password to determine its strength: ");

    const result = passwordChecker(password)

    switch (result) {
        case 1:
            console.log(`The password ${password} is a very weak password`)
            break;

        case 2:
            console.log(`The password ${password} is a weak password`)
            break;

        case 3:
            console.log(`The password ${password} is a strong password`)
            break;

        case 4:
            console.log(`The password ${password} is a very strong password`)
            break;

        default:
            break;
    }
}

run()