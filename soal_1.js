function secondLargest(arr) {
	let first = arr[0];
	let second = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > first && arr[i] > second) {
			second = first;
			first = arr[i];
		} else if (arr[i] < first && arr[i] > second) {
			second = arr[i];
		}
	}
    return second
}

console.log(secondLargest([12, 5, 7, 17, 8, 0, -1, 16, 7]));
