on_cm = (name, data) => {
	if (figthers.find(elem => elem == name).length) {
		switch (data.type_message) {
			case "group":
				console.log("POUET")
    			send_party_invite(name);
			break;
			case "call":
				console.log("PROUT");
				smart_move({x:data.pos.x, y:data.pos.y})
			break;
			case "pos":
				send_cm(name, {x : character.real_x, y : character.real_y})
			break;
		default:
    		console.log(`CM Error, reveived : ${data}.`);
		}
	}
}

//Potions
on_need_hpot0 = () => {
	use(locate_item("hpot0"));
}

on_need_hpot1 = () => {
	use(locate_item("hpot1"));
}

on_need_mpot0 = () => {
	use(locate_item("mpot0"));
}

on_need_mpot1 = () => {
	use(locate_item("mpot1"));
}
/*
setInterval(() => {
	restock_pot();
}, 1000);
*/