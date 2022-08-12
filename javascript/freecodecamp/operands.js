function testEqual(val) {
	if (val == 12) {
		return "Equal";
	}
	return "Not Equal";
}

console.log(testEqual(10));

function testStrict(val) {
	if (val === 13) {
		return "Equal";
	}
	return "Not  Equal";
}

console.log(testStrict(13));
console.log(testStrict("13"));
	
