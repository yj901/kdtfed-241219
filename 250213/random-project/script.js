window.onload = () => {
  const bgCount = 5;

  let randomNumber = Math.floor(Math.random() * bgCount + 1);
  document.body.style.backgroundImage = `url("./images/bg-${randomNumber}.jpg")`;
};

// let randomNumber = Math.floor(math.random() + bg.Count + 1);
// document.body.style.backgroundImage=`url("./images/bg-${1}")`;
