function CreatePerson(pname,pemail,ppass) {
    this.name=pname;
    this.email=pemail;
    this.password=ppass;
}

let count = 0;


function signUp(name,email,password) {

    count++;
  let user = new CreatePerson(document.getElementById(name).value,document.getElementById(email).value,document.getElementById(password).value)
    let for_user=count.toString();
    localStorage.setItem(for_user,user.email);
    localStorage.setItem(user.email,user.name + " " +user.password);
    console.log(user,for_user)

    let toCheck = localStorage.getItem("hasa@hasa");
    console.log(toCheck,count)
}

function signIn(email,Password) {
    
    let semail= document.getElementById(email).value;
    let spassword= document.getElementById(Password).value;
    console.log(semail,spassword,person.length);
   
    
}