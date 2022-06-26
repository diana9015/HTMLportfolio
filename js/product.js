const slider = document.querySelector('.contmid');
const ul = slider.querySelector('ul');
const prev = slider.querySelector('.prev');
const next = slider.querySelector('.next');
let enableClick = true;

ul.style.left = '-100%';
ul.prepend(ul.lastElementChild);

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
		enableClick = false;
		prevSlide();
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
