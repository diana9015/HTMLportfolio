const header = document.querySelector('header');
const popup = header.querySelector('.popup');
const btnClose = popup.querySelector('.btnclose');
const isCookie = document.cookie.indexOf('today=done');
let isOn;

//<쿠키생성>>
isCookie == -1 ? (isOn = 'block') : (isOn = 'none');
popup.style.display = isOn;

btnClose.addEventListener('click', (e) => {
	e.preventDefault();

	let isChecked = popup.querySelector('input[type=checkbox]').checked;
	if (isChecked) setCookie('today', 'done', 1);

	popup.style.display = 'none';
});

function setCookie(name, val, due) {
	const today = new Date();
	const day = today.getDate();
	today.setDate(day + due);
	const duedate = today.toGMTString();
	document.cookie = `${name}=${val}; path=/; expires=${duedate}`;
}

//<슬라이드>
const slider = document.querySelector('#slider');
const ul = slider.querySelector('ul');
const control = document.querySelector('.control');
const prev = control.querySelector('.prev');
const next = control.querySelector('.next');
const speed = 1000;
let enableClick = true;

ul.style.left = '-100%';

next.addEventListener('click', (e) => {
	e.preventDefault();

	if (enableClick) {
		enableClick = false;
		nextSlide();
	}
});

prev.addEventListener('click', (e) => {
	e.preventDefault();

	if (enableClick) {
		prevSlide();
		enableClick = false;
	}
});

function nextSlide() {
	new Anime(ul, {
		prop: 'left',
		value: '-200%',
		duration: 1000,

		callback: () => {
			ul.style.left = '-100%';
			ul.append(ul.firstElementChild);
			enableClick = true;
		},
	});
}

function prevSlide() {
	new Anime(ul, {
		prop: 'left',
		value: '0%',
		duration: 1000,

		callback: () => {
			ul.style.left = '-100%';
			ul.prepend(ul.lastElementChild);
			enableClick = true;
		},
	});
}

//<모바일메뉴>
const btnCall = document.querySelector('.btnCall');
const menuMo = document.querySelector('.mob_nav');

btnCall.onclick = function (e) {
	//링크이동금지
	e.preventDefault();
	btnCall.classList.toggle('on');
	menuMo.classList.toggle('on');
};

btnCall.addEventListener('click', () => {
	if (menuMo.style.display == 'block') {
		menuMo.style.display = 'none';
	} else {
		menuMo.style.display = 'block';
	}
});

//<로그인창>>

let logOpen = document.querySelector('.logopen');
let logOpenmob = document.querySelector('.logopenmob');
let logClose = document.querySelector('.logclose');
let logPop = document.querySelector('.loginpop');

logOpen.addEventListener('click', (e) => {
	e.preventDefault();
	logPop.style.display = 'block';
});

logOpenmob.addEventListener('click', (e) => {
	e.preventDefault();
	logPop.style.display = 'block';
});

logClose.addEventListener('click', (e) => {
	e.preventDefault();
	logPop.style.display = 'none';
});

//탑버튼
let btt = document.querySelector('#back-to-top'); //변수에 조절할 버튼 담음
let docElem = document.documentElement;
let docuHg = docElem.scrollHeight;
let docuHt = docElem.offsetHeight;
let offset;
let scrollPos;

docuheight = Math.max(docuHg, docuHt);

if (docuheight != '') {
	offset = docuheight / 4;
}

window.addEventListener('scroll', function () {
	scrollPos = docElem.scrollTop; //스크롤 양 정의

	btt.className = scrollPos > offset ? 'visible' : '';
});
btt.addEventListener('click', function (e) {
	e.preventDefault();

	let scrollToTop = setInterval(function () {
		if (scrollPos != 0) {
			scrollBy(0, -50);
		} else {
			clearInterval(scrollToTop);
		}
	}, 15);
});

//카운터
const counters = document.querySelectorAll('.procounter');

counters.forEach((counter) => {
	counter.innerHTML = '0';

	const updateCounter = () => {
		// data-target으로 HTML에서 준 숫자를 가져와
		const target = +counter.getAttribute('data-target');
		//문자가 아니라 숫자로 바꿔줘야해서 counter앞에 +써줌

		//타켓의 타입이 뭔지, 타켁이 뭔지 확인
		console.log(typeof target, target);
		const c = +counter.innerText;
		console.log(target);

		// //타켓 숫자들을 100으로 나눠준다.
		const increment = target / 100;
		console.log(increment);

		console.log(counter.innerText);

		if (c < target) {
			counter.innerText = `${Math.ceil(c + increment)}`;
			setTimeout(updateCounter, 30);
		} else {
			counter.innerText = target;
		}
	};
	updateCounter();
});

//스크롤 인터렉션 이벤트

const secPosArr = [];

const mainContSection = document.querySelectorAll('.content section');
console.log(mainContSection);
const boxArticle = mainContSection[0].querySelectorAll('.txt');
const serviceArticle = mainContSection[1].querySelectorAll('.wrap article');
const awardTable = mainContSection[2].querySelectorAll('table');
const contactArticle = mainContSection[4].querySelectorAll(
	'.inner .contwrap article'
);

for (let section of mainContSection) {
	secPosArr.push(section.offsetTop);
}

window.addEventListener('scroll', scrollEvent);
window.addEventListener('resize', scrollEvent);

function scrollEvent() {
	if (scrollPos > secPosArr[0] - 550) {
		for (let i = 0; i < boxArticle.length; i++) {
			boxArticle[i].classList.add('on1');
		}
	} else {
		for (let i = 0; i < boxArticle.length; i++) {
			boxArticle[i].classList.remove('on1');
		}
	}

	if (scrollPos > secPosArr[1] - 650) {
		for (let i = 0; i < serviceArticle.length; i++) {
			serviceArticle[i].classList.add('on2');
		}
	} else {
		for (let i = 0; i < serviceArticle.length; i++) {
			serviceArticle[i].classList.remove('on2');
		}
	}

	if (scrollPos > secPosArr[2] - 350) {
		for (let i = 0; i < awardTable.length; i++) {
			awardTable[i].classList.add('on3');
		}
	} else {
		for (let i = 0; i < awardTable.length; i++) {
			awardTable[i].classList.remove('on3');
		}
	}

	if (scrollPos > secPosArr[4] - 700) {
		for (let i = 0; i < contactArticle.length; i++) {
			contactArticle[i].classList.add('on4');
		}
	} else {
		for (let i = 0; i < contactArticle.length; i++) {
			contactArticle[i].classList.remove('on4');
		}
	}
}
