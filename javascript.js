let inputBox = document.getElementById("input-box");
let listContiner = document.getElementById("list-continer");
let add = document.getElementById("Add");

add.addEventListener("click", () => {
    if(inputBox.value == ""){
        alert("please fill the box");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContiner.appendChild(li);
        


        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
})


listContiner.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})


const saveData = () => {
    localStorage.setItem("data", listContiner.innerHTML);
}

const showData = () => {
    listContiner.innerHTML = localStorage.getItem("data");
}

showData();

// let todoApp = document.querySelector(".todo-app");
// if(window.innerWidthb <= 425){
// let todoApp = document.querySelector(".todo-app");
// todoApp.style.width = "425px";
// }