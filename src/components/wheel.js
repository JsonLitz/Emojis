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

$(document).ready(function(){

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


		var wedge7CoorA = 22.5;
		var wedge7CoorB = 67.5;
		var wedge6CoorA = 67.5;
		var wedge6CoorB = 112.5;
		var wedge5CoorA = 112.5;
		var wedge5CoorB = 157.5;
		var wedge4CoorA = 157.5;
		var wedge4CoorB = 202.5;
		var wedge3CoorA = 202.5;
		var wedge3CoorB = 247.5;
		var wedge2CoorA = 247.5;
		var wedge2CoorB = 292.5;
		var wedge1CoorA = 292.5;
		var wedge1CoorB = 337.5;

    // var wedgeName = ["wedge7CoorA", "wedge7CoorB", "wedge6CoorA", "wedge6CoorB", "wedge5CoorA", "wedge5CoorB", "wedge4CoorA", "wedge4CoorB", "wedge3CoorA", "wedge3CoorB", "wedge2CoorA", "wedge2CoorB", "wedge1CoorA", "wedge1CoorB"]
    // var wedgeDegrees [22.5, 67.5, 67.5, 112.5, 112.5, 157.5, 157.5, 202.5, 202.5, 247.5, 247.5, 292.5, 292.5, 337.5];


    function emojiAppender() {
    			if (extraDegree > wedge7CoorA && extraDegree < wedge7CoorB) {
    				console.log($('#wedge_7').html());
    				setTimeout(function(){
    					$("#spin-history").append($('#wedge_7').html() + " ");
              $("#wedge_7").addClass('animated bounceIn');
    				},6000)

        setTimeout(function(){
          $("#wedge_1").fadeOut(3000);
          $("#wedge_2").fadeOut(3000);
          $("#wedge_3").fadeOut(3000);
          $("#wedge_4").fadeOut(3000);
          $("#wedge_5").fadeOut(3000);
          $("#wedge_6").fadeOut(3000);
          $("#wedge_8").fadeOut(3000);
        },5000)

        setTimeout(function(){
          $("#wedge_1").fadeIn(2000);
          $("#wedge_2").fadeIn(2000);
          $("#wedge_3").fadeIn(2000);
          $("#wedge_4").fadeIn(2000);
          $("#wedge_5").fadeIn(2000);
          $("#wedge_6").fadeIn(2000);
          $("#wedge_8").fadeIn(2000);
        },8500)
			}

			else if (extraDegree > wedge6CoorA && extraDegree < wedge6CoorB) {
				console.log($('#wedge_6').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_6').html() + " ");
          $("#wedge_6").addClass('animated bounceIn');
				},6000)

        setTimeout(function(){
          $("#wedge_1").fadeOut(3000);
          $("#wedge_2").fadeOut(3000);
          $("#wedge_3").fadeOut(3000);
          $("#wedge_4").fadeOut(3000);
          $("#wedge_5").fadeOut(3000);
          $("#wedge_7").fadeOut(3000);
          $("#wedge_8").fadeOut(3000);
        },5000)

        setTimeout(function(){
          $("#wedge_1").fadeIn(2000);
          $("#wedge_2").fadeIn(2000);
          $("#wedge_3").fadeIn(2000);
          $("#wedge_4").fadeIn(2000);
          $("#wedge_5").fadeIn(2000);
          $("#wedge_7").fadeIn(2000);
          $("#wedge_8").fadeIn(2000);
        },8500)
			}

			else if (extraDegree > wedge5CoorA && extraDegree < wedge5CoorB) {
				console.log($('#wedge_5').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_5').html() + " ");
          $("#wedge_5").addClass('animated bounceIn');
				},6000)

        setTimeout(function(){
          $("#wedge_1").fadeOut(3000);
          $("#wedge_2").fadeOut(3000);
          $("#wedge_3").fadeOut(3000);
          $("#wedge_4").fadeOut(3000);
          $("#wedge_6").fadeOut(3000);
          $("#wedge_7").fadeOut(3000);
          $("#wedge_8").fadeOut(3000);
        },5000)

        setTimeout(function(){
          $("#wedge_1").fadeIn(2000);
          $("#wedge_2").fadeIn(2000);
          $("#wedge_3").fadeIn(2000);
          $("#wedge_4").fadeIn(2000);
          $("#wedge_6").fadeIn(2000);
          $("#wedge_7").fadeIn(2000);
          $("#wedge_8").fadeIn(2000);
        },8500)
			}

			else if (extraDegree > wedge4CoorA && extraDegree < wedge4CoorB) {
				console.log($('#wedge_4').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_4').html() + " ");
          $("#wedge_4").addClass('animated bounceIn');
				},6000)

        setTimeout(function(){
          $("#wedge_1").fadeOut(3000);
          $("#wedge_2").fadeOut(3000);
          $("#wedge_3").fadeOut(3000);
          $("#wedge_5").fadeOut(3000);
          $("#wedge_6").fadeOut(3000);
          $("#wedge_7").fadeOut(3000);
          $("#wedge_8").fadeOut(3000);
        },5000)

        setTimeout(function(){
          $("#wedge_1").fadeIn(2000);
          $("#wedge_2").fadeIn(2000);
          $("#wedge_3").fadeIn(2000);
          $("#wedge_5").fadeIn(2000);
          $("#wedge_6").fadeIn(2000);
          $("#wedge_7").fadeIn(2000);
          $("#wedge_8").fadeIn(2000);
        },8500)
			}

			else if (extraDegree > wedge3CoorA && extraDegree < wedge3CoorB) {
				console.log($('#wedge_3').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_3').html() + " ");
          $("#wedge_3").addClass('animated bounceIn');
				},6000)

        setTimeout(function(){
          $("#wedge_1").fadeOut(3000);
          $("#wedge_2").fadeOut(3000);
          $("#wedge_4").fadeOut(3000);
          $("#wedge_5").fadeOut(3000);
          $("#wedge_6").fadeOut(3000);
          $("#wedge_7").fadeOut(3000);
          $("#wedge_8").fadeOut(3000);
        },5000)

        setTimeout(function(){
          $("#wedge_1").fadeIn(2000);
          $("#wedge_2").fadeIn(2000);
          $("#wedge_4").fadeIn(2000);
          $("#wedge_5").fadeIn(2000);
          $("#wedge_6").fadeIn(2000);
          $("#wedge_7").fadeIn(2000);
          $("#wedge_8").fadeIn(2000);
        },8500)
			}

			else if (extraDegree > wedge2CoorA && extraDegree < wedge2CoorB) {
				console.log($('#wedge_2').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_2').html() + " ");
          $("#wedge_2").addClass('animated bounceIn');
				},6000)

        setTimeout(function(){
          $("#wedge_1").fadeOut(3000);
          $("#wedge_3").fadeOut(3000);
          $("#wedge_4").fadeOut(3000);
          $("#wedge_5").fadeOut(3000);
          $("#wedge_6").fadeOut(3000);
          $("#wedge_7").fadeOut(3000);
          $("#wedge_8").fadeOut(3000);
        },5000)

        setTimeout(function(){
          $("#wedge_1").fadeIn(2000);
          $("#wedge_3").fadeIn(2000);
          $("#wedge_4").fadeIn(2000);
          $("#wedge_5").fadeIn(2000);
          $("#wedge_6").fadeIn(2000);
          $("#wedge_7").fadeIn(2000);
          $("#wedge_8").fadeIn(2000);
        },8500)
			}

			else if (extraDegree > wedge1CoorA && extraDegree < wedge1CoorB) {
				console.log($('#wedge_1').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_1').html() + " ");
          $("#wedge_1").addClass('animated bounceIn');
				},6000)

        setTimeout(function(){
          $("#wedge_2").fadeOut(3000);
          $("#wedge_3").fadeOut(3000);
          $("#wedge_4").fadeOut(3000);
          $("#wedge_5").fadeOut(3000);
          $("#wedge_6").fadeOut(3000);
          $("#wedge_7").fadeOut(3000);
          $("#wedge_8").fadeOut(3000);
        },5000)

        setTimeout(function(){
          $("#wedge_2").fadeIn(2000);
          $("#wedge_3").fadeIn(2000);
          $("#wedge_4").fadeIn(2000);
          $("#wedge_5").fadeIn(2000);
          $("#wedge_6").fadeIn(2000);
          $("#wedge_7").fadeIn(2000);
          $("#wedge_8").fadeIn(2000);
        },8500)
			}

			else {
				console.log($('#wedge_8').html());
				setTimeout(function(){
					$("#spin-history").append($('#wedge_8').html() + " ");
          $("#wedge_8").addClass('animated bounceIn');
				},6000)

        setTimeout(function(){
          $("#wedge_1").fadeOut(3000);
          $("#wedge_2").fadeOut(3000);
          $("#wedge_3").fadeOut(3000);
          $("#wedge_4").fadeOut(3000);
          $("#wedge_5").fadeOut(3000);
          $("#wedge_6").fadeOut(3000);
          $("#wedge_7").fadeOut(3000);
        },5000)

        setTimeout(function(){
          $("#wedge_1").fadeIn(2000);
          $("#wedge_2").fadeIn(2000);
          $("#wedge_3").fadeIn(2000);
          $("#wedge_4").fadeIn(2000);
          $("#wedge_5").fadeIn(2000);
          $("#wedge_6").fadeIn(2000);
          $("#wedge_7").fadeIn(2000);
        },8500)
			}
			console.log(extraDegree);
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


});

})

export default Clock
