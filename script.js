/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");



/* Racing Game */
//JavaScript Document
$('#Go').click(function() {
    function CheckIfComplete() {
        if (isComplete == false) {
            isComplete == true;
          return 'First';
        } else {
          return 'Second';
        }
    }
    var CarWidth = $('#Car1').width();
    var RaceTrackWidth = $(window).width() - CarWidth;
    var RaceTime1 = Math.floor((Math.random() * 4000) + 3750);
    var RaceTime2 = Math.floor((Math.random() * 4000) + 3750);
  var RaceTime3= Math.floor((Math.random() * 4000) + 3750);
  var RaceTime4= Math.floor((Math.random() * 4000) + 3750);
    var isComplete = false;
    var Place = 'First';

    $('#Car1').animate({
        left: RaceTrackWidth
    }, RaceTime1, function() {
      var Place =  CheckIfComplete();
        $('#RaceInfo1 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime1 + ' ms');
    });

    $('#Car2').animate({
        left: RaceTrackWidth
    }, RaceTime2, function() {
       var Place =  CheckIfComplete();
        $('#RaceInfo2 span').text = ('Finished in ' + Place + ' place & Clocked in at ' + RaceTime2 + ' ms');
    });
  
  $('#Car3').animate({
        left: RaceTrackWidth
    }, RaceTime3, function() {
      var Place =   CheckIfComplete();
       var p = 
    $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime2 + ' ms');
    });
  
  $('#Car4').animate({
        left: RaceTrackWidth
    }, RaceTime4, function() {
      var Place =   CheckIfComplete();
        $('#RaceInfo3 span').text('Finished in ' + Place + ' place & Clocked in at ' + RaceTime2 + ' ms');
    });



    $('#Reset').click(function() {
        $('.Car').css('left', '0');
        $('.RaceInfo span').text("");
    });

});


function MoveAnimals() {
  var elem = document.getElementById("bowie");  
   var coppin = document.getElementById("coppin"); 
  var pos = 0;
  var randombsu = getRandomInt(0, 70);
  var randomcsu = getRandomInt(0, 10);
  var id = setInterval(framebsu, randombsu);
   var csuid = setInterval(framecsu, randomcsu);
  function framebsu() {
    if (pos == 650) {
      clearInterval(id);
    } else {
      pos++; 
      //elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
     // coppin.style.left = pos + 'px'; 
    }
  }
  function framecsu() {
    if (pos == 650) {
      clearInterval(csuid);
    } else {
      pos++; 
      //elem.style.top = pos + 'px'; 
      //elem.style.left = pos + 'px'; 
      coppin.style.left = pos + 'px'; 
    }
  }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}