const prompt = require("prompt-sync")({ sigint: true });
import { calculateMonthsUntilPaidOff } from "./calculateMonthsUntilPaidOff";

export function MonthsToPayOffCreditCard() {
    console.log("working")
    const balance: number = prompt("What is your balance? ")
    const apr: number = prompt("What is the APR on the card (as a percent)? ")
    const monthlyPayment: number = prompt("What is the monthly payment you can make? ")

    console.log(balance, apr, monthlyPayment)

    const months = calculateMonthsUntilPaidOff(balance, apr, monthlyPayment)

    console.log(months)
}

MonthsToPayOffCreditCard()