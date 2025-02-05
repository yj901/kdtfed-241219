/*
const title = document.querySelector("#title");
const author = document.querySelector("#author");

const booklist = document.querySelector("#booklist");
const bookItem = document.createElement("li");
const delbtn = document.createElement("span");
const save = document.querySelector("input[type='submit']");

save.addEventListener("click", (e) => {
  e.preventDefault();
  const titleName = title.value;
  const authorName = author.value;

  bookItem.innerText = `${titleName} - ${authorName}`;

  delbtn.innerText = `삭제`;
  bookItem.appendChild(delbtn);

  booklist.appendChild(bookItem);
});

delbtn.addEventListener("click", (e) => {
  bookItem.remove();
});

*/

//정답
//아!! 폼을... 안햇음. 폼 변수선언하고 이벤트를 submit으로 해야햇는데... 나는 그냥 클릭이벤트만 함..ㅋㅋ
//입력하면 텍스트입력칸에 입력했던 값은 삭제해야하는거 추가 안함
// 삭제 버튼도.. 부정확하다. 내가 선언한건 span을 만든건데 그걸 바로 삭제로 하면 안될듯... span아이템이랑 삭제버튼이랑 따로 해야했음. 아래 정답과 같이!!

const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const booklist = document.querySelector("#booklist");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (title.value === "" || author.value === "") alert("정보를 입력해주세요");
  else {
    const liItem = document.createElement("li");
    liItem.innerHTML = `${title.value} - ${author.value} <span>삭제</span>`;
    //삭제버튼추가를 이렇게 간단한방법으로 할수있었는데...ㅋㅋㅋ

    booklist.appendChild(liItem);

    title.value = "";
    author.value = "";

    const delButtons = document.querySelectorAll("span");
    delButtons.forEach((delButton) => {
      delButton.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
    });
  }
});
