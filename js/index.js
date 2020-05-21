

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

    TweenMax.to(".intro-wrap", 0.5, {
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
  } else if (viewWidth <= 960 && viewWidth > 414) {
    changeLogo(1150);
  } else if (viewWidth <= 414) {
    changeLogo(660);
  }

  function changeLogo(scrollValue) {
    if (locate > scrollValue) pathColor("#333");
    else pathColor("#EDF2FF");

    //(locate > scrollValue) ? pathColor("#333") : pathColor("#333") why..?

    function pathColor(color) {
      [].forEach.call(document.querySelectorAll("path"), function (v) {
        v.style.fill = color;
        v.style.stroke = color;
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
    info.children[11].innerHTML = data[clickIndex].btnText;
    info.children[10].setAttribute("href", data[clickIndex].gitLink);
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
[].forEach.call(document.querySelectorAll(".close,.visual-detail-contents-wrap"), function (v) {
  v.addEventListener("click", function () {
    modalClose();
  });
});

function modalClose() {
  document.querySelector(".visual-detail-contents-wrap").style.height = "0%";
  document.querySelector(".visual-detail-contents-wrap").style.display = "none";
  document.querySelector(".detail-box").style.width = "0%";
  document.querySelector(".detail-box").style.opacity = "0";
  document.querySelector(".detail-box").style.display = "none";
}

/* if close button context is back */
var demoPage = document.querySelector(".demopage");
demoPage.addEventListener("click", function (e) {
  if (demoPage.innerHTML === "Back") {
    e.preventDefault();
    modalClose();
  }
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
    layout: "반응형 레이아웃 위해 Grid 레이아웃을 사용하였고 이로인해 가독성과 통일성을 살릴 수 있었습니다.",
    tech: "SwiperJS를 사용하여 메인페이지 케러셀을 구성하여 한정된 페이지에 다양한 컨텐츠를 담았습니다.<br /> 회원가입 부분에서의 우편번호 서비스는 Kakao OpenAPI를 사용했고,<br /> Google OAuth2.0 으로 API를 호출해서 로그인을 구현하여 사용자 편의성을 높혔습니다.",
    coreTarget: "쇼핑몰 의류 구매자(잠재고객 포함)",
    brandColor1: "#000",
    brandColor2: "#FFF",
    period: "2019.06 - 2019.11",
    contribution: "Graduation Project<br />디자인, 기획(90%), 퍼블리싱, 개발",
    tool: "HTML5, CSS3, Javascript(jQuery), PHP,<br />MySQL, PhotoShop, SublimeText",
    crossBrowsing: "IE11, Chrome, Firefox, Opera, Whale",
    responsive: "On / min-width : 320px",
    gitLink: "https://github.com/designagune/vivid",
    btnText: "Go Demo Site",
    btnLink: "http://set555.cafe24.com/"
  },
  {
    id: 3,
    title: "배달의민족:",
    layout: "사용자가 모바일 앱의 서비스를 PC에서도 향유할 수 있도록 구성하였습니다.<br />",
    tech: "FullpageJS를 사용하여 섹션단위로 컨텐츠를 집중시킬 수 있도록 하였습니다.",
    coreTarget: "기존 배달앱 사용자, 신규 배달앱 사용자",
    brandColor1: "#2ac1bc",
    brandColor2: "#FFF",
    period: "2019.10 - 2019.11",
    contribution: "Personal Project<br />디자인, 기획, 퍼블리싱",
    tool: "HTML5, CSS3, Javascript(jQuery), SublimeText",
    crossBrowsing: "IE11, Chrome, Firefox, Opera, Whale",
    responsive: "OFF / min-width : 1301px",
    gitLink: "https://github.com/designagune/baemin",
    btnText: "Go Demo Site",
    btnLink: "http://set555.dothome.co.kr/baemin/"
  },
  {
    id: 4,
    title: "국문관광정보:",
    layout: "메인에 케러셀을 배치하였고 9개씩 관광 컨텐츠가 보일 수 있도록 레이아웃 하였습니다.<br />",
    tech: "공공데이터포털의 API를 Ajax로 받아와 구성한 페이지 입니다.",
    coreTarget: "외국인 관광객, 국내 관광객",
    brandColor1: "#000",
    brandColor2: "#FFF",
    period: "2019.10 - 2019.11",
    contribution: "Personal Project<br />퍼블리싱",
    tool: "HTML5, CSS3, Javascript(jQuery), SublimeText",
    crossBrowsing: "IE11, Chrome, Firefox, Opera, Whale",
    responsive: "OFF",
    gitLink: "https://github.com/designagune/Tourism-service",
    btnText: "Go Demo Site",
    btnLink: "http://flexcode.dothome.co.kr/donggun/"
  }
];