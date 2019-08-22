var selectedRow=null

function onformsubmit(){
     //console.log(formData)
   // insertrecord(formData);
   if(validation()==true)
   {
      var formData=read();
      if(selectedRow==null)
      {
        insertrecord(formData);
        reset(formData);
     }
    else
       updateRecord(formData);
     }
    }
function read(){
var formData={};
formData["firstname"]=document.getElementById("firstname").value;
formData["lastname"] = document.getElementById("lastname").value;
formData["contact"] = document.getElementById("contact").value;
formData["email"] = document.getElementById("email").value;
return formData;

}
function insertrecord(data){
var table=document.getElementById("user").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = data.firstname;
cell2 = newRow.insertCell(1);
cell2.innerHTML = data.lastname;
cell3 = newRow.insertCell(2);
cell3.innerHTML = data.contact;
cell4 = newRow.insertCell(3);
cell4.innerHTML = data.email;
cell4 = newRow.insertCell(4);
cell4.innerHTML = `<a onClick="onEdit(this)"><img src="./edit.png" width="20px" height="15px"></a>
                   <a onClick="onDelete(this)"><img src="./delete.png" width="20px" height="15px"></a>`;
}
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("firstname").value=selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value=selectedRow.cells[1].innerHTML;
    document.getElementById("contact").value=selectedRow.cells[2].innerHTML;
    document.getElementById("email").value=selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
     selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.contact;
    selectedRow.cells[3].innerHTML = formData.email;
    console.log("not");
    reset(formData);
} 

function onDelete(td) {
            row = td.parentElement.parentElement;
        document.getElementById("user").deleteRow(row.rowIndex);
        reset(formData);
    
    }
           function reset(){
        document.getElementById("firstname").value="";
        document.getElementById("lastname").value="";
        document.getElementById("email").value="";
        document.getElementById("contact").value="";
        selectedRow=null;
    }
    function validation(){
      isvalid=true;
        if(document.getElementById("firstname").value=="" ){
            document.getElementById("fnameerror").innerHTML="First name cannot be empty ";
           }
    if(document.getElementById("contact").value==""){
               document.getElementById("cnameerror").innerHTML="contact number cannot be empty";
           }
           
        if(document.getElementById("lastname").value==""){
            document.getElementById("lnameerror").innerHTML="Last name cannot be empty";
        }
        if(document.getElementById("tarea").value==""){
            document.getElementById("tnameerror").innerHTML="This field is required";
        }
        return isvalid;
    }
    
        
        
    