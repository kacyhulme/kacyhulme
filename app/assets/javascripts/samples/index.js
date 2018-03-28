$( document ).ready(function() {
    $('.image-card img').mouseover(function() {
        $(this).css('transform', 'translate(3px,3px)');
    });
    $('.image-card img').mouseout(function() {
        $(this).css('transform', 'translate(-3px,-3px)');
    });
    $('.image-card').click(function() {
        $('.overlay').css('display','block');
        var getdataelement = $(this).attr("data-img");
        $('.inner-overlay').css('background-image','url("assets/portfolio/ao' + getdataelement+'.png")');
    });
    $('.overlay').click(function() {
        $(this).css('display','none');
    });

    //$( ".image-card" ).filter(function() {} );

    //$(".image-card").find("[data-img='" + current + "']");
});