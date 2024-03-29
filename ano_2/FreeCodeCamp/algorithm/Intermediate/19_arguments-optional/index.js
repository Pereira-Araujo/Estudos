function addTogether() {
	const [ first, second ] = arguments;
	if (typeof first !== 'number') return undefined;
	if (second === undefined) return (second) => addTogether(first, second);
	if (typeof second !== 'number') return undefined;
	return first + second;
}

console.log(addTogether(2, 3));
console.log(addTogether(2, '3'));

// 5
// undefined
