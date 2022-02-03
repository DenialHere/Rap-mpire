
var user = document.getElementById('user');
var pass = document.getElementById('pass');
var login = document.getElementById('login');


login.addEventListener('click', log);






function log() {
     if (user.value == 'admin' && pass.value == '1234')
     {
         
         window.location = "./index2.html";


         
     }
     else{
        alert('invaild username or password');

     }

     }



