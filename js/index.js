

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
      height: "100%",
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
  var locate = window.pageYOffset;
  var svg = document.querySelector("#title-svg");
  var viewWidth = window.innerWidth;
  console.log(window.pageYOffset);
  if (viewWidth > 1200) {
    changeLogo(840);
  } else if (viewWidth <= 1200 && viewWidth > 960) {
    changeLogo(680);
  } else if (viewWidth <= 960) {
    changeLogo(1150);
  }

  function changeLogo(scrollValue) {
    if (locate > scrollValue) {
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

/*  click detail data */



[].forEach.call(document.querySelectorAll(".project-image"), function (v) {
  v.addEventListener("click", function () {

    /* count .project-image index */
    function getIndex(ele) {
      var _i = 0;
      while ((ele = ele.previousSibling.previousSibling) != null) {
        _i++;
      }
      return _i;
    }

    var clickIndex = getIndex(v.parentNode);
    var explanation = document.querySelector(".detail-contents>.explanation");
    var info = document.querySelector(".detail-contents>.detail-data");
    console.log(explanation.children[1]);

    document.querySelector(".detail-box>h3").innerHTML = data[clickIndex].title;
    explanation.children[1].innerHTML = data[clickIndex].layout;
    explanation.children[3].innerHTML = data[clickIndex].tech;
    explanation.children[5].innerHTML = data[clickIndex].coreTarget;
    document.querySelector(".first-color").style.background = data[clickIndex].brandColor1;
    document.querySelector(".second-color").style.background = data[clickIndex].brandColor2;
    info.children[1].innerHTML = data[clickIndex].period;
    info.children[3].innerHTML = data[clickIndex].contribution;
    info.children[5].innerHTML = data[clickIndex].tool;
    info.children[7].innerHTML = data[clickIndex].crossBrowsing;
    info.children[9].innerHTML = data[clickIndex].responsive;
    info.children[10].setAttribute("href", data[clickIndex].gitLink);
    info.children[11].innerHTML = data[clickIndex].btnText;
    info.children[11].setAttribute("href", data[clickIndex].btnLink);


    TweenMax.to(".visual-detail-contents-wrap", 0.3, {
      display: "block",
      height: "100%",
      ease: Circ.easeInOut,
      onComplete: function () {
        TweenMax.to(".detail-box", 0.5, {
          display: "block",
          width: "87%",
          opacity: 1,
          ease: Circ.easeInOut
        });
      }
    });
  });
});

/* if close click, hide detail data */
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".visual-detail-contents-wrap").style.height = "0%";
  document.querySelector(".visual-detail-contents-wrap").style.display = "none";
  document.querySelector(".detail-box").style.width = "0%";
  document.querySelector(".detail-box").style.opacity = "0";
  document.querySelector(".detail-box").style.display = "none";

});

/* real detail data */
var data = [
  {
    id: 1,
    title: "Portfolio:",
    layout: "다양한 사용자의 디바이스를 고려하여 1920/1200/960/720/360의 고정 반응형으로 레이아웃 하였습니다.<br />1200px의 컨테이너 폭을 적용하였고 여백을 살려 콘텐츠에 집중시키고 심미성과 가독성을 동시에 제공하고 있습니다.",
    tech: "CSS Animaion과 Javascript 라이브러리인 GSAP의 TweenMax를 사용하여 중요 컨텐츠를 강조하였습니다.",
    coreTarget: "저에 대해서 알고싶어하시는 모든 분들",
    brandColor1: "#0c5eb2",
    brandColor2: "#FFF",
    period: "2020.05.10 - 2020.05.18",
    contribution: "Personal Project<br />디자인, 기획, 퍼블리싱",
    tool: "HTML5, CSS3, Javascript,<br /> PhotoShop, VSCode",
    crossBrowsing: "IE11, Chrome, Firefox,<br /> Opera, Whale",
    responsive: "On / min-width : 360px",
    gitLink: "https://github.com/designagune/Portfolio_v2",
    btnText: "Back",
    btnLink: ""
  },
  {
    id: 2,
    title: "Vivid:",
    layout: "다양한 사용자의 디바이스를 고려하여 1920/1200/960/720/360의 고정 반응형으로 레이아웃 하였습니다.1200px의 컨테이너 폭을 적용하였고 여백을 살려 콘텐츠에 집중시키고 심미성과 가독성을 동시에 제공하고 있습니다.",
    tech: "CSS Animaion과 Javascript 라이브러리인 GSAP의 TweenMax를 사용하여 중요 컨텐츠를 강조하였습니다.",
    coreTarget: "저에 대해서 알고싶어하시는 모든 분들",
    brandColor1: "#000",
    brandColor2: "#FFF",
    period: "2020.05.10 - 2020.05.18",
    contribution: "Personal Project<br />디자인, 기획, 퍼블리싱",
    tool: "HTML5, CSS3, Javascript, PhotoShop, VSCode",
    crossBrowsing: "IE11, Chrome, Firefox, Opera, Whale",
    responsive: "On / min-width : 360px",
    gitLink: "https://github.com/designagune/vivid",
    btnText: "Go DemoSite",
    btnLink: "http://set555.cafe24.com/"
  }
];