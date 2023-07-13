const inputBox = document.getElementById("or");
const lists = document.getElementById("listss");

function addTask() {
    if (inputBox.value === '') {
        alert(`you must write a plan`)
    } else {
        let li = document.createElement ("li");
        li.innerHTML = inputBox.value;
        lists.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

document.getElementById("listss").addEventListener("click", checkDone);
function checkDone(m){
    if(m.target.tagName === "LI"){
        m.target.classList.toggle("checked");
        saveData()
    } else if(m.target.tagName === "SPAN"){
        m.target.parentElement.remove();
        saveData()
    }
} 

function saveData(){
    localStorage.setItem("data", lists.innerHTML);
}

function showTask(){
    lists.innerHTML = localStorage.getItem("data");
}

showTask();