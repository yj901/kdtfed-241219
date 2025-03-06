const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// ctx.fillStyle = "rgb(200, 0, 0)"; //속성
// ctx.fillRect(10, 10, 50, 100); //함수. 4개의 인자값. 사각형의 무언가를 만들어 채우겠다.

//각도 개념! = 도씨 사용불가! 호도법!

//1) 사각형 그리기!
//내장함수 및 속성이 지원
// fillRect(x, y, width, height)
// strokeRect(x, y, width, height)
// clearRect(x, y, width, height)

// fillStyle  = "색상"
// strokeStyle = "색상"

// ctx.fillStyle = "rgb(200, 0, 0)";
// ctx.strokeStyle = "rgb(0,0,0)";

// ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 10, 200, 100);

// ctx.fillStyle = "#00f";
// ctx.fillRect(50, 50, 120, 120);
// ctx.clearRect(70, 80, 80, 45);

//------------------------------
//2) 삼각형 그리기
/*
지금부터 그림을 그릴거야 선언이 필요
⇒ `beginPath()`

현재 작업중인 그리기가 끝났다 선언
⇒ `closePath()`

직선 경로를 그릴 때 
⇒ `lineTo(x, y)`

설정한 직선 경로를 그리고 싶을 때
⇒ `stroke()`

설정 및 그린 직선 경로들을 활용해서 어떤 도형이 생성되었을 때, 그 안에 색상을 넣고자 한다면
⇒ `fill()`

현재 그림을 그리고 있는 위치에서 경로를 이동하고자 할 때
⇒ `moveTo(x, y)`
*/

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "rgb(0,200,0)";
// ctx.fill();

// 3) 원 그리기
//arc(x, y, r(반지름), startAngle시작하는각도, endAngle끝나는각도, counterClockWise: 기본true: 반시계 방향 )

// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath();
// ctx.stroke();

// ctx.fillStyle = "#ff0";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, Math.PI, true);
// ctx.arc(280, 100, 50, 0, Math.PI, false);

// ctx.fillStyle = "#f00";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 200, 50, Math.PI * 0.5, Math.PI * 1.5, false);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, Math.PI / 3, false);
// ctx.stroke();

//4) 타원 그리기!
//ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterClockWise)

// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);

// ctx.strokeStyle = "#f00";
// ctx.stroke();

// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, Math.PI / -6, 0, Math.PI * 2);

// ctx.strokeStyle = "#00f";
// ctx.stroke();

//원을 만들고 찌부시켜서 타원으로 만드는 다른 방법!
// ctx.beginPath();
// ctx.save();
// ctx.scale(1, 0.7);
// ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
// ctx.stroke();
// ctx.restore();

// ctx.beginPath();
// ctx.arc(200, 150, 30, 0, Math.PI * 2, true);
// ctx.stroke();

//5) 곡선 그리기
//2차 베지에
//quadraticCurveTo(시작 좌표x, 시작 좌표y, 조절점 좌표, 곡선이 끝나는 좌표)
// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();

// 3차 베지에
//bezierCurveTo(첫번째 x조절점, 첫번째 y조절점, 두번째 x조절점, 두번째 y조절점, 최종 종착점x, 최종종착점y)
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
// ctx.stroke();

//6) 특정 경로값을 저장해놓고 가져와서 사용하고자 할 때
// new Path2D()

const triangle = new Path2D();
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

const circle = new Path2D();
circle.arc(200, 155, 50, 0, Math.PI * 2);

ctx.stroke(triangle);

ctx.fillStyle = "#0f0";
ctx.fill(circle);
