const fruitItems = document.querySelector("#items");

const displayfruit = () => {
  let seletedText = fruitItems.options[fruitItems.selectedIndex].innerText;
  alert(`[${seletedText}]를 선택했습니다`);
};

fruitItems.addEventListener("change", displayfruit);
