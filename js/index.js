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
        console.log(document.querySelectorAll("path"));
        [].forEach.call(document.querySelectorAll("path"), function (v) {
          v.setAttribute("data-status", "on");
        });
        document.querySelector("body").style.overflowY = "scroll";
        tnf = false;
      },
      width: "100%"
    });

  }
});



