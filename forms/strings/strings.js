//var B
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
//cap C
let upperCaseString = quoteString.toUpperCase()
console.log(`Upper case string is: ${upperCaseString}`)
//author var D
let authorString = "- Henry Ford"
//combine E
let completeString = quoteString + authorString
console.log(`The string in completeString is: ${completeString}`)
let found
if (completeString.includes("Henry") == true) {
  found = 'Henry was in the quote string'
} else {
  found = 'Henry was' + 'NOT'.bold() + 'in the quote string'
}
console.log(found)
// var F
let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
// low G
let lowerCaseString = quoteString.toLowerCase()
console.log(`Lower case string is: ${lowerCaseString}`)
// H
let num3 = Number(prompt('Enter a number to be added by 10'))
let sumNum = addinput(num3, 10)
alert(`The number ${num3} + 10 is ${sumNum}.`)