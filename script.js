// indian timezone

setInterval(() => {
  a = new Date();

  let date = a.toLocaleDateString();

  let time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();

  document.getElementById("time").innerHTML = time + " on " + date;
}, 1000);

// american timezone

setInterval(() => {
  a = new Date();

  let date = a.toLocaleDateString();

  let time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();

  document.getElementById("time").innerHTML = time + " on " + date;
}, 1000);

// australian timezone

setInterval(() => {
  a = new Date();

  let date = a.toLocaleDateString();

  let time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();

  document.getElementById("time").innerHTML = time + " on " + date;
}, 1000);

// dubai timezone

setInterval(() => {
  a = new Date();

  let date = a.toLocaleDateString();

  let time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();

  document.getElementById("time").innerHTML = time + " on " + date;
}, 1000);
