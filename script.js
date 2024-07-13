/* 
🌟 APP: Malify Calculator

These are the 3 functions you must use 👇
=========================================
calculateAmount()
increaseSection()
decreasesection()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'AmountTotalInput' = User input for Amount total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfSection' = Current number of Section you're splitting the Amount between
#4 ID 👉 'perSectionTotal' = Total dollar value owed per person
*/

// Amount input, tip input, number of Section div, and per person total div
const AmountInput = document.getElementById('AmountTotalInput')
const numberOfSectionDiv = document.getElementById('numberOfSection')
const perSectionTotalDiv = document.getElementById('perSectionTotal')


// Get number of Section from number of Section div
let numberOfSection = Number(numberOfSectionDiv.innerText)

// ** Calculate the total Amount per person **
const calculateAmount = () => {
  // get Amount from user input & convert it into a number
  const Amount = Number(AmountInput.value)

// total
const total = Amount

  // calculate the per person total (total divided by number of Section)
  const perSectionTotal = total / numberOfSection

  // update the perSectionTotal on DOM & show it to user
  perSectionTotalDiv.innerText = `$${perSectionTotal.toFixed(2)}`
}

// ** Splits the Amount between more Sections **
const increaseSection = () => {
  // increment the amount of setion
  if (numberOfSection < 11) {
    numberOfSection += 1
  }
  else{
    throw "Hey! You can't have more than 11 Sections!"    
  }
  

  // update the DOM with the new number of Section
  numberOfSectionDiv.innerText = numberOfSection

  // calculate the Amount based on the new number of Section
  calculateAmount()
}

// ** Splits the Amount between fewer Section **
const decreaseSection = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of Section to 0 or negative!)
  if (numberOfSection <= 1) {
    throw 'Hey! You cannot have less than 1 Section!'
    return
  }
  
  // decrement the amount of Section
  numberOfSection -= 1

  // update the DOM with the new number of Section
  numberOfSectionDiv.innerText = numberOfSection

  // calculate the Amount based on the new number of Section
  calculateAmount()
}