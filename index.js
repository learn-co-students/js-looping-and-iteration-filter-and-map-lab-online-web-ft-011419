// Code your solution here:
function driversWithRevenueOver(driver,revenue){ 
  return driver.filter(function ( data) {return data.revenue > revenue }
  )
}

function driverNamesWithRevenueOver(driver, revenue) { 
  return driversWithRevenueOver(driver, revenue)
   .map(function (object) {
    return object.name
    })
}  

function exactMatch(drivers, object) { 
    return drivers.filter(function(driver){

      for (const key in object){
      return driver[key] ===  object[key]
    }})
}





function exactMatchToList(drivers, object){
  return exactMatch(drivers, object)
    .map(function (driver) {
    return driver.name
    }) 
}



