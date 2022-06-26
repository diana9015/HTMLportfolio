//api키 AIzaSyDiySTeDBFalwdKlTZEZBipO77rslI_QOU

//https://www.youtube.com/playlist?list=PLSGs9D6sndZf2JAmaS-YSDJj_e9idSilg

const body = document.querySelector('body');
const main = document.querySelector('main');
const key = 'AIzaSyAfcjz6O74NPHtRR-KvH7LyGwudwwoNIN8';
const playListId = 'PLYOPkdUKSFgWPLsAWpqRpK0cCiAGdxi-Y';
const num = 4;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${'AIzaSyAfcjz6O74NPHtRR-KvH7LyGwudwwoNIN8'}&playlistId=${'PLYOPkdUKSFgWPLsAWpqRpK0cCiAGdxi - Y'}&maxResults=${num}`;

fetch(url)
	.then((data) => {
		return data.json();
	})
	.then((json) => {
		let items = json.items;
		console.log(items);

		let result = '';

		items.forEach((item) => {
			// let tit = item.snippet.title;
			// let desc = item.snippet.description;
			// if(tit.length > 50) tit = tit.substr(0,50)+"...";
			// if(desc.length > 150) desc = desc.substr(0,150)+"...";

			// let date = item.snippet.publishedAt.split("T")[0];
			// console.log(date);

			result += `
                <article>
                    <a class="pic" href="#" data-vid="${item.snippet.resourceId.videoId}">
                        <img src="${item.snippet.thumbnails.standard.url}">
                    </a>
                    <div class="con">
                        <h2 data-vid="${item.snippet.resourceId.videoId}">${tit}</h2>
                        <p>${desc}</p>
                        <span>${date}</span>
                    </div>                    
                </article>
        `;
		});

		vidinner.innerHTML = result;
	});
const btnCall = document.querySelector('.btnCall');
const menuMo = document.querySelector('.mobbtn');
btnCall.onclick = function (e) {
	e.preventDefault();
	btnCall.classList.toggle('on');
	menuMo.classList.toggle('on');
};

console.log(menuMo);
