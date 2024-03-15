const form = document.getElementById("form");
const container = document.getElementById("container");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
// to put data in a paragraph :

form.addEventListener("submit", (eo) => {
  if (input.value !== "") {
    eo.preventDefault();
    const list = ` 
              <div class="parent">
                  <span class="icon-star"></span>
                  <p lang="ar" class="task">${input.value}</p>
                      <div class="child">
                          <span class="icon-trash-o"></span>
                          <span class="icon-angry2"></span>
                      </div>
              </div>`;
    container.innerHTML += list;
    input.value = "";
    saveData();
  } else {
    alert("قم بكتابة المهام اولا");
  }
});
//to remove any task on click in icon

container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash-o") {
    eo.target.parentElement.parentElement.remove();
    // saveData();
    dellocal();
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your work has been delated",
      showConfirmButton: false,
      timer: 2000,
    });
  } else if (eo.target.className == "icon-angry2") {
    eo.target.classList.add("dn");
    const addheart = `<span class="icon-heart"></span> `;
    eo.target.parentElement.parentElement
      .getElementsByClassName("task")[0]
      .classList.add("finsh");
    eo.target.parentElement.innerHTML += addheart;
    saveData();
  } else if (eo.target.className == "icon-heart") {
    eo.target.parentElement.parentElement
      .getElementsByClassName("task")[0]
      .classList.remove("finsh");
    eo.target.classList.add("dn");
    const angry = ` <span class="icon-angry2"></span> `;
    eo.target.parentElement.innerHTML += angry;
    saveData();
  } else if (eo.target.className == "icon-star") {
    eo.target.classList.add("orange");
    container.prepend(eo.target.parentElement);
    saveData();
  } else if (eo.target.className == "icon-star orange") {
    eo.target.classList.remove("orange");
    saveData();
    // take care 
  }
});

function saveData() {
  localStorage.setItem("pp", container.innerHTML);
}
function showTask() {
  container.innerHTML = localStorage.getItem("pp");
}

showTask();
function dellocal() {
  window.localStorage.removeItem("pp");
}
// ___________________________________________

