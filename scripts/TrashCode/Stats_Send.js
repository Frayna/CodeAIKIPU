let farmState = {
	time : 0,
	gpm : 0,
	xpm : 0,
	dpm : 0
};

const startTime = Date.now();
let fraction = 10
let damage = 0
let oldGold = parent.character.gold
let oldXp = parent.character.xp
let oldDamage = damage

setInterval(function(){
		farmState.gpm = (parent.character.gold - oldGold) * fraction
		oldGold = parent.character.gold
		farmState.xpm = (parent.character.xp - oldXp) * fraction
		oldXp = parent.character.xp
		farmState.dpm = (damage - oldDamage) * fraction
		oldDamage = damage
		farmState.time = Date.now()
		xhr.open("POST", 'http://192.168.1.24:4200/characters', true);
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function () { //Appelle une fonction au changement d'état.
		if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			// Requête finie, traitement ici.
			console.log(this.response)
		};
	};

	xhr.send(JSON.stringify({ name: parent.character.name, ...farmState }));
}, 60000 / fraction)
console.log(monsters)
