if ($(window).width() > 992) {
    $(window).scroll(function(){  
       if ($(this).scrollTop() > 40) {
          $('#navbar').addClass("fixed-top");

          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        }else{
          $('#navbar_top').removeClass("fixed-top");

          $('body').css('padding-top', '0');
        }   
    });
}




$("#carousel .owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});



var i=0;
function read(){
    if(!i){
        document.getElementById("more").style.display='block';
        document.getElementById("dots").style.display='none';
        document.getElementById("read").innerHTML='Read less';
        i=1;
    }
    else{
        document.getElementById("more").style.display='none';
        document.getElementById("dots").style.display='inline';
        document.getElementById("read").innerHTML='Read more';
        i=0;
    }
}

var ok=0;
function show(){
    if(!ok){
        document.getElementById("hide").style.display='block';
        document.getElementById("show").innerHTML='Read less';
        ok=1;
    }
    else{
        document.getElementById("hide").style.display='none';
        document.getElementById("show").innerHTML='Read more';
        ok=0;
    }
}





var setimg1 = 1;

document.getElementById('0').src = document.getElementById(setimg1).src;
document.getElementById(setimg1).className = "thumb selected"

function preview(img){
    document.getElementById(setimg1).className = "thumb normal";
    img.className = "thumb selected";
    document.getElementById(0).src = img.src;
    setimg1 = img.id;
}