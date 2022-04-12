// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given  and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

function find2Numbers(numbers: Array<number>, k: number): boolean {
    for (let num of numbers) {
        for (let num1 of numbers) {
            if (num + num1 == k) {
                return true
            }
        }
    }
    return false
}

console.log(find2Numbers([10, 15, 3, 7], 17))
console.log(find2Numbers([10, 15, 3, 7, 0], 43))
