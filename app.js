// function gitHubUsers() {
//   return new Promise((resolve, reject) => {
//     let users = fetch(`"https://api.github.com/users/{user}"`);
//     users.then(function (data) {
//       data.json().then(function (user) {
//         resolve(user);
//       });
//     });
//   });
// }
// gitHubUsers("khudoyor01").then((user) => {
//   console.log(user);
// });
let btn = document.querySelector(".btn");
let outPut = document.querySelector(".output");
btn.addEventListener("click", () => {
  let input = document.querySelector(".input").value;
  let takeSpace = input.split(" ").join("");
  fetch(`https://api.github.com/users/` + takeSpace)
    .then((library) => library.json())
    .then((data) => {
      let a = document.querySelector(".a");
      a.setAttribute("href", "https://www.github.com/" + takeSpace);
      a.innerHTML = "https://www.github.com/" + takeSpace;
      a.innerHTML += ` <img src = "${data.avatar_url}">`;
    });
});

// Search repository

// let reposBtn = document.querySelector(".repos__btn");
// let ul = document.querySelector(".result");
// reposBtn.addEventListener("click", () => {
//   let repos = document.querySelector(".repos").value;
//   let takeRepo = repos.split(" ").join("");
//   fetch(`https://api.github.com/search/repositories?q=/` + takeRepo)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(response);
//       console.log(data);
//       ul.innerHTML += `<li>"https://api.github.com/search/repositories?q=/${data}"</li>`;
//     });
// });
