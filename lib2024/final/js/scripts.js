window.onload = init;

function init() {
	document.querySelector('.ham').onclick = showHideMobileMenu;

	//HAMBURGER
	function showHideMobileMenu() {
		var mobileNav = document.querySelector('.m-nav');

		if(mobileNav.style.display=="block") {
			mobileNav.style.display="none";
		} else {
			mobileNav.style.display="block";
		}
	}

	// SUBMIT LOADER
	$('#form').submit(function (e) {
   		 e.preventDefault();
   		 var form = this;
   		 $(".overlay-cont").fadeIn(1000, function(){
   		 		showformValues(form);
   		 		$('.overlay-cont').delay(500).fadeOut(500);
   		 })
	});

	//MOCK PROFILE
	function showformValues(form){
		var formValues = $(form).serializeArray(); 
			
		$.each(formValues, function(index, field){

			$("#mockprofile").find("#"+field.name+"_result").text(field.value);

			if(field.name=="email"){
				$("#mockprofile").find("#"+email+"_result").attr("href", "mailto:"+field.value);
			}

		})				
	}
}