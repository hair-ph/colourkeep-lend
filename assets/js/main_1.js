$(document).ready(function () {
    console.log($(".arrow-left"));

    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        prevArrow: $(".arrow-left"),
        nextArrow: $(".arrow-right")
    });

    let topOffset = 70;
    $(document).on('scroll',function(){
      const topBarHeight = $('.top-bar').height()
      const navbarOffet = $('#sticky-main-navbar').offset()
      if ($(document).scrollTop() > topOffset) {
        $('#sticky-main-navbar').addClass('sticky-button')
      }else {
        $('#sticky-main-navbar').removeClass('sticky-button')
      }
    })

    // count Down
    // const second = 1000,
    //       minute = second * 60,
    //       hour = minute * 60,
    //       day = hour * 24;
    // const monthNames = ["January", "February", "March", "April", "May", "June",
    //   "July", "August", "September", "October", "November", "December"
    // ];
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // console.log(monthNames[mm-1]);
    // let countDown = new Date(monthNames[mm-1]+dd+', 2019 24:00:00').getTime(),
    //     x = setInterval(function() {
    //       let now = new Date().getTime(),
    //           distance = countDown - now;
    //           $("#days").html(Math.floor(distance / (day)) + '<span>Days</span>'),
    //           $("#hours").html(Math.floor((distance % (day)) / (hour)) + '<span>Hrs</span>'),
    //           $("#minutes").html(Math.floor((distance % (hour)) / (minute)) + '<span>mins</span>'),
    //           $("#sec").html(Math.floor((distance % (minute)) / second) + '<span>secs</span>');
    //     }, second)
    
    //     let countDown_1 = new Date('Nov 16, 2019 12:00:00').getTime(),
    //         x_1 = setInterval(function() {
    //           let now = new Date().getTime(),
    //               distance = countDown - now;
    //               $("#days-1").html(Math.floor(distance / (day)) + '<span>Days</span>'),
    //               $("#hours-1").html(Math.floor((distance % (day)) / (hour)) + '<span>Hrs</span>'),
    //               $("#minutes-1").html(Math.floor((distance % (hour)) / (minute)) + '<span>mins</span>'),
    //               $("#sec-1").html(Math.floor((distance % (minute)) / second) + '<span>secs</span>');
    //         }, second)

});

function getdate(duration){
  var timer = duration,
    minutes, seconds;
    setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);
  
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
  

    // document.querySelector('#hours-1').textContent ="00";
    // document.querySelector('#minutes-1').textContent =minutes;
    // document.querySelector('#sec-1').textContent =seconds;

    $("#hours-1").html("00" + '<span>Hrs</span>'),
  $("#minutes-1").html(minutes + '<span>mins</span>'),
  $("#sec-1").html(seconds + '<span>secs</span>');

    if (--timer < 0) {
      timer = duration;
    }
    }, 1000);
}
var mins = 60 * 10;
getdate(mins)
