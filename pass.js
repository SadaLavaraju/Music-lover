// const pass = document.getElementById('pass')


function message(){
    location.href="msg.html";
   }
  
   function Message() {
     if(pass.value == ""){
     alert("please enter the password..!");
    }else{
      if(pass.value =="SVA153"){
        location.replace("img.html");
      }else{
        if(pass.value=="jdl "){
        location.pathname="mess.html";
        }else{
         alert("worng password..!")
        }         
      }
    }
  }
