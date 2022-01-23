export function passwordChecker(password: string) {
    if (password.length < 8 && password.match(/^\d+$/)) {
        return 1
    } else if (password.length < 8 && password.match(/^[a-zA-Z]+$/)) {
        return 2
    } else if (password.length > 7 && password.match(/^[a-zA-Z0-9]+$/i)) {
        return 3
    } else if (password.length > 7 && password.match(/^[ A-Za-z0-9_@./#&+-]*$/)) {
        return 4
    }
    return false
}