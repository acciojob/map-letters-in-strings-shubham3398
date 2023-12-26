//your JS code here. If required.
function mapLetter(s) {
	let map = {};

	for(let i in s){
		if(!map[s.charAt(i)]) {
			map[s.charAt(i)] = [i];
		}else{
			map[s.charSt(i)].push(i);
		}
	}

	return map;
}

let input = prompt("Enter the string");
alert(mapLetter(input)); 