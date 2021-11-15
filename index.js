function money(){
  var name1=document.getElementById("fname").value;
  var name2=document.getElementById("sname").value;
    var name3=document.getElementById("tname").value;
  if (name1&&name2&&name3.length<=2){
  alert("enter the valid data");
  }
  else if(name3>2300000){
     alert("Insuficient Balance ");
   }
else{
  alert(name3 +" " + "has"+" "+ "sucessfully" +" " +"Transfered" +" " +"To" +" "+ name1);
  var x=230000;
  var y=name3;
  var z=230000-name3;
 document.getElementById("accountbal").innerHTML= "your"+"  " +"Current" +"  "+ "Balance" + "  "+" ="+"  "+ z;
  document.getElementById("data").innerHTML= "1. "+name3+"  " +"Has" +"  "+ "Transfered" + "  "+" To"+"  "+name1;
}

}
