$(".snap-container").scroll(function() {
    $('.text').html($(".snap-container").scrollTop());
    nunum = ($(".snap-container").scrollTop() / $('.snap-container').height());
    nunumR = nunum.toString().split(".");
    $('.sec').html('Section: ' + nunumR[0] + ' - ' + nunum);
});

$('.count').html($(".snap-container section").length);
$('.sizeofone').html(($('.snap-container').height()) + ' - ' + ($('.snap-container').height() * $(".snap-container section").length));

$(".goto").click(function() {


});