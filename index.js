// Code your solution here:
function driversWithRevenueOver(drivers, x) {
   return drivers.filter( driver => { return driver.revenue >= x }
   );
}

function driverNamesWithRevenueOver(drivers, x) {
  return driversWithRevenueOver(drivers, x).map( driver => { return driver.name }
  );
}

function exactMatch(drivers, object) {
  return drivers.filter( function (driver) {
    let matches;

    for (const key in object) {
        matches = (driver[key] === object[key]);
    }

    return matches;
  });
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map( driver => { return driver.name }
  );
}