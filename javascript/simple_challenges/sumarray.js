function array_sum(arr) {
	soma = 0;
	for (let i = 0;i < arr.length; i++){
		soma += arr[i];
	}
	return soma;
}

let arr = [1,-4,+5,-7,8,4,4,4,4]

console.log(array_sum(arr))


var table = [
		[1,2],
		[2,3],
		[3,4]
	];

//arrayColumn function using map method from the array created
function arrayColumn(arr, n) {
	return arr.map(x=> x[n])
}

console.log(arrayColumn(table, 1))
console.log(table.slice(1))
