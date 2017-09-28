//$(document).ready(function(){
//    $('#myTabs a').click(function (e) {
//        e.preventDefault();
//        $(this).tab('show');
//        
//    })
//})

$(document).ready(function(){
    $('.carousel').carousel();
        
});


$(window).scroll(function(){
    var s = $(window).scrollTop();
    var h = $("#header").height();
    
    if(s>=h+60){
        $("header").addClass("change");
        $(".logo small").addClass("change");
//        $(".custom-col-sm-2").addClass("change");
        $(".logo h1").addClass("change");
        $("#search span").addClass("change");
        $("#search").addClass("change");
        $("#search i").addClass("change");
        

        
    }
    else {
        $("#header").removeClass("change");
        $(".logo small").removeClass("change");
//        $(".custom-col-sm-2").removeClass("change");
        $(".logo h1").removeClass("change");
        $("#search span").removeClass("change");
        $("#search").removeClass("change");
        $("#search i").removeClass("change");
        
    }
});



//$(document).ready(function(){
//    $(document).mousemove(function(event){
//      var x = event.pageX;
//      var y = event.pageY;
//      $('.batwrap').css({'top' : y, 'left' : x});
//        
//    });
//});
//var rotation = 0;
//
//jQuery.fn.rotate = function(degrees) {
//    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
//    
//};
//
//$('.batwrap').mousemove(function() {
//    rotation = 20;
//    $(this).rotate(rotation);
////    $(this).css({'transition' : '1s'});
//});
//


