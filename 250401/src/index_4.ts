const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise.then((resonse) => {
  console.log(resonse);
});

//error타입은 기본으로 any타입으로 잡히는데 string으로 구체적으로 잡으면 좋음
promise.catch((error) => {
  if (typeof error === "string") {
    console.error(error);
  }
});
