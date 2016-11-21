var tryg = {};
		tryg.servers = {},
		tryg.form = {},
		tryg.ui = {};

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

tryg.xhr = function(){
	var payload = '';
	var xhr = new XMLHttpRequest();
	xhr.open('post|get',URL, true|false);
	xhr.send(payload);
	xhr.onreadystatechange = (function(){
		//DO NOT REMOVE THIS, SUCKER! WAY TOO MYCH TIME SPENT LOOKING FOR AN ERROR!!
		// check for state 4, and run if 200
		if (xhr.readyState==4 && xhr.status==200) {
			var response = JSON.parse(xhr.responseText);
			//do more stuff
		}
	});
}


////////////////////
// eventlisteners //

tryg.ui.fullname = document.getElementById('fullname').addEventListener('blur', function(event){
	// check if form is filled
	if (this.value != "") {
		ga('send', 'event', {
			eventCategory: 'form',
			eventAction: 'name',
			eventLabel: 'tryg55+.no'
		});
	}
});

tryg.ui.email = document.getElementById('email').addEventListener('blur', function(event){
	// check if form is filled
	if (this.value != "") {
		ga('send', 'event', {
			eventCategory: 'form',
			eventAction: 'email',
			eventLabel: 'tryg55+.no'
		});
	}
});

tryg.ui.submitter = document.getElementById('submit').addEventListener('click', function(event){
	// send GA event
	event.preventDefault;
	console.log()
	ga('send','event','submit','tryg55+.no');
});

tryg.log('jau');
