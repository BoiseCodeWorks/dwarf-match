app.service('GameService', function () {

	var imgRoot = 'assets/img/cards/'

	 function Deck() {
		this.cards = [{
			title: 'Battle Axe',
			url: imgRoot + 'battle-axe.png',
		}, {
				title: 'Beard',
				url: imgRoot + 'beard.png',
			}, {
				title: 'Beer Stein',
				url: imgRoot + 'beer-stein.png',
			}, {
				title: 'BreastPlate',
				url: imgRoot + 'breastplate.png',
			}, {
				title: 'Broadsword',
				url: imgRoot + 'broadsword.png',
			}, {
				title: 'Brutal Helm',
				url: imgRoot + 'brutal-helm.png',
			}, {
				title: 'Crossed Axes',
				url: imgRoot + 'crossed-axes.png',
			}, {
				title: 'Emerald',
				url: imgRoot + 'emerald.png',
			}, {
				title: 'Hammer',
				url: imgRoot + 'flat-hammer.png',
			}, {
				title: 'Gauntlet',
				url: imgRoot + 'mailed-fist.png',
			}, {
				title: 'Meat',
				url: imgRoot + 'meat.png',
			}, {
				title: 'Pick Axe',
				url: imgRoot + 'mining.png',
			}];
	}

	this.getDeck = function () {
		var pairs = shuffle(new Deck().cards).concat(shuffle(new Deck().cards));
		var shuffled = shuffle(shuffle(pairs));

		return shuffled;
	}


	function shuffle(deck) {
		for (var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
		return deck;
	}

})
