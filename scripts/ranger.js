const load = (address) =>{
	$.ajax(address, {
	type: 'Get',
	dataType: "script",
	async: false,
	cache: true
  });
}


var xhr = new XMLHttpRequest();

const refreshMonsters = () => {return Object.values(parent.entities).filter((v) => {if(v.name == enemy)return(true); return false})}
const vecFromCoord = (vec1, vec2) => {return{x:vec2.x-vec1.x,y:vec2.y-vec1.y}}
const vecLen = (vec) => {return Math.abs(Math.sqrt(Math.pow(vec.x,2) + Math.pow(vec.y,2)))}
const sortByDistance = (entitie1, entitie2, entitie3) => {return(
	vecLen(vecFromCoord(entitie1,entitie2))

)}



/*var test = $.ajax('https://cdn.jsdelivr.net/gh/marcopoloq/AdventureLandPublic/testfile.js', {
    type: 'Get',
    dataType: "script",
    async: false,
    cache: true
  });
*/
//console.log(path.toNamespacedPath("./"))
//parent.$("#toprightcorner")[0].style = "display:flex;"
//parent.$("#toprightcorner > .gamebutton").map((k,v) => {
//console.log(v)
//v.style = "display:block; width:5%; height:5%; font-size:10px; border: 1px solid gray; font-family: Verdana, sans-serif;" })
//console.log(parent.$("#toprightcorner")[0])

//parent.$("#toprightcorner").css("width:5%;")

setInterval(() => {
            let party_members = 0
            for (let m in parent.party)
                party_members += 1
            if (party_members == 0)
                send_cm(leader_name, "group")
        }, 10000)

on_party_invite = (name) => {
        accept_party_invite(name)
}

let monsters = refreshMonsters();
if(monsters)
monsters.sort((a,b) => {
	return(vecLen(vecFromCoord(a,{x : parent.character.real_x,y : parent.character.real_y})) -
	vecLen(vecFromCoord(b,{x : parent.character.real_x,y : parent.character.real_y})))
})


/*
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
			//console.log(this.response)
		};
	};

	xhr.send(JSON.stringify({ name: parent.character.name, ...farmState }));
}, 60000 / fraction)
//console.log(monsters)
*/

setInterval(() => {
		monsters = refreshMonsters();
	monsters.sort((a,b) => {
		return(vecLen(vecFromCoord(a,{x : parent.character.real_x,y : parent.character.real_y})) -
		vecLen(vecFromCoord(b,{x : parent.character.real_x,y : parent.character.real_y})))
	})
//	console.log(parent.entities[monsters[monster_i]])
	if(monsters[0]) {
		if(!is_in_range(monsters[0], "attack"))
			move(monsters[0].real_x,monsters[0].real_y);
		else if(is_moving(parent.character))
			move(parent.character.real_x,parent.character.real_y);
		if(!is_on_cooldown("attack") && is_in_range(monsters[0], "attack")){
			attack(monsters[0]).then(
				function(data){
					damage += data.damage
				},
				function(data){
					game_log("oh no, attack failed: "+data.reason);
				},
			);
		}
	}
	loot()
	if (!is_on_cooldown("use_hp") && parent.character.hp < parent.character.max_hp - 200)
		use_skill("use_hp");
	if (!is_on_cooldown("use_mp") && parent.character.mp < parent.character.max_mp - 300)
		use_skill("use_mp");
//	console.log(monsters[monster_i])
}, 200)

/*
on_draw = () => {
	clear_drawings()
		draw_circle(parent.character.real_x, parent.character.real_y, parent.character.range + 20, 1, 0xAAAAFF)
	if(monsters[0])
		draw_circle(parent.character.real_x, parent.character.real_y, 5, 1, 0x00FF00)	
	if(monsters[0]){
		let vec1 = {x:parent.character.real_x,y:parent.character.real_y};
		let vec2 = {x:monsters[0].real_x,y:monsters[0].real_y};
		draw_circle(monsters[0].real_x, monsters[0].real_y, monsters[0].range, 1, 0xFF0000)	
		let vecFC = vecFromCoord(vec1,vec2)
		let vecFCLen = vecLen(vecFC)
		let vecFCNorm = {x : vecFC.x/vecFCLen, y : vecFC.y/vecFCLen}
		vecFC = {x : vecFCNorm.x * (vecFCLen - monsters[0].range), y : vecFCNorm.y * (vecFCLen - monsters[0].range)}
		vec2 = {x : vec1.x + vecFC.x, y : vec1.y + vecFC.y}
		vec1 = {x : vec1.x + vecFCNorm.x * 5, y : vec1.y + vecFCNorm.y * 5}
		draw_line(vec1.x, vec1.y, vec2.x, vec2.y, 1, 0xFF0000)
	}
}
*/

/*
setInterval(function(){
	let pm = 0
	for (let i in parent.character.party)
		pm += 1
	if (pm == 0)
		send_cm("MerchantMen", "group")
}, 1000) */