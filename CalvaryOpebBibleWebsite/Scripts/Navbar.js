
var mn = $(".main-nav"); //alert("mn=" + mn);
var mns = "main-nav-scrolled"; //alert("mns=" + mns);
var hdr = $('header').height(); //alert("hdr=" + hdr);


$(window).scroll(function () {
    //alert("inside function");
    if ($(this).scrollTop() > 390) {
        //alert("inside if");
        $(".main-nav").addClass("main-nav-scrolled");
    } else {
        //alert("inside else");
        $(".main-nav").removeClass("main-nav-scrolled");
    }
});


