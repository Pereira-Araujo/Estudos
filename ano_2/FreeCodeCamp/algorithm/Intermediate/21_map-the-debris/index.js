function orbitalPeriod(arr) {
	var GM = 398600.4418;
	var earthRadius = 6367.4447;
	var newArr = [];

	//Looping through each key in arr object
	for (var elem in arr) {
		//Rounding off the orbital period value
		var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM));
		//Adding new object with orbitalPeriod property
		newArr.push({ name: arr[elem].name, orbitalPeriod: orbitalPer });
	}

	return newArr;
}

orbitalPeriod([ { name: 'sputnik', avgAlt: 35873.5553 } ]);
//[ { name: 'sputnik', orbitalPeriod: 86400 } ]
