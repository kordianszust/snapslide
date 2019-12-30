var nunumR
$('.sec').html('Active slide: ' + 1);
$(".snap-container").scroll(function() {
    $('.text').html('ScrollTop: ' + $(".snap-container").scrollTop());
    nunum = (($(".snap-container").scrollTop() / $('.snap-container').height()) + 1);
    nunumR = nunum.toString().split(".");
    $('.sec').html('Active slide: ' + (nunumR[0]));
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        $("li").removeClass('active');
        $("li:nth-child(" + nunumR[0] + ")").addClass('active');
    }, 150));
});
$(window).resize(function() {

    clearTimeout($.data(this, 'resizelTimer'));
    $.data(this, 'resizelTimer', setTimeout(function() {
        $(".snap-container").animate({ scrollTop: 0 }, 500);
    }, 150));
})


$('.count').html('Slides: ' + $(".snap-container section").length);
// $('.sizeofone').html(($('.snap-container').height()) + ' - ' + ($('.snap-container').height() * $(".snap-container section").length));

$(".goto").click(function() {});
console.log(1);