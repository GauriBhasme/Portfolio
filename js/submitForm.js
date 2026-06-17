const form = document.getElementById("contactForm");

form.addEventListener("submit",async (e)=>{
//extract variables and values
 e.preventDefault(); // Prevent page reload

//   const formData = new FormData(form);

//   const templateParams ={
//     from_name: formData.get("from_name"),
//     reply_to: formData.get("reply_to"),
//     message:formData.get("message")
//   }

  try {
    await emailjs.sendForm(
      "service_engwwwe",
      "template_l14jfgk",
      form
    );

    alert("Message sent successfully!");
    form.reset();

  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  }

});