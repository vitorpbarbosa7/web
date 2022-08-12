
var arr = [1,2,3,4,5];

function reverse(arr){
	var rarr = [];
	for (let i = arr.length-1; i >= 0; i--) {
		rarr.push(arr[i]);
	}
	return rarr;
}

console.log(reverse(arr));
