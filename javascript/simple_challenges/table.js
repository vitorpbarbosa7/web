function range(start, end) {
	var ans = [];
	for (let i = start; i <= end; i++) {
		ans.push(i);
	}
	return ans;
}

var range1 = range(1,10);
var range2 = range1;

for (let i=0; i < range1.length; i++ ) {
	for (let j=0; j < range2.length; j++) {
		multi = range1[i]*range2[j];
		str_print = `${multi} \t`
		process.stdout.write(str_print);
	}
	process.stdout.write('\n')
}
