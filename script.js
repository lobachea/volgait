let result = [];
/*
result=[
    {
        screen: gender,
        value: 4,5
    }
]
*/
let container = document.getElementById('widget');
container.innerHTML = `<section id="start-screen" class='active'>
		<div class="hud"></div>
		<img src="">
		<div class="about">
			<h2>Let’s find your perfect pair!</h2>
			<p>Take the quiz to easily discover your perfect fit from thousands of styles</p>
			
		</div>
		<div class="blue-buttons wbutton" data-nextscreen="gender">Start Now</div>
	</section>
	
	<section id="gender">
		<div class="hud">
			<p>1/10</p>
		</div>
		<p>You are looking for</p>
		<div class="defaultButton wbutton" data-value="4" data-nextscreen="eyewear_type">Men's Styles</div>
		<div class="defaultButton wbutton" data-value="5" data-nextscreen="eyewear_type">Women's Styles</div>
		<a href="" class="defaultLink wbutton" data-nextscreen="eyewear_type">I'd like to see both</a>
	</section>
	
	<section id="eyewear_type">
		<div class="hud">
			<p>2/10</p>
		</div>
		<p>What type of glasses are you looking for?</p>
		<div class="defaultButton wbutton" data-value="210" data-nextscreen="question">Eyeglasses</div>
		<div class="defaultButton wbutton" data-value="211" data-nextscreen="question">Sunglasses</div>
		<a href="" class="defaultLink wbutton" data-nextscreen="question">I'd like to see both</a>
	</section>
	
	<section id="between">
		<div class="hud">
			<p>3/10</p>
		</div>
		<h2>Let's get to know you!</h2>
	</section>
	
	<section id="question">
		<div class="hud">
			<p>3/10</p>
		</div>
		<p>Do you need vision correction?</p>
		<div class="defaultButton wbutton" data-value="210" data-nextscreen="lenstype">Yes</div>
		<div class="defaultButton wbutton" data-value="211" data-nextscreen="frame_size">No</div>
		<a href="" class="defaultLink wbutton" data-nextscreen="frame_size">Skip</a>
	</section>
	
	<section id="lenstype">
		<div class="hud">
			<p>3/10</p>
		</div>
		<p>What do you need your glasses for?</p>
		<div class="defaultButton wbutton" data-value="6" data-nextscreen="frame_size">Near Vision</div>
		<div class="defaultButton wbutton" data-value="6" data-nextscreen="frame_size">Distance Vision</div>
		<div class="defaultButton wbutton" data-value="7" data-nextscreen="frame_size">Multifocal / Progressive</div>
		<a href="" class="defaultLink wbutton" data-nextscreen="frame_size">Skip</a>
	</section>
	
	<section id="frame_size">
		<div class="hud">
			<p>4/10</p>
		</div>
		<p>What’s your current frame size?</p>
		<div class="defaultButton wbutton eyewear" data-value="68" data-nextscreen="">Small</div>
		<div class="defaultButton wbutton eyewear" data-value="67" data-nextscreen="">Medium</div>
		<div class="defaultButton wbutton eyewear" data-value="66" data-nextscreen="">Large</div>
		<a href="" class="defaultLink wbutton" data-nextscreen="face_size">I don't know</a>
	</section>
	
	<section id="between2">
		<div class="hud">
			<p>4/10</p>
		</div>
		<h2>No worries, we’ve got you!</h2>
	</section>
	
	<section id="face_size">
		<div class="hud">
			<p>4/10</p>
		</div>
		<p>How wide would you say your face is?</p>
		<div class="defaultButton wbutton eyewear" data-value="66" data-nextscreen="">Wider Than Avarage</div>
		<div class="defaultButton wbutton eyewear" data-value="67" data-nextscreen="">Avarage		</div>
		<div class="defaultButton wbutton eyewear" data-value="68" data-nextscreen="">Narrow Than Avarage</div>
		<a href="" class="defaultLink wbutton eyewear" data-nextscreen="">Skip</a>
	</section>
	
	<section id="blue_light">
		<div class="hud">
			<p>5/10</p>
		</div>
		<p>Would you like to protect your eyes from light emanating from screens?</p>
		<div class="defaultButton wbutton" data-value="true" data-nextscreen="shade">Yes</div>
		<div class="defaultButton wbutton" data-value="false" data-nextscreen="face_shape">No</div>
	</section>
	
	<section id="shade">
		<div class="hud">
			<p>5/10</p>
		</div>
		<p>When you’re out and about, which shade of lenses do you prefer?</p>
		<div class="defaultButton wbutton" data-value="dark" data-nextscreen="face_shape">Dark Shade</div>
		<div class="defaultButton wbutton" data-value="light" data-nextscreen="face_shape">Light Shade</div>
		<div class="defaultButton wbutton" data-value="transition" data-nextscreen="face_shape">
			<p>Transitioning Shade</p>
		</div>
		<a href="" class="defaultLink wbutton" data-nextscreen="face_shape">Skip</a>
	</section>
	
	<section id="face_shape" class=''>
	<!-- class men or women -->
		<div class="hud">
			<p>6/10</p> 
		</div>
		<p>Every face shape has a perfect fit. What’s yours?</p>
		<div class="defaultButton wbutton" data-value="long" data-nextscreen="facial_features">I have a long face</div>
		<div class="defaultButton wbutton" data-value="round" data-nextscreen="facial_features">I have a round face</div>
		<div class="defaultButton wbutton" data-value="between" data-nextscreen="facial_features">In between</div>
		<a href="" class="defaultLink wbutton" data-nextscreen="facial_features">I don't know</a>
	</section>
	
	<section id="facial_features">
		<div class="hud">
			<p>7/10</p>
		</div>
		<p>How would you define your facial features?</p>
		<div class="defaultButton wbutton" data-value="sharp" data-nextscreen="shape">Sharp</div>
		<div class="defaultButton wbutton" data-value="rounded" data-nextscreen="shape">Rounded</div>
		<div class="defaultButton wbutton" data-value="between" data-nextscreen="shape">In between</div>
		<a href="" class="defaultLink wbutton" data-nextscreen="shape">I don't know</a>
	</section>
	
	<section id="shape">
		<div class="hud">
			<p>8/10</p>
		</div>
		<p>Which frame style are you looking for?</p>
		<p class="second-text">You can pick more than one.</p>
		<div class="defaultButton wbutton" data-value="cat_eye" data-nextscreen="before_brand">Cat Eye</div>
		<div class="defaultButton wbutton" data-value="restangle" data-nextscreen="before_brand">Restangle</div>
		<div class="defaultButton wbutton" data-value="wayframe" data-nextscreen="before_brand">Wayframe</div>
		<div class="gray-buttons wbutton">Continue</div>
	</section>
	
	<section id="before_brand">
		<div class="hud">
			<p>9/10</p>
		</div>
		<p>Are you looking for any particular eyewear brands?</p>
		<div class="defaultButton wbutton" data-nextscreen="brand">Yes</div>
		<div class="defaultButton wbutton" data-nextscreen="final">No</div>
	</section>
	
	<section id="brand">
		<div class="hud">
			<p>10/10</p>
		</div>
		<p>Choose your favorite brands</p>
		<p class="second-text">You can pick more than one.</p>
		<div class="defaultButton wbutton" data-value="ray_ban" data-nextscreen="final">Ray Ban</div>
		<div class="defaultButton wbutton" data-value="prada" data-nextscreen="final">Prada</div>
		<div class="defaultButton wbutton" data-value="michael_kors" data-nextscreen="final">Michael Kors</div>
		<div class="gray-buttons wbutton">Continue</div>
	</section>
	
	<section id="final">
		<div class="hud"></div>
		<h2>We've found some awesome frames for you!</h2>
		<p>Send the results to your email to receive special discounts.</p>
		<div class="blue-buttons wbutton send">Send</div>
	</section>`;

let buttons = document.querySelectorAll('.wbutton');
let screenLinks = document.querySelectorAll('.eyewear');
let sendButton = document.querySelector('.send');
let url=container.dataset.source+'?';
buttons.forEach(element => {
    let parentSection = element.parentNode;

    element.addEventListener('click', (evt) => {
        evt.preventDefault();
        let curValue = element.dataset.value;
        if (curValue == 210) {
            screenLinks.forEach(e => {
                e.dataset.nextscreen = 'blue_light';
            })
        }
        if (curValue == 211) {
            screenLinks.forEach(e => {
                e.dataset.nextscreen = 'shade';
            })
        }
        if (curValue) {
            result.push({ screen: parentSection.id, value: curValue })
        }
        let nextScreen = document.getElementById(element.dataset.nextscreen);
        //console.log(parentSection.id);
        //console.log(nextScreen);
        //console.log(result);
        parentSection.classList.remove('active');
        nextScreen.classList.add('active');

    });
});

sendButton.addEventListener('click', ()=>{
	result.forEach(element => {
		url+=element['screen']+'='+element['value']+'&';
	});
	url=url.slice(0, -1);
	console.log(url);
});