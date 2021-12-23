function convertHTML(str) {
	const htmlEntities = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&apos;'
	};
	// Using a regex, replace characters with it's corresponding html entity
	return str.replace(/([&<>\"'])/g, (match) => htmlEntities[match]);
}

convertHTML('Dolce & Gabbana');
