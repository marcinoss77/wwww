
function get_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
         jokes = JSON.parse(this.responseText);
         $("#joke-body").html(jokes.contents.jokes[0].joke.text);
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

get_joke_of_the_day()

$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
    }, 300);
    });
    });

    $(document).ready(function(){
        
             
        
              $("img").hover(function() {
        
                var temp = $(this).attr("src");
        
                $(this).attr("src", $(this).attr("data-alt-src"));
        
                $(this).attr("data-alt-src", temp);
        
              });
        
            })
$(function(){
    $('.bxslider').bxSlider({
            mode: 'fade',
                captions: true,
                    slideWidth: 600
                  });
              });








              (function() {
                'use strict';
                window.addEventListener('load', function() {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                }
                form.classList.add('was-validated');
                }, false);
                });
                }, false);
                })();

               
	
   