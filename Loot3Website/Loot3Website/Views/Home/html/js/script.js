
// Globale Variablen  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Funtionen          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function generateVisuals() {

    valuess = new Array;
    valuess = [ 3 , 10 , 30 , 57];
    for (i = 0; i < valuess.length; i++) {
        var percent = valuess[i]/2;
        $("#createarea").append("<div class='partial' style='width:"+percent+"%'></div>");
    }

    for (i = 0; i < valuess.length; i++) {
        var percent = valuess[i]/2;
        $("#createarea").append("<div class='partial' style='width:"+percent+"%'></div>");
    }



}
function roll(x,y,itemtype,range) {
    $('.controlbox').css('display','none');
         $('.display').html('');
    $( "#createarea" ).css('left',0);
    $( "#createarea" ).velocity({

                left: "+=690",

              }, 700, "linear", function() {
                $( "#createarea" ).css('left',0);
                    $( "#createarea" ).velocity({

                left: "+=690",



                 }, 800, "linear", function() {
                $( "#createarea" ).css('left',0);
                $( "#createarea" ).velocity({

                left: "+=690",

                 }, 800, "linear", function() {
                $( "#createarea" ).css('left',0);
                $( "#createarea" ).velocity({

                left: "+=690",

                  }, 800, "linear", function() {
                $( "#createarea" ).css('left',0);
                 $( "#createarea" ).velocity({

                left: "+=690",

                  }, 800, "linear", function() {
                $( "#createarea" ).css('left',0);
                $( "#createarea" ).velocity({

                left: "+=690",

                 }, 800, "linear", function() {
                $( "#createarea" ).css('left',0);
                $( "#createarea" ).velocity({

                left: "+=690",

              }, 1200, "linear", function() {
                $( "#createarea" ).css('left',0);
                $( "#createarea" ).velocity({

                left: "+=690",

              }, 2400, "linear", function() {

                $( "#createarea" ).css('left',0);
                $( "#createarea" ).velocity({

                left: "+="+x,

              }, 1000, "easeOutCubic", function() {

                   $('.display').html(y+"   "+ range + "  "+itemtype);
                   $('.controlbox').css('display','block');

            });
            });

            });
            });
            });
            });
            });
            });
            });
}

function CalcPosition() {
    rng = Math.random() * 100;
        common = Math.floor(Math.random() * 387) + 350 ;
        rare = Math.floor(Math.random() * 200) + 55 ;
        epic = Math.floor(Math.random() * 63) + 258 ;
        legendary = Math.floor(Math.random() * 17) + 326 ;
}

function OptClick() {
     Shortrange=new Array();
     Midrange=new Array();
    Longrange=new Array();
    var attr=new Array();
    var typ=new Array();

       $('.opt').click(function(){

          var text = $(this).text();
          $('.dropup').text(text);

          $('.dropup').addClass('chosen');
          $('.dropup').attr("id",text);

        if ( $('.dropdown').css('display')=== 'none'){
        $('.dropdown').css('display','block');} else {$('.dropdown').css('display','none');}
    });

       $('.add').click(function(){
          if ($('.type').val() ) {

              if ($('.dropup').is('#Longrange')) {
                  Longrange.push($('.type').val());

              } else if ($('.dropup').is('#Midrange')) {
                  Midrange.push($('.type').val());
              }else if ($('.dropup').is('#Shortrange')) {
                Shortrange.push($('.type').val());
              }
          }


    });

    $('.autobtn').click(function(){

          if (count === false) {
                  Longrange.push('Glas Sniper');


                  Midrange.push('Ak47');

                Shortrange.push('Eisenschwert');

                 Longrange.push('Holz Sniper');


                  Midrange.push('M4 Gewehr');

                Shortrange.push('Holzschwert');

                 Longrange.push('Penis Sniper');


                  Midrange.push('Steinschleuder');

                Shortrange.push('Glas Schwert');


                 Longrange.push('Lang Bogen');


                  Midrange.push('Wurf Speer');

                Shortrange.push('Gold Schwert');

                    Longrange.push('Armbrust');


                  Midrange.push('Glock 18');

                Shortrange.push('Streitkolben');


                    Longrange.push('Feuerpfeilbogen');


                  Midrange.push('Magnum');

                Shortrange.push('Morgenstern');
                count = true;
            }


    });


}

function RollType() {
    typerng = Math.random() * 100;
    if ((Longrange.length !== 0) && (Midrange.length !== 0) && (Shortrange.length !== 0)) {
        if ( typerng < 33.333333) {
            type = 'Longrange';
            if (Longrange.length !== 0) {
             item = Longrange[Math.floor(Math.random()*Longrange.length)]; }
        } else if (typerng < 66.66666) {
            type = 'Midrange';
            if (Midrange.length !== 0) {
             item = Midrange[Math.floor(Math.random()*Midrange.length)]; }
        } else {
            type = 'Shortrange';
            if (Shortrange.length !== 0) {
           item = Shortrange[Math.floor(Math.random()*Shortrange.length)]; }
           }


        }
     else if ((Longrange.length !== 0) && (Midrange.length !== 0)){
        if ( typerng < 50) {
            type = 'Longrange';
            if (Longrange.length !== 0) {
             item = Longrange[Math.floor(Math.random()*Longrange.length)]; }
        } else  {
            type = 'Midrange';
            if (Midrange.length !== 0) {
             item = Midrange[Math.floor(Math.random()*Midrange.length)]; }
        }

    }   else if ((Midrange.length !== 0) && (Shortrange.length !== 0)){
        if ( typerng < 50) {
            type = 'Shortrange';
            if (Shortrange.length !== 0) {
             item = Shortrange[Math.floor(Math.random()*Shortrange.length)]; }
        } else  {
            type = 'Midrange';
            if (Midrange.length !== 0) {
             item = Midrange[Math.floor(Math.random()*Midrange.length)]; }
        }

    } else if ((Longrange.length !== 0) && (Shortrange.length !== 0)){
        if ( typerng < 50) {
            type = 'Shortrange';
            if (Shortrange.length !== 0) {
             item = Shortrange[Math.floor(Math.random()*Shortrange.length)]; }
        } else  {
            type = 'Longrange';
            if (Longrange.length !== 0) {
             item = Longrange[Math.floor(Math.random()*Longrange.length)]; }
        }

    } else if ((Longrange.length !== 0) ){

            type = 'Longrange';
            if (Longrange.length !== 0) {
             item = Longrange[Math.floor(Math.random()*Longrange.length)]; }


    }  else if ((Shortrange.length !== 0) ){

            type = 'Shortrange';
            if (Shortrange.length !== 0) {
             item = Shortrange[Math.floor(Math.random()*Shortrange.length)]; }


    } else if ((Midrange.length !== 0) ) {

            type = 'Midrange';
            if (Midrange.length !== 0) {
             item = Midrange[Math.floor(Math.random()*Midrange.length)]; }


    } else {
        item = '';
        type = '';
    }


}

function BtnClickinit() {
 $('.btn1').click(function(){
        $('.controlbox').css('display','none');
         $('.display').html('');
        CalcPosition();
        RollType();

        if (rng <= 3) {
            y='legendary!!!!';

            roll(legendary,y,item,type);

        } else if (rng <= 13) {
            y='epic!!';

            roll(epic,y,item,type);

        } else if (rng <= 43) {
            y='rare!';

            roll(rare,y,item,type);

        } else {
            y='common';

            roll(common,y,item,type)
        };
    });

     $('.btn2').click(function(){
        CalcPosition();y='common';RollType();
        roll(common,y,item,type)
    });

     $('.btn3').click(function(){
       CalcPosition();y='rare!';RollType();
        roll(rare,y,item,type);
     });

    $('.btn4').click(function(){
        CalcPosition();y='epic!!';RollType();
        roll(epic,y,item,type);
    });

      $('.btn5').click(function(){
        CalcPosition();y='legendary!!!!';RollType();
        roll(legendary,y,item,type);
    });
}

function CenterThings() {

var sidebarhgt = $('.socialsidebar').height();
var browerheight = $(window).height();
$('.socialsidebar').css('top', (browerheight/2)-(sidebarhgt/2));
//$('.container').height(browerheight);

}

function EqualSize() {
  $('.conobj').css('height', 'auto');
biggest = 0;
$('.content').children('.conobj').each(function(){
  var curentsize = parseInt($(this).css("height"));

  if (curentsize > biggest ) {

    biggest = curentsize;
  }


}).promise().done(function(){

  $('.conobj').css('height', biggest + 'px')
});


}

function Init() {
  //EqualSize();
  if ( $(window).width() >= 794) {

    CenterThings();

 }
}


// Initialisierung    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// Seitenaufruf
$(document).ready(function () {
    $('.dropup').click(function(){
        if ( $('.dropdown').css('display')=== 'none'){
        $('.dropdown').css('display','block');} else {$('.dropdown').css('display','none');}
    });
    count = false;
  OptClick() ;
generateVisuals();
BtnClickinit();
Init();

});
$(window).load(function () {
//EqualSize();
    CenterThings();


});
// Responsive
window.onresize = function () {
  $('.conobj').css('height', 'auto');
//EqualSize();
    CenterThings();

};
