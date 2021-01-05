
var socket=io.connect('http://'+document.domain+":"+location.port)
//io = socketIo.listen(80);
//io.set('transports', ['xhr-polling']);
var str="";
socket.emit("get_troley");
function sign_uppp(){
  name=document.getElementById("name").value;
  username=document.getElementById("username").value;
  password=document.getElementById("pass").value;
  email=document.getElementById("mail").value;
  contact=document.getElementById("con").value;
  role=document.getElementById("role").value;
  
  
  
  sign_dt={}
  sign_dt['name']=name
  sign_dt['username']=username
  sign_dt['password']=password
  sign_dt['email']=email
  sign_dt['contact']=contact
  sign_dt['role']=role
  socket.emit("for_sign_up",sign_dt);
  $('#modaldemo6').modal('hide');


   }



   socket.on("all_trolley",function(dt){
    
     //var str="";
     str+='<select class="form-control  select2  " data-placeholder="" id="tly" value="" style="margin-top:-20px;"disabled>';
     for(var i=0;i<dt.length;i++){
       
     str+='<option value="'+dt[i]['Trolley']+'">'+dt[i]['Trolley']+'</option>';

     }
     str+='</select>';
    

     document.getElementById("tr_list").innerHTML=str;

   });





  /* function login(){
   //alert("opr")
   var username=document.getElementById("user").value;
   var password=document.getElementById("pwd").value;
   var trly=document.getElementById("tly").value;
   login_dt={}
   login_dt["username"]=username;
   login_dt["password"]=password;
   login_dt["trly"]=trly;
   //console.log(login_dt);
   socket.emit("login_req",login_dt)
   }*/

function login_other(){
 //alert("okkkk");
 r = document.getElementById("roles").value;
 username =document.getElementById("user").value;
 password=document.getElementById("pwd").value;
 trly=document.getElementById("tly").value;

login_dt={}
if(r=="Admin"){
login_dt["username"]=username;
login_dt["password"]=password;
socket.emit("login_request_admin",login_dt)
}
else{

  login_dt["username"]=username;
  login_dt["password"]=password;
  login_dt["trly"]=trly;
  socket.emit("login_req_opr",login_dt)

}
//console.log(login_dt);
//socket.emit("login_request",login_dt)



}


  socket.on("link_responses",function(link){
     //alert(link);
     roles=link.substring(0,3);
     lk=link.substring(4);
     //alert(lk);
     if(roles=='opr'){
     link='http://'+document.domain+":"+'5001/'+lk;
     }
     if(roles=='adm'){
      link='http://'+document.domain+":"+'5000/'+lk;
      }

     //console.log(link);
     if(link=="not allowed"){
               
      //document.getElementById("error").innerHTML='<h1class="tx-danger"> Please logout old device and then try again..</h1>';
       // alert("Please logout old device and then try again..");
        document.getElementById("signup_msg").style.color="red";
        document.getElementById("signup_msg").innerText="Sorry login not allowed. Sign up first then login!!! ."

     }

     if(link=="user limit break"){
               
      //document.getElementById("error").innerHTML='<h1class="tx-danger"> Please logout old device and then try again..</h1>';
       // alert("Please logout old device and then try again..");
       document.getElementById("signup_msg").style.color="red";
       document.getElementById("signup_msg").innerText="Sorry please logout old device then try again..."

     }

     if(link!="not allowed" && link!="user limit break" ){
    // document.getElementById("login_link").href = link;
     location.href = link;
     }
     
   });

  
   //location.reload();

function get_role(){
      document.getElementById("user").disabled=false;
      document.getElementById("pwd").disabled=false;
      //document.getElementById("user").disabled=false;
      var r = document.getElementById("roles").value;
      if(r=="Operator"){
          //document.getElementById("tr_list").innerHTML=str;
          document.getElementById("tly").disabled=false;
          //document.getElementById("login_link").onclick=login;
      }
      if(r=="Admin"){
         // document.getElementById("tr_list").innerHTML="";
          document.getElementById("tly").disabled=true;

          //document.getElementById("login_link").onclick=login_other;
      }
}


function sign_upp(){
  sign_dt={}
  

  name=document.getElementById("name").value;
  username=document.getElementById("username").value;
  password=document.getElementById("pass").value;
  email=document.getElementById("mail").value;
  contact=document.getElementById("con").value;
  role=document.getElementById("role").value;
  if(name!=""){
    sign_dt['name']=name
  }
//name valdation
  if(username!=""){
    sign_dt['username']=username
  }
//username validation
  if(password!=""){
    if(password.length>4){
         sign_dt['password']=password
    }
  }
//password validation
  if(email!=""){
    var mail = email.substr(email.length - 10);

    if(mail=="@gmail.com"){
        sign_dt['email']=email
    }
  }


//email validation

if(contact!=""){
  
   if(contact[0]=="7" || contact[0]=="8" ||contact[0]=="9"){
          if(contact.length=10){
                sign_dt['contact']=contact
            }
    }
}
// contact validation

if(role!=""){
  
  sign_dt['role']=role
           
}

sign_dt_length=Object.keys(sign_dt).length


if(sign_dt_length>5){
  socket.emit("for_sign_up",sign_dt);
  //document.getElementById("signup_msg").innerText="Congratulations!!! Sign up Successfully."
  $('#modaldemo6').modal('hide')
}

if(sign_dt_length<6){
document.getElementById("error_msg").innerText="Something wrong...please try again....."

}


}




socket.on("sign_up_response",function(msg){

if(msg=="Congratulations!!! Sign up Successfully."){
      document.getElementById("signup_msg").innerText=msg;
}

if(msg=="Sorry user allready exist please sign up again..."){
  document.getElementById("signup_msg").style.color="red";
  document.getElementById("signup_msg").innerText=msg;
}


});




//alert("hiiii");
/*  var macAddress = "";
    var ipAddress = "";
    var computerName = "";
    var wmi = GetObject("winmgmts:{impersonationLevel=impersonate}");
    e = new Enumerator(wmi.ExecQuery("SELECT * FROM Win32_NetworkAdapterConfiguration WHERE IPEnabled = True"));
    for(; !e.atEnd(); e.moveNext()) {
        var s = e.item();
        macAddress = s.MACAddress;
        ipAddress = s.IPAddress(0);
        computerName = s.DNSHostName;
    }
alert(macAddress);*/

//var key = CryptoJS.enc.Utf8.parse('1234567890123456'); // TODO change to something with more entropy

/*function encrypt1() {
  //alert("okkkkkk");
  //var myString   = "blablabla Card game bla";
  //var myString   = '{"ok":"hiii"}'
  var x5 = {"hiiii":"ok"};

  var myString =String(x5);
  console.log(myString[0]);
  
  var myPassword = "myPassword";

  var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
  var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
  console.log(encrypted);
  console.log(decrypted.toString(CryptoJS.enc.Utf8));
  socket.emit("chck",encrypted)
}*/

//encrypt()


//encrypt()

//var key = CryptoJS.enc.Utf8.parse('1234567890123456'); // TODO change to something with more entropy

/*function encrypt(msgString, key) {
    // msgString is expected to be Utf8 encoded
    //alert("okkkkk");
    var iv = CryptoJS.lib.WordArray.random(16);
    var encrypted = CryptoJS.AES.encrypt(msgString, key, {
        iv: iv
    });
    return iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);
}*/


//encrypt()





