// console.log(document.querySelectorAll("p")[0]);

const newP = document.createElement("p"); //요소를 만드는 것.

const textNode = document.createTextNode("Typescript"); //타입스크립트라는 텍스트 노드를 만드는 것.

// newP.innerText = "Typescript";

newP.appendChild(textNode);
document.body.appendChild(newP); // 앞에 있는 부모를 객체로 인식하고 해당 객체의 자식요소를 넣어준다.
