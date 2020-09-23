// variable 
let cities = []
let fName = prompt('Enter first name')
cities.push(fName)
let userCity = 'start'
while(userCity != 'stop') {
  userCity = (prompt('Enter city')).toLowerCase()
  if (userCity == 'stop') {
    break;
  }
  cities.push(userCity)
  
  }
  
i = 1
while(i < cities.length) {
  console.log(cities[i])
  i++
  }