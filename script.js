/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   DISTRIBUTOR FORM
========================= */

const distributorForm =
    document.getElementById("distributorForm");

const formMessage =
    document.getElementById("formMessage");


distributorForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const whatsapp =
        document.getElementById("whatsapp").value.trim();

    const business =
        document.getElementById("business").value.trim();

    const city =
        document.getElementById("city").value.trim();

    const state =
        document.getElementById("state").value.trim();

    const businessType =
        document.getElementById("businessType").value;

    const quantity =
        document.getElementById("quantity").value;

    const message =
        document.getElementById("message").value.trim();


    /*
       IMPORTANT:
       এখানে আপনার নিজের WhatsApp number দিন।

       Example:
       919876543210

       + বা space দেবেন না।
    */

    const ownerWhatsApp = "919999999999";


    const whatsappMessage =

`Hello, I am interested in becoming a distributor.

Name: ${name}

Mobile: ${phone}

WhatsApp: ${whatsapp || "Not provided"}

Business / Shop: ${business}

City: ${city}

State: ${state}

Business Type: ${businessType || "Not specified"}

Expected Monthly Quantity: ${quantity || "Not specified"}

Message:
${message || "No additional message"}`;


    const whatsappURL =
        `https://wa.me/${ownerWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;


    formMessage.innerHTML =
        "Opening WhatsApp...";

    formMessage.style.color =
        "#0b5cff";


    /*
       Open WhatsApp with all submitted details.
    */

    window.open(whatsappURL, "_blank");


    /*
       Reset form
    */

    distributorForm.reset();

});
