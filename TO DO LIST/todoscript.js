const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addtask() {
    if(inputBox.value ==""){
        alert("You must write something")
    }
    else{
        let li=document.createElement('li') //<li> </li>, this tag will be stored in this variable li
        li.innerHTML= inputBox.value //<li> some added value </li>
        listContainer.appendChild(li)  //li element will be added in the ul or listContainer as we named it. li is child and ul is parent

        let span = document.createElement('span') //<span> </span>
        span.innerHTML ="\u00d7"  //<span> x </span>
        li.appendChild(span)

    }
    inputBox.value=" "
    saveData();
}
listContainer.addEventListener('click',(e)=>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked')
        saveData();
    }
    else if(e.target.tagName==="SPAN"){    //capital letter only in tagname
        e.target.parentElement.remove()
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem('data')
}
showTask();
