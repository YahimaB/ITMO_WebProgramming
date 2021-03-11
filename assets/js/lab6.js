var contactModal = document.getElementById("Contacts");
var contactBtn = document.getElementById("contactBtn");
var closeBtn = document.getElementsByClassName("closeBtn")[0];

contactBtn.onclick = function() {
    contactModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
}

//------------//
var profileImage = document.getElementById('toggleImage');
var images = ["assets/images/profile.jpg", "assets/images/appfox.png"];
var lastIndex = 0;

profileImage.onclick = function() {
    lastIndex = (lastIndex + 1) % images.length;
    profileImage.src = images[lastIndex];
}