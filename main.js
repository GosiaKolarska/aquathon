$( document ).ready(function() {
    $( ".list-item-city-wrapper" ).click(function() {
        $(this).toggleClass('active');
      });

      $( ".choose-plan .plan").click(function() {
        $( ".choose-plan .plan").removeClass('active')
        $(this).addClass('active');
      });


    $(".delivery-table").hide();
    $(".delivery2").click(function() {
        if($('.delivery2 input').is(":checked")) {
            $(".delivery-table2").show(200);
        } else {
            $(".delivery-table2").hide(200);
        }
    });
    $(".delivery1").click(function() {
        if($('.delivery1 input').is(":checked")) {
            $(".delivery-table1").show(200);
        } else {
            $(".delivery-table1").hide(200);
        }
    });

    $(".plan").click(function() {
        if($('.plan2').hasClass('active')) {
            $(".plan-table2").show(0);
            $(".plan-table1").hide();
        } else if($('.plan1').hasClass('active')) {
            $(".plan-table1").show();
            $(".plan-table2").hide();
        }
    });


    $('input:checkbox').change(function(){
        if($('#animal').is(":checked")) {
            $('.multi-cont.zwierz').addClass('active');
        } else {
            $('.multi-cont.zwierz').removeClass('active');
        }

        if($('#public').is(":checked")) {
            $('.multi-cont.publicc').addClass('active');
        } else {
            $('.multi-cont.publicc').removeClass('active');
        }
    });

    // $('.link-more').click(function(e) {
    //     e.preventDefault();
    //     if ($('.link-more').hasClass('active')) {
    //         $(this).removeClass('active');
    //         $(this).text("Pokaż wyliczenia");
    //     } else {
    //         $(this).text("Ukryj wyliczenia");
    //         $(this).addClass('active');
    //     }
    // });

    // $('.link-more.detail').click(function(e) {
    //     e.preventDefault();
    //     if ($('.link-more.detail').hasClass('active')) {
    //         $(this).removeClass('active');
    //         $(this).text("Pokaż detale");
    //     } else {
    //         $(this).text("Ukryj detale");
    //         $(this).addClass('active');
    //     }
    // });


})