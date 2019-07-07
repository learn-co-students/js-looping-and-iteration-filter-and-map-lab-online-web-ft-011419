// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => {return driver.name })
}

// function driverNamesWithRevenueOver(drivers, revenue) {
//   return driversWithRevenueOver(drivers, revenue).map(function(driver) {
//     return driver.name })
// }

function exactMatch(drivers, attributes) {
  return drivers.filter(driver => {
    let matches

    for (const key in attributes) {
      matches = (driver[key] === attributes[key])
    }

    return matches
  })
}

function exactMatchToList(drivers, attributes) {
  return exactMatch(drivers, attributes).map(driver => {return driver.name})
}
