function sequentialSizes(val){
	var multi_answer = "multi_answer";
	switch(val) {
		case 1: return  "one";
		case 2: return 	multi_answer;
		case 3: return  multi_answer;
		case 4: return  "four";
	}
}

console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));
console.log(sequentialSizes(4));
