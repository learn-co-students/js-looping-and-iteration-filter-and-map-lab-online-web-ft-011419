// Code your solution here:
function driversWithRevenueOver(drivers, num) {
  return drivers.filter(driver => driver.revenue > num)
}

function driverNamesWithRevenueOver(drivers, num) {
  const revArray = []
  const newDrivers = driversWithRevenueOver(drivers, num)
  newDrivers.map(driver => revArray.push(driver.name))
  return revArray
}

function exactMatch(drivers, attr) {

  return drivers.filter(function (driver) {
    let matches;

    for (const key in attr) {
      matches = driver[key] === attr[key]
    }

    return matches
  })
}

function exactMatchToList(drivers, attr) {

  const matchArray = []
  const matchingDrivers = exactMatch(drivers, attr)
  matchArray.push(matchingDrivers.map(driver => driver.name))
  return matchArray.flat()
}