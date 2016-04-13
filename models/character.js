(function () {
	var mongoose = require('mongoose');
	
	module.exports =  {
        create: function (Name, Type) {
			var schema = new mongoose.Schema({
				name: String,
				type: String,
				owner_user: mongoose.Schema.ObjectId,
				actual_fiche: mongoose.Schema.ObjectId
			});
				
			var character = mongoose.model('character', schema);
			var tmp = new character({
			name : Name,
			type : Type
			console.log("Vampire creer")
			return tmp;
		});
			
        },
		save: function (tmp) {
			tmp.save(function (err) {
				if (err) return console.error(err);
					console.log("%s est save in base", tmp.name)
			});
        }
	};	
})();