let cause= document.getElementById("formic");

cause.addEventListener("submit",(e)=>{

    e.preventDefault();

    let data=document.getElementById("Fname").value
     
    let excel=document.getElementById("Lname").value

    let abc=document.getElementById("text").value

    let record=document.getElementById("pin").value


    if(data==""|| data.length<3 || data.length>30){

        alert("The length of first name must neither be empty or less than 3 or greater that 30")

    } 

    if(excel==""|| excel.length<3 || excel.length>30 ){

        alert("The length of last name must neither be empty or less than 3 or greater that 30")

    }

    if(abc=="" || abc.length<3 || abc.length>20){

        alert("Address must be entered ")

    }

   if(formic.checkbox.checked==false && formic.checkbox1.checked==false){
       alert("Gender needs to be checked")
   }

   if(formic.veg.checked==false){
       alert("Need to check atleast two dishes from the choices of food")
   }

//    if(record=="" || record!== Number || record.length>5){
//         alert("PinCode must be only in numbers")
//    }

   if(formic.textarea.value=="" || formic.textarea.value.length<4){
       alert("State must be in required limit")
   }

   if(formic.textarea1.value=="" || formic.textarea1.value.length<4){
    alert("Country must be in required limit")
}

  setTimeout(()=>{

    console.log("form was submitted");///This form is not posted directly to the server,therefore it we are using console in this code.

  },2000)
//   console.log("form was submitted");///This form is not posted directly to the server,therefore it we are using console in this code.

});


