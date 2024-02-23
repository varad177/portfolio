

window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  let clientHeight =
    document.documentElement.clientHeight || document.body.clientHeight;
  let scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
});

// Scroll to top functionality
document
  .getElementById("back-to-top-button")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

const typed = new Typed(".multipletext", {
  strings: ["MERN Stack Developer", "Coder", "Web Designer"],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 800,
  loop: true,
});



function sendEmail() {
  var email = document.getElementById("inputEmail4").value;
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email2 = email.toLowerCase();
  var b = document.getElementById("msg").value;
  var body =
    "name : " +
    fname +
    "-" +
    lname +
    "<br/><br/> email : " +
    email2 +
    "<br/><br/> message :" +
    b;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "fakeacc6862@gmail.com",
    Password: "47E85993DC7394854F4E87B9F47289D636F1",
    // To: 'fakeacc6862@gmail.com',
    To: "varaddhumale177@gmail.com",
    From: "fakeacc6862@gmail.com",
    Subject: "New message from portfolio",
    Body: body,
  }).then(
    // message => alert(message)
    (message) => alert("Thanks For FeedBack/Message ||😊 SubMit Successfully")
  );
}

//   the greeting function
let date = new Date();
var hrs = date.getHours();

var msg;
if (hrs < 12) {
  msg = "Good Morning";
} else if (hrs >= 12 && hrs <= 17) {
  msg = "Good Afternoon";
} else if (hrs >= 17 && hrs <= 24) {
  msg = "Good Evening";
}

document.getElementById("greet").innerHTML = msg;

const backToTopContainer = document.getElementById("back-to-top-container");

// navbar  hide

const nav = document.getElementById("navbarSupportedContent");
const hanbtn = document.getElementById("hamBTN");

function hideNav() {
  nav.classList.remove("show");
}
