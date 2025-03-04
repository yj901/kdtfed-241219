const db = "https://reqres.in/api/products";

fetch(db)
  .then((res) => res.json())
  .then((data) => {
    const dbdatas = data.data;

    dbdatas.map((dbdata) => {
      // console.log(dbdata);
      // dbdata;
    });

    dbdatas.forEach((item) => {
      console.log(item);

      const result = document.querySelector("#result");
      result.innerHTML += `
      <h2>${item.name}</h2>
      <h3>${item.year}</h3>
      <hr/>
      `;
    });
  });

// console.log(dbjson);
