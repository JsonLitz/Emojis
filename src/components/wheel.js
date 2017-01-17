import React from 'react'

const Wheel = React.createClass ({

<div id="wheel">
       <div id="inner-wheel">
           <div class="sec"><span class="wedge" id="wedge_1"></span></div>
           <div class="sec"><span class="wedge" id="wedge_2"></span></div>
           <div class="sec"><span class="wedge" id="wedge_3"></span></div>
           <div class="sec"><span class="wedge" id="wedge_4"></span></div>
           <div class="sec"><span class="wedge" id="wedge_5"></span></div>
           <div class="sec"><span class="wedge" id="wedge_6"></span></div>
           <div class="sec"><span class="wedge" id="wedge_7"></span></div>
           <div class="sec"><span class="wedge" id="wedge_8"></span></div>
       </div>
       <div id="spin">
           <div id="inner-spin"></div>
       </div>
</div>



//set default degree (360*5)
var degree = 1800;
var clicks = 0;


//hide spin history on load
$(function(){
    $("#spin-history").hide();
    });

$("#spins").click( function(event){
		$(this).toggleClass("active");
		$("#setup").removeClass("active");
		$(".all-dropdowns").hide();
		$("#spin-history").show();
		});

$("#setup").click( function(event){
		$(this).toggleClass("active");
		$("#spins").removeClass("active");
		$(".all-dropdowns").show();
		$("#spin-history").hide();
		});

//on land, get the id of that wedge and append it to the history
//make an array and loop through the array
var emojiClass = ["emoji_1", "emoji_2", "emoji_3", "emoji_4", "emoji_5", "emoji_6", "emoji_7", "emoji_8"];
var wedge = ["wedge_1", "wedge_2", "wedge_3", "wedge_4", "wedge_5", "wedge_6", "wedge_7", "wedge_8"];
var dropdown = ["dropdown_1", "dropdown_2", "dropdown_3", "dropdown_4", "dropdown_5", "dropdown_6", "dropdown_7", "dropdown_8"];

for (i=0; i < emojiClass.length; i++) {
  $(emojiClass[i]).click( function(event){
  	  console.log(this.id);
  		document.getElementById(wedge[i]).innerHTML = this.id;
  		document.getElementById(dropdown[i]).innerHTML = this.id + " | " + $(this).attr("data-description");
  });
}


	/*WHEEL SPIN FUNCTION*/
	$('#spin').click(function(){
    $(".wedge").removeClass('animated bounceIn');
		clicks ++;

		var newDegree = degree*clicks;
		var extraDegree = Math.floor(Math.random() * (360)) + 1;
		totalDegree = newDegree+extraDegree;
		console.log(extraDegree);


    var wedge = ["wedge_1", "wedge_2", "wedge_3", "wedge_4", "wedge_5", "wedge_6", "wedge_7", "wedge_8"];
    var wedgeName = ["wedge1CoorA", "wedge1CoorB", "wedge2CoorA", "wedge2CoorB", "wedge3CoorA", "wedge3CoorB", "wedge4CoorA", "wedge4CoorB", "wedge5CoorA", "wedge5CoorB", "wedge6CoorA", "wedge6CoorB", "wedge7CoorA", "wedge7CoorB"];
    var wedgeDegrees = [337.5, 292.5, 292.5, 247.5, 247.5, 202.5, 202.5, 157.5, 157.5, 112.5, 112.5, 67.5, 67.5, 22.5];

    for (i=0; i < wedgeName.length; i++) {
      var plus = i + 1;
      function emojiAppender() {

			    if (extraDegree > wedgeDegrees[i] && extraDegree < wedgeDegrees[plus]) {
            console.log($(wedge[i]).html());
    				setTimeout(function(){
              $("#spin-history").append($(wedge[i]).html() + " ");
              $(wedge[i]).addClass('animated bounceIn');
  				},6000)

          for (i=0; i < wedge.length; i++) {
            setTimeout(function(){
              $(wedge[i]).fadeOut(3000);
            },5000)

            setTimeout(function(){
              $("#wedge[i]").fadeIn(2000);
            },8500)

          });

			}
    }



		emojiAppender();

		$('#wheel .sec').each(function(){
			var t = $(this);
			var noY = 0;

			var c = 0;
			var n = 700;
			var interval = setInterval(function () {
				c++;
				if (c === n) {
					clearInterval(interval);
				}

				var aoY = t.offset().top;
				$("#txt").html(aoY);

				if(aoY < 23.89){
					console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () {
						$('#spin').removeClass('spin');
					}, 100);
				}
			}, 10);

			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'
			});

			noY = t.offset().top;

		});
	});

})

export default Clock
