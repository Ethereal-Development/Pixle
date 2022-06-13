function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "thisisanextra230@gmail.com", // This is random email I made bc this uses the emails password and i dont want to get hacked
        Password : "cawniffabwoflipz",
        To : 'etherealtutoring@gmail.com', // this email can change
        From : document.getElementById("email").value,
        Subject : `Pixle: Contact Form`,
        Body : ``
    }).then(
    message => alert("Form was Submitted")
    );
}