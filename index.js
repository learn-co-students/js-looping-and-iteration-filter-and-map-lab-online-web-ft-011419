function driversWithRevenueOver(array, integer) {
    return array.filter(function(element) {
        return element.revenue > integer
    })
}

function driverNamesWithRevenueOver(array, integer) {
    const newArray = []
    
    array.map(function(element) {
        if (element.revenue > integer) {
            newArray.push(element.name)
        }
    })

    return newArray
}

function exactMatch(array, object) {
    const k = Object.keys(object)
    const v = Object.values(object)

    return array.filter(function(element) {
        return element[k] == v
    })
}

function exactMatchToList(array, object) {
    const k = Object.keys(object)
    const v = Object.values(object)

    return array.filter(function(element){
        if (element[k] == v) {
            return element.name
        }
    }).map(function(element) { return element.name })
}