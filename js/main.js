const form = document.getElementById('form');
var body = document.getElementById('body');
var link =document.querySelectorAll('a');

/**Dark and light Mode */

 function changBgDark(){
     body.style.background ="#000";
     body.style.color="#FFF";
     for (i = 0; i < link.length; i++) {
         link[i].style.color = "#fff";
         }
         form.style.background="#fff";


 }
 function changBgWhite(){
     body.style.background ="#FFF";
     body.style.color ="#000";
     form.style.background="#000";
 } 


 /*******From Valdiation******** */

form.addEventListener('submit', e => {
	e.preventDefault();
	
	validate();
});
function validate()

{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message= document.getElementById('message').value;


// name validation

if(name == "")
            {
            alert("enter the name");
            return false;
            }
            
if(!isNaN(name))
            {
            alert("name should be in character");
            return false;
            }


// email validation

var at = email.indexOf("@");
var dot = email.lastIndexOf(".");

if(at<1||dot<at+2||dot+2 >= email.lenght)
            {
            alert("Not a valid email");
            return false;
            }
//message validation
if(subject=="")
    {
        alert("enter Subject.");
        return false;
    }

if(subject.length >10)
    {
    alert(" Subject must be less 10 charecter.");
    return false;
    }


//message validation
if(message=="")
    {
        alert("enter message.");
        return false;
    }

if(message.length <20)
    {
    alert(" message must be greater than 20 charecter.");
    return false;
    }

 alert ("success");

}
var img = document.querySelector("#img");
function showimg(){
    
     img.style="opacity: 0.5;";
    

}
