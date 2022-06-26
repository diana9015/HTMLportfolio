//l<<로그인팝업>>

const header = document.querySelector('#header_sub');
let logOpen = document.querySelector('.logopen');
let logOpenmob = document.querySelector('.logopenmob');
let subLog = document.querySelector('.sublog');
let sublogClose = document.querySelector('.sublogclose');

logOpen.addEventListener('click', (e) => {
	e.preventDefault();
	subLog.style.display = 'block';
});

logOpenmob.addEventListener('click', (e) => {
	e.preventDefault();
	subLog.style.display = 'block';
});

sublogClose.addEventListener('click', (e) => {
	e.preventDefault();
	subLog.style.display = 'none';
});

//<모바일메뉴>
const mobBtn = document.querySelector('.btnCall');
const subMob = document.querySelector('.submob');

mobBtn.onclick = function (e) {
	//링크이동금지
	e.preventDefault();
	mobBtn.classList.toggle('on');
	subMob.classList.toggle('on');
};

mobBtn.addEventListener('click', () => {
	if (subMob.style.display == 'block') {
		subMob.style.display = 'none';
	} else {
		subMob.style.display = 'block';
	}
});
