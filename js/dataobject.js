tryg.data = (function(){
	// self invoking anonymous function that sets up the msg object initially
	// can simply reset by doing tryg.data()
	tryg.msg.uuid = null;
	tryg.msg.user = {
		name: null,
		email: null,
		phone: null,
		client: null,
		marketing: null
	};

	tryg.msg.quiz = {
		q1:null,
		q2:null,
		q3:null,
		q4:null
	};
})();
