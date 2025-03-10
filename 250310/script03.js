const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 원을 만든다
// 개발자가 매번 원을 만들때마다 arc함수를 사용해야 할까?
// 만약 개발자가 20개의 원을 만든다면 우리는 arc함수를 20번 사용해야 한다
// 그리고 그때마다 우리는 너비, 높이, 반지름, 색상을 매번 기입해야 함

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.dx = Math.floor(Math.random() * 4) + 1;
  this.dy = Math.floor(Math.random() * 4) + 1;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  };

  this.animate = function () {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx; //끝에 닿는 순간 반대값을 주면서 반대로 움직이게
    }

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.draw();
  };
}

const objs = [];
for (let i = 0; i < 20; i++) {
  const radius = Math.floor(Math.random() * 50) + 10; //10~59랜덤
  const x = Math.random() * (canvas.width - radius * 2) + radius; //반지름고려
  const y = Math.random() * (canvas.height - radius * 2) + radius; //반지름고려
  const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  objs.push(new Circle(x, y, radius, color));
}

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  objs.forEach((obj, index) => {
    objs[index].animate();
  });

  requestAnimationFrame(update);
};

update();
