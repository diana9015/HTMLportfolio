let cubeBox = document.querySelector('.cube');
let cubeFace = document.querySelectorAll('.cube__face');
let cubeLeg = profileFace.length;
let Num = 0;

console.log(cubeBox);

cubeBox.addEventListener('mouseenter', () => {
	Num++;
	console.log(Num);
	cubeBox.style.transform = `rotateX(${90 * Num}deg)`;
	console.log(cubeBox.style.transform);
});

// profileBox.addEventListener('click', () => {
// 	for (let i = 1; i < profileLeg; i++) {
// 		profileBox.style.transform = `rotateX(${18 * i}deg)`;
// 		console.log(i);
// 		console.log(profileBox.style);
// 	}
// });

// 큐브 각 면을 배열로 담음
// 프로필 박스를 배열로 담음
// 큐브 박스 표면에 호버시 프로필 박스의 display를 block으로 바꿔줌
