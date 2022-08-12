function testLogicalAnd(val) {
	
	if (val >= 7 && val <= 13) {
		return "Yes";
	}
	return "No";
}

console.log(testLogicalAnd(10));
console.log(testLogicalAnd(15));
