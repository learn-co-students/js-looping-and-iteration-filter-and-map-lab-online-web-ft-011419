function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(driver){
    return driver.name;
  });
}

function exactMatch(drivers, matches){
  return drivers.filter(function(driver){
    let match = false;
    for (const key in matches) {
      match = driver[key] === matches[key];
    }
    return match
  });
}

function exactMatchToList(drivers, match){
  return exactMatch(drivers, match).map(function(driver){
    return driver.name;
  });
}
