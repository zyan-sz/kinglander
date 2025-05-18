document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("eepWdmE6m38oeJdj4"); // Replace with your actual public key
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_jtznnjc", "template_nfbrn98", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      this.reset();
    })
    .catch((error) => {
      console.error("❌ Failed to send message:", error);
      alert("❌ Failed to send message. Check console for errors.");
    });
});