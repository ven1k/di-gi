$(document).ready(function() {

    $("#owl-example").owlCarousel({

        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    }) ;

        var owlIntro = $("#owl-example_intro");

    owlIntro.owlCarousel({
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
        });


        // Custom Navigation Events
        $(".next").click(function(){
            owlIntro.trigger('owl.next');
        })
        $(".prev").click(function(){
            owlIntro.trigger('owl.prev');
        })

});