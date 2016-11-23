var tryg = {};
		tryg.servers = {},
		tryg.form = {},
		tryg.ui = {};
		tryg.msg = {};


// variables
		tryg.servers.url = "http://smp1.aws.keyteq.no:9844/ioms/customers/tryg/tryg55plus/landingsside",
		tryg.debug = true;

///////////////
// functions //
tryg.log = function(logline){
	if (tryg.debug) {
		console.log(logline);
	}
}

////////////////////
// eventlisteners //

tryg.ui.fullname = document.getElementById('survey-name').addEventListener('blur', function(event){
	// check if form is filled
	if (this.value != "") {
		ga('send', 'event', {
			eventCategory: 'form',
			eventAction: 'name',
			eventLabel: 'tryg55+.no'
		});
		// update tryg message
		tryg.msg.user.name = this.value;
	}
});

tryg.ui.email = document.getElementById('survey-phone').addEventListener('blur', function(event){
	// check if form is filled
	if (this.value != "") {
		ga('send', 'event', {
			eventCategory: 'form',
			eventAction: 'email',
			eventLabel: 'tryg55+.no'
		});
		// update tryg message
		tryg.msg.user.phone = this.value;
	}
});

tryg.ui.email = document.getElementById('survey-email').addEventListener('blur', function(event){
	// check if form is filled
	if (this.value != "") {
		ga('send', 'event', {
			eventCategory: 'form',
			eventAction: 'email',
			eventLabel: 'tryg55+.no'
		});
		// update tryg message
		tryg.msg.user.email = this.value;
	}
});


$('#quiz').bind('submit', function(event) {
	// event.preventDefault;
  // var elements = this.elements;
	// tryg.log(elements);
});

tryg.ui.contactSubmit = document.getElementById('quiz').addEventListener('submit', function(event){
	// send GA event
	event.preventDefault();
	// var elements = document.getElementById('#quiz').elements;
	// tryg.log(elements);
	tryg.xhr();
	console.log('jau');
	ga('send','event','submit','tryg55+.no');
  // Hide form and show thankyou
  $('#survey-form-container').hide();
  $('#survey-form-thankyou').fadeIn(200);
  return false;
});

$('#quiz [name]').click(function(event){
	tryg.msg.quiz[this.name] = this.value;
	console.log(this.value,this.name, this.id);
	console.log(tryg.msg.quiz);

});

tryg.ui.quizSubmit = document.getElementById('callme-submit').addEventListener('click', function(event){
	// send GA event
	event.preventDefault;

	ga('send','event','submit','tryg55+.no');
});
