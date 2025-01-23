
if (document.querySelector('#bber-talk')) {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical', 
    loop: true,
    autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true
  },
  });
}

// 负责控制按钮按下去后让背景图消失
var hideRightCard = function (){
  /* var rightCard = document.getElementById("rightCard-cover");
  rightCard.style.background = "url('')"; */
  var topGroup = document.getElementById("topGroup");
  var rightCard = document.getElementById("rightCard");
  topGroup.removeChild(rightCard);
}

// 离开主区域后背景出现
var leaveCard = function (){
  var isDoIt = document.body.clientWidth;
  var rightCard = document.getElementById("rightCard");
  if(isDoIt >= 1300&&rightCard == null){
  var topGroup = document.getElementById("topGroup");
  topGroup.innerHTML += '<div class="rightCard" id="rightCard" style="z-index: 1;"><div class="rightCard-cover" id="rightCard-cover" onclick="pjax.loadUrl(/about/)" onerror="this.onerror=null,this.src='+'"/img/404.png"'+'"></div>'+
  '<div class="banner-button-group" onclick="hideRightCard()" data-pjax-state=""><a class="banner-button" data-pjax-state=""><i class="fas fa-circle-plus"> </i><span class="banner-button-text" style="color:#bfc2c3">更多推荐</span></a></div></div>';
  }
}

