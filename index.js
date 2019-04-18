function driversWithRevenueOver(drivers, x) {
   return drivers.filter( driver => { return driver.revenue >= x }
   );
  // return drivers.map( (name) => {
  //   const splitName = name.split(" ");
  //   // return Object.assign({}, { firstName: splitName[0] }, { lastName: splitName[1] });
  //   return { firstName: splitName[0] , lastName: splitName[1] };
  // });
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
