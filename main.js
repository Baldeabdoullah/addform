//DOOM
//Single element
// const form = document.querySelector("#my-form");

//Multiple element

//console.log(document.querySelectorAll(".item"));

// console.log(document.getElementsByClassName(".item"));

// const items = document.querySelectorAll(".item");

// items.forEach((item) => console.log(item));

// const ul = document.querySelector(".items");

//ul.remove();

//ul.lastElementChild.remove();

// ul.firstElementChild.textContent = "hello";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = "<h4> Hello</h4>";
// const btn = document.querySelector(".btn");
//mouseover

// btn.addEventListener("mouseover", (e) => {
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "yellow";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1> hello<//h1>";
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please Enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);

    // Clear fields

    nameInput.value = "";
    emailInput.value = "";
  }
}
