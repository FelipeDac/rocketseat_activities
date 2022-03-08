let family = {
    incomes: [100, 320, 555, 280],
    expenses: [95, 369, 20, 86.90]
}

function sum(array) {
    total = 0;

    for (let value of array) {
        total += value
    }

    return total;
}

function balanceCalcule() {
    const incomesAmount = sum(family.incomes);
    const allExpenses = sum(family.expenses);
    const familyBalance = incomesAmount - allExpenses;

    finalBalance = familyBalance >= 0
    let balanceText = 'negativo'

    if (finalBalance) {
        balanceText = 'positivo'
    }
    console.log(`O saldo da familia é ${balanceText}: $${familyBalance.toFixed(2)}`)
}

balanceCalcule()

