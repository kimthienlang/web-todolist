const text_input = document.getElementById("text");
const add_input = document.getElementById("add");
const list_container = document.getElementById("list-container");

function addTask() {
  if (text_input.value === "") {
    alert("You have to write something before add!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = text_input.value;
    list_container.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  text_input.value = "";
  saveData();
}

list_container.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
    saveData();
  },
  false
);

text_input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    add_input.click();
  }
});

function saveData() {
  localStorage.setItem("data", list_container.innerHTML);
}
function getData() {
  list_container.innerHTML = localStorage.getItem("data");
}
getData();
