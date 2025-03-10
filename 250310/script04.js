const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 외부에서 값을 받아온다고 가정 (랜덤 20개 원 애니메이션)
const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 4,
  dy: 4,
  color: "#222",
};

const drawCircle = () => {
  ctx.beginPath();
  ctx.fillStyle = circle.color;
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.fill();
};

const move = () => {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawCircle();

  circle.x += circle.dx;
  circle.y += circle.dy;

  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx = -circle.dx; //끝에 닿는 순간 반대값을 주면서 반대로 움직이게
  }

  if (
    circle.y + circle.radius > canvas.height ||
    circle.y - circle.radius < 0
  ) {
    circle.dy = -circle.dy;
  }

  // 재귀함수 recursion   (다시 재, 귀향 귀 / 다시 실행한다)
  requestAnimationFrame(move);
};

move();
