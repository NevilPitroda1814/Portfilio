var nav = document.getElementById('access_nav');
var closeNav = document.getElementById('close_nav');
var body = document.body;

nav.addEventListener('click',function(e){
    body.className = body.className ? '':'with_nav';
    e.preventDefault();
});


// For Progress Bar....

function move(){
    var i = 0;
    if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    
    var height = 66;
    var id = setInterval(frame, 10);
    function frame() {
      if (height >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        height = 35;
        elem.style.height = height + "%";

      }
      document.getElementById('progressTxt').innerHTML = "2-3";
    }
  }
}

function move2(){
  var j = 0;
  if(j == 0){
    j=1;
    var elem2 = document.getElementById("myBarContact");
    var height = 33;
    var id = setInterval(frame,10);
    function frame(){
      if (height >= 68) {
        clearInterval(id);
        i=0;
      }
      else{
        height++;
        elem2.style.height = height + "%";
      }
      document.getElementById('progressTxt').style.display = "none";
      document.getElementById('progressTxt2').style.display = "block";
    }
  }
}

//jQuery for Change Tab...

$(document).ready(function(){
    $("#main_nav li a").click(function(e){
        e.preventDefault();
    });
    $("#main_nav li").click(function(){
        var tabid = $(this).find("a").attr("href");
        $("#main_nav li,.content").removeClass("active");

        $(".content").hide();
        $(tabid).show();
        $(this).addClass("active");
        $("#main_nav li a").click(function(){
          $('main_nav').hide();
        });
    });
});
