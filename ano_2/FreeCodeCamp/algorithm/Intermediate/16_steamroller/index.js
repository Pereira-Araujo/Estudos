function steamrollArray(arr) {
	const flattenedArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			flattenedArray.push(...steamrollArray(arr[i]));
		} else {
			// Copy contents that are not arrays
			flattenedArray.push(arr[i]);
		}
	}
	return flattenedArray;
}

steamrollArray([ 1, [ 2 ], [ 3, [ [ 4 ] ] ] ]);
//response: [ 1, 2, 3, 4 ]
