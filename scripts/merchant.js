on_cm = (name, data) => {
	if (figthers.find(elem => elem == name).length) {
		switch (data.type_message) {
			case "group":
    			send_party_invite(name);
			break;
			case "call":
				smart_move({x:data.pos.x, y:data.pos.y})
			break;
			case "pos":
				send_cm(name, {x : character.real_x, y : character.real_y})
			break;
			case "ask_item":
				send_item(name, locate_item(data.item.name), data.item.q)
			break
		default:
    		console.log(`CM Error, reveived : ${data}.`);
		}
	}
}

//Potions
on_need_hpot0 = () => {
	use(character.items[locate_item("hpot0")]);
}

on_need_mpot0 = () => {
	use(character.items[locate_item("mpot0")]);
}

setInterval(() => {
	restock_pot();
}, 60000 * 10);
