let data1 = document.getElementById("data-1")
let data2 = document.getElementById("data-2")
let data3 = document.getElementById("data-3")
let saveBtn = document.getElementById("save")
let tab = document.getElementById("tbl")
// let editBtn = document.getElementById("edit")
// let dltBtn = document.getElementById("delete")
let idcount = 0 ,update;
saveBtn.addEventListener("click", function() {
    let text1 = data1.value;
    let text2 = data2.value;
    let text3 = data3.value;
    let textTag = document.createElement("td");
    let textTa = document.createElement("td");
    let textTg = document.createElement("td");
    // let modif1 = document.getElementById("modify1")
    // let modif2 = document.getElementById("modify2")
    // let modif3 = document.getElementById("modify3")
    let listCount = document.createElement("tr");
    let saveButton = document.createElement("button");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    textTag.innerText = text1;
    textTa.innerText = text2;
    textTg.innerText = text3;
    textTag.setAttribute("class","textName")
    textTa.setAttribute("class","textEail")
    textTg.setAttribute("class","textNum")

    //set attribute

    saveButton.setAttribute("class","word");
    editButton.setAttribute("class","edit");
    deleteButton.setAttribute("class","delee");
    listCount.setAttribute("id", "list-" +idcount)
    
    //add text for button
    saveButton.innerText = "edit";
    editButton.innerText = "del";
    // deleteButton.innerText = ".";

   
    tab.appendChild(listCount);
    listCount.appendChild(textTag);
    listCount.appendChild(textTa);
    listCount.appendChild(textTg);
    listCount.appendChild(saveButton);
    listCount.appendChild(editButton);
    listCount.appendChild(deleteButton);
    

    // modif1 .appendChild(listCount)

    // modif2.appendChild(listCount)

    // modif3 .appendChild(listCount)



let saveButt = document.getElementsByClassName("word");

let editButt = document.getElementsByClassName("edit");

let deleteButt = document.getElementsByClassName("delee");

for (let index = 0; index < saveButt.length; index++) {
    saveButt[index].addEventListener("click",save);
       
}
//  for (let index = 0; index < editButt.length; index++) {
//      deleteButt[index].addEventListener("click",edit);
       
//  }
for (let index = 0; index < deleteButt.length; index++) {
    editButt[index].addEventListener("click",delet);
       
}
clear();

});

function clear(){
    data1.value = "";
    data2.value = "";
    data3.value = "";
}

function save(){
    let getPrint = this.parentNode;
    let nameEle = getPrint.getElementsByClassName("textName") [0];
    let mailEle = getPrint.getElementsByClassName("textEail") [0];
    let numEle = getPrint.getElementsByClassName("textNum") [0];
    data1.value = nameEle.innerText;
    data2.value = mailEle.innerText;
    data3.value = numEle.innerText;
    saveBtn.style.display="inline-block"
    let getId = getPrint.getAttribute("id")
    update = getId

}
function delet(){
    this.parentNode.remove();
}

function done(index){
    let txt = document.getElementsByClassName("texts");
    let getPrnt = document.getElementById(index);
    let textUpd = getPrnt.getElementsByClassName("save")[0];
    textUpd.innerText = txt.value;
    textUpd.innerText = data2.value;
    textUpd.innerText = data3.value;

}
saveBtn.addEventListener("click", function(){
    done (update);
    clear();
    saveBtn.style.display = "none";
})
