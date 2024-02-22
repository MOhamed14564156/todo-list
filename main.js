const form = document.getElementById("form");
const container = document.getElementById("container");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

// to put data in a paragraph :

form.addEventListener("submit", (eo) => {
  const list = ` 
            <div class="parent">
                <span class="icon-star"></span>
                <p lang="ar" class="task">${input.value}</p>
                    <div class="child">
                        <span class="icon-trash-o"></span>
                        <span class="icon-angry2"></span>
                    </div>
                
            </div>`;
  eo.preventDefault();
  container.innerHTML += list;
  input.value = "";
});

//to remove any task on click in icon

container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash-o") {
    eo.target.parentElement.parentElement.remove();
  
//  saveData()
    
  } else if (eo.target.className == "icon-angry2") {
    eo.target.classList.add("dn");
    const addheart = `<span class="icon-heart"></span> `;
    eo.target.parentElement.parentElement
      .getElementsByClassName("task")[0]
      .classList.add("finsh");
    eo.target.parentElement.innerHTML += addheart;
    
//    saveData()
    
  } else if (eo.target.className == "icon-heart") {
    eo.target.parentElement.parentElement
      .getElementsByClassName("task")[0]
      .classList.remove("finsh");
    eo.target.classList.add("dn");

    const angry = ` <span class="icon-angry2"></span> `;
    eo.target.parentElement.innerHTML += angry;
    
//    saveData()
    
  } else if (eo.target.className == "icon-star") {
    eo.target.classList.add("orange");

 container.prepend(eo.target.parentElement);
    
//    saveData()
    
} else if (eo.target.className == "icon-star orange") {
 eo.target.classList.remove("orange");
    
 //   saveData()
}

});
////////////try to local storage 
/*
function saveData(){
  localStorage.setItem("keyv",input.innerHTML)
}

function showTask(){
container.innerHTML = localStorage.getItem("keyv");
}

showTask()
*/
//



// localStorage.clear()
function saveToLocal(itemKey, itemValue) {
  localStorage.setItem(itemKey, JSON.stringify(itemValue));
}


var myString =` 
            <div class="parent">
                <span class="icon-star"></span>
                <p lang="ar" class="task">${input.value}</p>
                    <div class="child">
                        <span class="icon-trash-o"></span>
                        <span class="icon-angry2"></span>
                    </div>
            </div>`;
  eo.preventDefault();
  container.innerHTML += list;
  input.value = "";
  ;
saveToLocal("myItem", myString);


function showTask(){
container.innerHTML = localStorage.getItem("myItem");
}

showTask()

