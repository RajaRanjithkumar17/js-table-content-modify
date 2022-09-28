
let input1=document.getElementById("data-1");
let input2=document.getElementById("data-2");
let input3=document.getElementById("data-3");


let tabelEle=document.getElementById("tbl");

let saveEle=document.getElementById("save");

var submitBtn=document.getElementById("sub");

//hide sub butten bef entr value

function hidesub(){
    submitBtn.style.display = "none"
}
hidesub()
function hidesave(){
    saveEle.style.display = "none"
}
function showsave(){
    saveEle.style.display = "block"
}



let idcnt=0;
let updateId;

saveEle.addEventListener('click',function(){
  
    let td1,td2,td3;

    td1=input1.value;
    td2=input2.value;
    td3=input3.value;
   

    //append td to tr
    
    var tRow = document.createElement("tr");
    
    var namethEle=document.createElement("td");
    tRow.appendChild(namethEle);

    var mailEle=document.createElement("td");
    tRow.appendChild(mailEle);

    var numberEle=document.createElement("td");
    tRow.appendChild(numberEle);

    
    var delBtn=document.createElement("button");
	
	var editBtn=document.createElement("button");
	
	delBtn.innerText="Delete";  //set btn text
	editBtn.innerText="Edit";
	
	namethEle.setAttribute("class","nameEdit"); ///put class for call whn need
	mailEle.setAttribute("class","mailEdit");
	numberEle.setAttribute("class","numberEdit");
	
    
    delBtn.setAttribute("class","delete");
	editBtn.setAttribute("class","edit");
	tRow.setAttribute("id","list_"+idcnt);
	
    tRow.appendChild(delBtn);
	tRow.appendChild(editBtn);

    tabelEle.appendChild(tRow);
    
    namethEle.innerText=td1; //
    
    mailEle.innerText=td2;

    numberEle.innerText=td3;
    
    
	
	let edit_Btn=document.getElementsByClassName("edit");
	let del_Btn=document.getElementsByClassName("delete");
	
	for(var i = 0; i < edit_Btn.length ; i++){
		edit_Btn[i].addEventListener("click",edittext); //fun1
	}
	for(var i = 0 ; i < del_Btn.length ; i++){
		del_Btn[i].addEventListener("click",delcontent); //fun2
	}
	idcnt++;

    clearAndShow(); //for clear value and show



	
})

function clearAndShow(){
    input1.value="";
    input2.value=""; //reset tbl value after save
    input3.value="";
    

}
function edittext(){
	let getprnt=this.parentNode;
	let nameEdit=getprnt.getElementsByClassName("nameEdit")[0];
	let mailEdit=getprnt.getElementsByClassName("mailEdit")[0];
	let numberEdit=getprnt.getElementsByClassName("numberEdit")[0];
	
	
	input1.value = nameEdit.innerText;
	input2.value = mailEdit.innerText;
	input3.value = numberEdit.innerText;
	
	
	submitBtn.style.display="inline-block";
	
	let getid=getprnt.getAttribute("id");
	
	updateId=getid;
	


	hidesave()
}
function delcontent(){
	this.parentNode.remove();
	
}
function done(i){

	//tr ld get
	//update edited value
	let upId=document.getElementById(i);
	console.log(upId);
	let nameupdate=upId.getElementsByClassName("nameEdit")[0];
	let mailupdate=upId.getElementsByClassName("mailEdit")[0];
	let numberupdate=upId.getElementsByClassName("numberEdit")[0];
	
	
	nameupdate.innerText=input1.value;
	mailupdate.innerText=input2.value;
	numberupdate.innerText=input3.value;
	showsave()
	
	
}

submitBtn.addEventListener("click",function(){
	done(updateId);
	clearAndShow();
	submitBtn.style.display="none";
})