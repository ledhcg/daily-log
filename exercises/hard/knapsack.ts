// Instructions
// In this exercise, let's try to solve a classic problem.

// Bob is a thief. After months of careful planning, he finally manages to crack the security systems of a high-class apartment.

// In front of him are many items, each with a value (v) and weight (w). Bob, of course, wants to maximize the total value he can get; he would gladly take all of the items if he could. However, to his horror, he realizes that the knapsack he carries with him can only hold so much weight (W).

// Given a knapsack with a specific carrying capacity (W), help Bob determine the maximum value he can get from the items in the house. Note that Bob can take only one of each item.

// All values given will be strictly positive. Items will be represented as a list of pairs, wi and vi, where the first element wi is the weight of the ith item and vi is the value for that item.

// For example:

// Items: [ { "weight": 5, "value": 10 }, { "weight": 4, "value": 40 }, { "weight": 6, "value": 30 }, { "weight": 4, "value": 50 } ]

// Knapsack Limit: 10

// For the above, the first item has weight 5 and value 10, the second item has weight 4 and value 40, and so on.

// In this example, Bob should take the second and fourth item to maximize his value, which, in this case, is 90. He cannot get more than 90 as his knapsack has a weight limit of 10.

// https://exercism.org/tracks/typescript/exercises/knapsack

interface Item {
    weight: number
    value: number
}

function maximumValue({
    maximumWeight,
    items
}: {
    maximumWeight: number
    items: Array<Item>
}): number {
    let totalWeight: number = 0
    let arrayAvailability: Array<Array<Item>> = []

    //Check if total of list items.value < limit => return
    let totalValueSource = items.reduce((total, currentItem) => {
        return total + currentItem.weight
    }, totalWeight)
    if (maximumWeight >= totalValueSource) {
        return totalValueSource
    }

    //Continue with callback
    if (items.length - 1) {
        items.forEach((item, indexFE) => {
            callback(
                items.filter((value, index) => {
                    return index != indexFE
                }),
                maximumWeight,
                arrayAvailability
            )
        })
    }

    return findMaxTotalValue(arrayAvailability)
}

function findMaxTotalValue(array: Array<Array<Item>>): number {
    let resultArray: Array<Item> = []
    let maxTotalValue: number = 0
    array.forEach((item, index) => {
        let total = item.reduce((total, item) => {
            return total + item.value
        }, 0)
        if (total > maxTotalValue) {
            resultArray = item
            maxTotalValue = total
        }
    })
    return maxTotalValue
}

function callback(items: Array<Item>, limit: number, arrayAvailability: Array<Array<Item>>) {
    let totalWeight: number = 0
    if (
        limit >=
        items.reduce((total, currentItem) => {
            return total + currentItem.weight
        }, totalWeight)
    ) {
        arrayAvailability.push(items)
    }

    if (items.length - 1) {
        items.forEach((item, indexFE) => {
            callback(
                items.filter((value, index) => {
                    return index != indexFE
                }),
                limit,
                arrayAvailability
            )
        })
    }
}

const input = {
    maximumWeight: 10,
    items: [
        { weight: 2, value: 5 },
        { weight: 2, value: 5 },
        { weight: 2, value: 5 },
        { weight: 2, value: 5 },
        { weight: 10, value: 21 }
    ]
}
const expected = 21
const input2 = {
    maximumWeight: 10,
    items: [
        { weight: 2, value: 20 },
        { weight: 2, value: 20 },
        { weight: 2, value: 20 },
        { weight: 2, value: 20 },
        { weight: 10, value: 50 }
    ]
}
const expected2 = 80
console.log(`${maximumValue(input)} - E: ${expected}`)
console.log(`${maximumValue(input2)} - E: ${expected2}`)
