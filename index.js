// Code your solution here:
function driversWithRevenueOver(drivers, r) {
  return drivers.filter(function(driver) {
    return driver.revenue > r
  })
}
function driverNamesWithRevenueOver(drivers, r) {
  return driversWithRevenueOver(drivers, r).map(function(driver) {
      return `${driver.name}`
  })
}
function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    let matches = false
    for (const key in obj) {
      matches = driver[key] === obj[key]
    }
    return matches
  })
}
function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function(driver) {
    return driver.name
  })

}
