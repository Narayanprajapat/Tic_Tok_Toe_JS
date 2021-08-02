console.log('Tic Tok Toe');

// document.getElementById('0').disabled = true;
const choose = Number(prompt('Which Value You Choose :  \n1. O\n2. X'));
// console.log(choose);
var a = new Array(9);
if (choose == 1) {
	document.getElementById('choice1').innerHTML = `o`;
	document.getElementById('choice2').innerHTML = `x`;
} else if (choose == 2) {
	document.getElementById('choice1').innerHTML = `x`;
	document.getElementById('choice2').innerHTML = `o`;
}
var flag = 0;
const game = (val) => {
	// console.log(val);
	if (flag % 2 == 0) {
		a[val] = 'o';
		document.getElementById(val).value = 'o';
		document.getElementById(val).disabled = true;
		// console.log('Flag % 2 == 0', flag);

		flag++;
	} else {
		a[val] = 'x';
		document.getElementById(val).value = 'x';
		document.getElementById(val).disabled = true;
		// console.log('Flag % 2 != 0', flag);
		flag++;
	}
	// if () {
	if (a[0] == a[4] && a[0] == a[8]) {
		if (a[0] != undefined && a[4] != undefined && a[8] != undefined) {
			hideShow(a[0]);
		}
	} else if (a[2] == a[4] && a[2] == a[6]) {
		if (a[2] != undefined && a[4] != undefined && a[6] != undefined) {
			hideShow(a[2]);
		}
	} else if (a[0] == a[1] && a[0] == a[2]) {
		if (a[0] != undefined && a[1] != undefined && a[2] != undefined) {
			hideShow(a[0]);
		}
	} else if (a[3] == a[4] && a[3] == a[5]) {
		if (a[3] != undefined && a[4] != undefined && a[5] != undefined) {
			hideShow(a[3]);
		}
	} else if (a[6] == a[7] && a[6] == a[8]) {
		if (a[6] != undefined && a[7] != undefined && a[8] != undefined) {
			hideShow(a[6]);
		}
	} else if (a[0] == a[3] && a[0] == a[6]) {
		if (a[0] != undefined && a[3] != undefined && a[6] != undefined) {
			hideShow(a[0]);
		}
	} else if (a[1] == a[4] && a[1] == a[7]) {
		if (a[1] != undefined && a[4] != undefined && a[7] != undefined) {
			hideShow(a[1]);
		}
	} else if (a[2] == a[5] && a[2] == a[8]) {
		if (a[2] != undefined && a[5] != undefined && a[8] != undefined) {
			hideShow(a[2]);
		}
	}
	// }
};

function hideShow() {
	var table = document.getElementById('table');
	var winner = document.getElementById('winner');

	table.style.display = 'none';
	winner.style.display = 'block';

	var p1 = document.getElementById('player1');
	var p2 = document.getElementById('player2');

	p1.style.display = 'none';
	p2.style.display = 'none';
}
