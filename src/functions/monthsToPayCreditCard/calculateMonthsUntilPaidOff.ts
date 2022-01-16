import { calculateAPR } from "./calculateAPR"

export function calculateMonthsUntilPaidOff(balance: number, apr: number, monthlyPayments: number): number {
    const dailyRate: number = calculateAPR(apr)
    console.log("dailyRate ", dailyRate)

    const beginning: number = (- (1 / 30))

    const b_p = balance / monthlyPayments
    console.log("b_p ", b_p)




    const powerCalc = Math.pow((1 + dailyRate), 30)
    console.log("powerCalc", powerCalc)

    const power = 1 - powerCalc
    console.log("power ", power)





    const b_p_power = b_p * power
    console.log(b_p_power)

    const middle: number = Math.log(1 + b_p_power)
    console.log("middle ", middle)

    const division: number = Math.log(1 + dailyRate)
    console.log("division", division)

    const months: number = beginning * (middle / division)


    return months
}