const form = document.querySelector('#member');
const btnSubmit = form.querySelector('input[type=submit]');

btnSubmit.addEventListener('click', (e) => {
	if (!isTxt('newid', 5)) e.preventDefault();
	if (!isName('username', 2)) e.preventDefault();
	if (!isEmail('email', 5)) e.preventDefault();
	if (!isCheck('type')) e.preventDefault();
	if (!isSelect('count')) e.preventDefault();
	if (!isPwd('pwd1', 'pwd2', 5)) e.preventDefault();
});

function isTxt(name, len) {
	const input = form.querySelector(`[name=${name}]`);
	const txt = input.value;

	console.log(txt);

	if (txt.length > len) {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();
		return true;
	} else {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

		const errMsg = document.createElement('p');
		errMsg.append(`텍스트를 ${len}글자 이상 입력하세요`);
		input.closest('td').append(errMsg);

		return false;
	}
}

function isName(name, len) {
	const input = form.querySelector(`[name=${name}]`);
	const txt = input.value;

	if (txt.length > len) {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

		return true;
	} else {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

		const errMsg = document.createElement('p');
		errMsg.append(`텍스트를 ${len}글자 이상 입력하세요`);
		input.closest('td').append(errMsg);

		return false;
	}
}

function isEmail(name, len) {
	const input = form.querySelector(`[name=${name}]`);
	const txt = input.value;

	if (txt.length > len && /@/.test(txt)) {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelectorAll('p').remove();

		return true;
	} else {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelectorAll('p').remove();

		const errMsg = document.createElement('p');
		errMsg.append(`@를 포함한 전체 이메일 주소를 ${len}글자 이상 입력하세요.`);
		input.closest('td').append(errMsg);

		return false;
	}
}

function isCheck(name) {
	const inputs = form.querySelectorAll(`[name=${name}]`);

	const isChecked = false;

	for (let input of inputs) {
		if (input.checked) isChecked = true;
	}

	if (isChecked) {
		return true;
	} else {
		return false;
	}
}

function isSelect(name) {
	const sel = form.querySelector(`[name=${name}]`);
	const sel_index = sel.options.selectedIndex;
	const val = sel.options[sel_index].value;

	if (val !== '') {
		return true;
	} else {
		const errMsg = document.createElement('p');
		errMsg.append('항목을 선택해 주세요');
		sel.closest('dt').append(errMsg);

		return false;
	}
}

function isPwd(name1, name2, len) {
	const pwd1 = form.querySelector(`[name=${name1}]`);
	const pwd2 = form.querySelector(`[name=${name2}]`);
	const pwd1_val = pwd1.value;
	const pwd2_val = pwd2.value;

	const num = /[0-9]/;
	const eng = /[a-zA-Z]/;
	const spc = /[!@#$%^&*[()]]/;

	if (
		pwd1_val === pwd2_val &&
		num.test(pwd1_val) &&
		eng.test(pwd1_val) &&
		spc.test(pwd1_val) &&
		pwd1_val.length > len
	) {
		const errMsgs = pwd1.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) pwd1.closest('td').querySelector('p').remove();

		return true;
	} else {
		const errMsgs = pwd1.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) pwd1.closest('td').querySelector('p').remove();

		const errMsg = document.createElement('p');
		errMsg.append(
			`비밀번호는 ${len}글자 이상, 영문,숫자, 특수문자를 모두 포함하여 동일하게 입력하세요`
		);
		pwd1.closest('td').append(errMsg);
	}
}
