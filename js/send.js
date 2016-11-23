tryg.xhr = function(){
	tryg.msg.uuid = UUID.generate();
	var payload = JSON.stringify(tryg.msg);
	var urlparams = jQuery.param(tryg.msg);
	var xhr = new XMLHttpRequest();
	xhr.open('post',tryg.servers.url+'?'+urlparams, true);
	xhr.send(payload);
	xhr.onreadystatechange = (function(){
		// check for state 4, and run if 200
		if (xhr.readyState==4 && xhr.status==200) {
			var response = JSON.parse(xhr.responseText);
			tryg.log(response);
			//do more stuff
		} else {
			// tryg.data();
			tryg.log('error');
		}
	});
}
