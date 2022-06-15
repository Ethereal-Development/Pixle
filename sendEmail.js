//NOT WORKING

// function sendEmail(){
//     let feedback = document.getElementById("feedback").value
//     let name = document.getElementById("name").value
//     let email = document.getElementById("email").value
//     if(email == ""){
//         email = `noemail@noemail.com`
//     }
//     if(name !== ""){
//         name = `From ${name} - `
//     } else {
//         name = ""
//     }
//     if(feedback == ""){
//         console.log("nothing to send")
//     } else {
//         Email.send({
//             Host : "smtp.gmail.com",
//             Username : "thisisanextra230@gmail.com", // This is random email I made bc this uses the emails password and i dont want to get hacked
//             Password : "cawniffabwoflipz", //cawniffabwoflipz //648CCFB8B5C069E79B99EC715C94F3D2DB5F
//             To : 'etherealtutoring@gmail.com', // this email can change
//             From : email,
//             Subject : `Pixle: Contact Form`,
//             Body : `${name}FeedBack/Question: ${feedback}`
//         }).then(
//         message => alert("Form was Submitted")
//         );
//     }
// }