function driversWithRevenueOver(drivers, revenue) {
  const result = drivers.filter(driver => driver.revenue > revenue);
  return result;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}

function exactMatch (drivers, obj) {
  return drivers.filter(function (driver) {
    let matches = [];

    for (const key in obj) {
      matches = driver[key] === obj[key];
    }

    return matches;
  })
}

function exactMatchToList (drivers, obj) {
  return exactMatch(drivers, obj).map(function (driver) {
      return driver.name;
    });
}
