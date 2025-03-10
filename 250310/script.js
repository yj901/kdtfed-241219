const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.fillStyle = "#ccc";
// ctx.fillRect(10, 10, 100, 100);

// ctx.save();
// ctx.translate(150, 150);

// ctx.fillStyle = "#222";
// ctx.fillRect(10, 10, 100, 100);

// ctx.restore();

// ctx.fillStyle = "#f00";
// ctx.fillRect(50, 50, 80, 20);

// rotate(각도 => 호도법)
// ctx.fillStyle = "#ccc";
// ctx.fillRect(150, 150, 100, 100);

// ctx.translate(150, 150);

// ctx.rotate((Math.PI / 180) * 45);
// ctx.strokeRect(0, 0, 100, 100);
// ctx.translate(-150, -150);

//scale()  졸아가지고 제대로 못 봤음.. 이따가 코드 확인하고 수정할 것
ctx.scale(2, 2);
ctx.fillRect(50, 50, 100, 50);

ctx.save();
ctx.strokeStyle = "#ccc";
ctx.strokeRect(20, 70, 100, 50);
ctx.strokeRect(200, 50, 100, 50);

ctx.restore();
