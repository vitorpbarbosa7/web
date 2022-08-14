function caseInSwitch(val) {
	var answer = "";
	switch(val) {
		case 1:
			answer = 'alpha';
			break;
		case 2:
			answer = 'beta'
			break;
		default:
			answer = "stuff";
			break;
	}

	return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));

