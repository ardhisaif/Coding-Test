let data = [
	"evan|50000|D",
	"jefry|70000|C",
	"rizky|30000|D",
	"hanson|10000|B",
	"candra|30000|A",
	"goklas|20000|A",
	"hendra|20000|B",
	"surya|30000|A",
];

function sortName(data) {
	data.sort((a, b) => {
		if (a.split("|")[1] < b.split("|")[1])
			if (a.split("|")[2] < b.split("|")[2]) {
				return -1;
			} else {
				return 1;
			}
		if (a.split("|")[1] > b.split("|")[1])
			if (a.split("|")[2] > b.split("|")[2]) {
				return 1;
			} else {
				return -1;
			}
		return 0;
	});

	let result = [];
	for (let i = 0; i < data.length; i++) {
		result.push(data[i].split("|")[0]);
	}

	return result
}

console.log(sortName(data));
