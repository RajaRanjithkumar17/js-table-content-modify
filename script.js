let name=document.getElementById("demo");
let addbtn=document.getElementById("todo");
let updatebtn=document.getElementById("update");
let idcnt=0,updateid;
addbtn.addEventListener("click" ,function(){
    let txt=name.value;
    let maindiv=document.getElementById("demo1");
    let texttag=document.getElementById("h3");
    let editbtn=document.getElementById("button");
    let dltbtn=document.getElementById("button");
    let listcnt=document.getElementById("div");
    texttag.innerText=txt;

    //set attribute for h3
    texttag.setAttribute("class" ,"texts");

    //set attribute for editbtn
       texttag.setAttribute("class" ,"edit");

    //set attribute for dltbtn
    texttag.setAttribute("class" ,"delete"); 
    dltbtn.innerText="delete";
    editbtn.innerText="edit";
    
    //set attribute fore maindiv

    listcnt.setAttribute("id","list-"+idcnt);

    listcnt.appendChild(texttag); //div id=list- ////h3 class=texts

    listcnt.appendChild(editbtn);  //button class=edit

    listcnt.appendChild(dltbtn);   //button class=delete

    maindiv.appendChild(listcnt);  

    edit-btn .document.getElementsByClassName("edit");/////////////////////
    dlt-btn . document.getElementsByClassName("delete");///////////////

     for (let index = 0; index < edit-btn.length; index++) {
    edit-btn[index].addEventListener("click" , edittext()) //function 1
        
     }

     for (let index = 0; index < dlt-btn.length; index++) {
        dlt-btn[index].addEventListener("click" , deleteele()) //function 1
            
    }
    idcnt++; //div id name changed list-1 ,list-1...
    clearandshow(); //function 3
    
})

function clearandshow(){
    let getprnt= this. parentNode;
    let edittext= getprnt.getElementsByClassName("text")[0];
    name.value=edittext.innerText;
    updatebtn.style.display="none";
    let getid=getprnt.getAttribute("id");
    updateid=getid;
}

 function deleteele(){
    this.parentNode. remove();
 }

 function done (i){
    let getpr=document.getElementById(i);
    let textupdte=getpr.getElementsByClassName("texts")[0];
    textupdte.innerText=name.value;

 }

 updatebtn.addEventListener("click",function(){
    done(updateid);
    clearandshow();
    updatebtn.style.display="none";
 })