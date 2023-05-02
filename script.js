
const amount = document.getElementById('amount')
const inputText = document.getElementById('input__text')
const withdrawFunds = document.getElementById('withdrawFunds')
const depositFunds = document.getElementById('depositFunds')
const errorr = document.getElementById('errorr')


class Bank {
    constructor(name, balance) {
        this.name = name
        this.balance = balance
    
    }

    deposit(give) {
       this.balance += give
        
    }

    withdraw(take) {
        this.balance -= take
        
    }

}





const tevin = new Bank('Tevin H', 0)

username.innerText = `Hello ${tevin.name}`
amount.innerHTML = `Balance: $${tevin.balance}`


withdrawFunds.onclick = () => {
    const amountV = inputText.value
    const pools = () => errorr.innerHTML = 'Not Enough Funds'
      const clear = () => errorr.innerHTML = ''  
    
    if(amountV > tevin.balance){
        inputText.value = ''
        pools()
        setTimeout(clear, 2000)
        amount.innerHTML = `Balance: $${tevin.balance}`
    } else {
        tevin.balance -= amountV
        inputText.value = ''
        amount.innerHTML = `Balance: $${tevin.balance}`
    }
    
    
}

depositFunds.onclick = () => {
    
    const amountV = +inputText.value
    tevin.balance += amountV
    amount.innerHTML = `Balance: $${tevin.balance}`
    inputText.value = ''
}
