const body = document.querySelector("body");
const frame = document.querySelector(".content");
const wrap = document.querySelector(".countwrap");
const pictures = frame.querySelector("#pictures");
const base = "https://www.flickr.com/services/rest/?";
const method_interest = "flickr.interestingness.getList";
const key_pic = "cb146055654724fd0c43e0adccf73ba0";
const per_page = 15;
const url_pic = `${base}method=${method_interest}&api_key=${key_pic}&per_page=${per_page}&format=json&nojsoncallback=1`;
const loading = document.querySelector(".loading");

// const frame = document.querySelector("section");
// const body = document.querySelector("body");
// const base = "https://www.flickr.com/services/rest/?"; //레스트 리퀘스트 포멧
// const method_interest = "flickr.interestingness.getList"; //interestingness
// const key = "cb146055654724fd0c43e0adccf73ba0"; //api키값
// const per_page = 50; //몇개 가지고 올껀지
// const url = `${base}method=${method_interest}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1`;

fetch(url_pic)
  .then((data) => {
    return data.json();
    //데이터 받아오는 식
  })
  .then((json) => {
    //제이슨 받아와서 콘솔로 열어보면 주소 나옴. 거기서 사진을 가져와야하니 포토스.포토 붙여주기
    const items = json.photos.photo;
    //함수 불러오기
    createList(items);
    imgLoaded();

    //아이소적용
    new Isotope(pictures, {
      itemSelector: ".item",
      columnWidth: ".item",
      transitionDuration: "0.8s",
    });
  });

//html만들어서 껴넣어준뒤 함수로 변환
function createList(items) {
  let gel = "";
  console.log(items);
  items.forEach((data) => {
    gel += `
    <article class="item">
        <div>
            <a class="pic" href="https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg">
                <img src="https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg">
            </a>
            <p>${data.title}</p>
            <div class="profile">
                <img src="http://farm${data.farm}.staticflickr.com/${data.server}/buddyicons/${data.owner}.jpg">
                <span>${data.owner}</span>
            </div>
        </div>
    </article>
`;
  });
  pictures.innerHTML = gel;
}

//이미지 로드 함수.

function imgLoaded() {
  const thumbs = document.querySelectorAll(".pic img");
  //pin안의 이미지를 thums 명명
  const len = thumbs.length;
  //thumbs의 길이 len로 명명
  let count = 0;
  //count는 0으로 명명

  //thumb에에러가 뜬다면 대체파일로 변경
  thumbs.forEach((thumb) => {
    thumb.oneerror = () => {
      thumb.setAttribute("src", "img/miniset1");
    };

    thumb.onload = () => {
      //숫자를 증가시킴
      count++;
      //만약 숫자와 thumbs의 길이가 같아진다면
      if (count === len) {
        new Isotope(pictures, {
          itemSelector: ".item",
          columnWidth: ".item",
          transitionDuration: "0.8s",
        });

        frame.classList.add("on");
        loading.classList.add("off");
      }
    };
  });
  const buddies = document.querySelectorAll(".profile img");
  buddies.forEach((buddy) => {
    buddy.oneerror = () => {
      buddy.setAttribute("src", "http://www.flickr.com/images/buddyicon.gif");
    };
  });
}

pictures.addEventListener("click", (e) => {
  e.preventDefault();

  //방금 실행된 이벤트의 부모요소의 href 속성을 가져온다.
  //imgSrc라고 명명해준다.

  let target = e.target.closest(".item").querySelector("pic img");

  if (e.tartget == target) {
    let imgSrc = e.target.parentElement.getAttribute("href");

    //aside 요소 창조해서 pop이라고 불러줌

    let pop = document.createElement("aside");
    pop.classList.add("pop");
    let pops = `
                  <div class="con">
                      <img src="${imgSrc}">
                  </div>
                  <span class="close">close</span>
      `;
    pop.innerHTML = pops;
    body.append(pop);
  }
});
