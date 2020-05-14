window.onload = function () {

  /* word slide */
  var word = document.querySelectorAll(".me-wrap span");
  var eq = 1;

  obj();

  setInterval(function () {
    eq < word.length + 1 ? obj() : (eq = 1, obj());
    eq++;
  }, 2000);

  function obj() {
    eq === 1
      ? document.querySelector(".me-wrap span:nth-child(4)").classList.add("me-out")
      : document.querySelector(".me-wrap span:nth-child(" + (eq - 1) + ")").classList.add("me-out");

    [].forEach.call(word, function (v) {
      v.classList.remove("active", "me-in");
    });

    document.querySelector(".me-wrap span:nth-child(" + eq + ")").classList.remove("me-out");
    document.querySelector(".me-wrap span:nth-child(" + eq + ")").classList.add("me-in");
  }
};

/* title anime */
var tnf = true;
window.addEventListener("scroll", function (e) {
  if (tnf === true) {
    scrollTo(0, 0);
    TweenMax.to("introduce", 0, {
      display: "none"
    });
    TweenMax.to(".intro-image", 1, {
      display: "none"
    });

    TweenMax.to(".intro-wrap", 1, {
      opacity: 1,
      height: 980,
      width: 1920,
      ease: Circ.easeInOut,
      onComplete: function () {
        [].forEach.call(document.querySelectorAll("path"), function (v) {
          v.setAttribute("data-status", "on");
        });
        document.querySelector("body").style.overflowY = "scroll";
        tnf = false;
      },
      width: "100%"
    });
  }

  /* scroll parallax */
  console.log(document.querySelector("html").scrollTop);
  var locate = window.pageYOffset;
  var svg = document.querySelector("#title-svg");
  // console.log(locate);
  // console.log(document.querySelector("#title-svg").style);
  if (locate > 840) {
    [].forEach.call(document.querySelectorAll("path"), function (v) {
      v.style.fill = "#333";
      v.style.stroke = "#333";
    });
  }
  else {
    [].forEach.call(document.querySelectorAll("path"), function (v) {
      v.style.fill = "#EDF2FF";
      v.style.stroke = "#EDF2FF";
    });
  }

  if (locate > 0 && locate < 980) {
    var calcValueTop = 50 - locate / 8;
    var calcValueRight = 50 - locate / 8.5;

    if (calcValueTop < 9.5) calcValueTop = 9.5;
    svg.style.top = calcValueTop + "%";
    if (calcValueRight < 12) calcValueRight = 12;
    svg.style.right = calcValueRight + "%";

    document.querySelector("#title-svg").style.width = 80 - locate / 5 + "%";
  }
});

