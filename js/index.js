$(function(){
    // a 태그 성격제거
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });
    //swiper
    const swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 4500,//자동 슬라이드
            disableOnInteraction: false,
          },
        slidesPerView: 1,//화면당 이미지
        spaceBetween: 0,//이미지 사이 
        loop: true,//반복(첫화면으로 자연스럽게 이동)
        pagination: {//하단버튼
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets:true
        },
        navigation: {//좌우 화살표
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    $('#nav-icon4').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('open');
        $('.display').stop().slideToggle();
    });

    $(window).resize(function(){
      $('.display').css('display','none');
      let wt = $(window).width();
      if(wt > 375 && $('.display').is(':hidden')) {
          $('.display').removeAttr('style');
      } 
  });

  // 스르륵올라가는 top 버튼
  $('.top').on('click',function(){
    $('html, body').animate({scrollTop:0},400); //스르륵 올라감
  });

  $(window).scroll(function(){
    let w_scroll = $(window).scrollTop();//브라우저에서 스크롤바가 이동한 거리
    console.log('scrollTop' + w_scroll);

    let obj = $('.box2').offset().top - $(window).height();
    console.log('offset' + obj);

    if(obj < w_scroll) { //배너 보임
        $('.top').css('display','block');
    } else { //배너 숨김
        $('.top').css('display','none'); //.stop(true,true) == .stop(1,1)
    }
  });
  //스크롤시 모션
  AOS.init();

  //스와이퍼 숫자
  setInterval(function(){
    let num = $('.swiper-slide-active').attr('data-swiper-slide-index');
    num = Number(num) + 1;
    $('.conunt1').find('a').text('0'+num);
  },500);
  
  


});