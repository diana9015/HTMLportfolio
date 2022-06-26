let cubeBox = document.querySelector('.cube');
let cubeFace = document.querySelectorAll('.cube__face .innerpro');
let cubeLeg = cubeFace.length;
let Num = 0;
let profileBox = document.querySelector('.introbox');
let profileface = document.querySelectorAll('.introbox li');
let profileFaceLeg = profileface.length;
let i = 0;

console.log(profileFaceLeg);
console.log(cubeFace);

for (let i = 0; i < cubeLeg; i++) {
	cubeFace[i].addEventListener('click', function clickEv(e) {
		e.preventDefault();
		let target = e.target.dataset.id;
		console.log(target);

		for (let a = 0; a < profileFaceLeg; a++) {
			console.log(a);
			profileface[a].classList.remove('on');
			if (a == target) {
				for (let v = 0; v < profileFaceLeg; v++) {
					profileface[target].classList.add('on');
				}
			}
		}

		// for (let a = 0; a < profileFaceLeg; a++) {
		// 	console.log(i);
		// 	console.log(a);
		// 	if (a === i) {
		// 		cubeBox.style.transform = `rotateX(${30 * i}deg)`;
		// 		profileface[a].classList.add('on');
		// 	}
		// }
	});
}

console.log(profileBox);
console.log(profileface);

// for (let i = 0; i < cubeLeg; i++) {
// 	console.log(i);
// 	cubeFace[i].addEventListener('click', (e) => {
// 		cubeBox.style.transform = `rotateX(${30 * i}deg)`;
// 		console.log(i);
// 		for (let a = 0; a < profileFaceLeg; a++) {
// 			console.log(i);
// 			profileface[a].classList.remove('on');
// 		}
// 		e.currentTarget.classList.add('on');
// 	});
// }

// console.log(profileBox);
// console.log(profileface);
