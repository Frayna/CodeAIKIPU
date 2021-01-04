/////Events/////
//Party

on_cm = (name, data) => {
	if (name == leader_name)
	pos_cm = data;
	console.log(pos_cm)
}

on_party_without_merchant = () => {
	leave_party();
}

on_solo = () => {
	ask_for_party();
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

///Inventaire
on_leader_in_range = () => {
	if(character.gold > 0)
		send_gold(leader_name,character.gold);
	character.items.forEach((element, index) => {
		if(element){
			if(element.name != "hpot0" && element.name != "hpot1" && element.name != "mpot0" && element.name != "mpot1")
				send_item(leader_name, index, element.q);
		}
	});
}

on_clean_gold = () => {
	send_cm(leader_name, {type_message : "call", pos :{x : parent.character.real_x, y : parent.character.real_y}})
}

on_clean_inventory = () => {
	send_cm(leader_name, {type_message : "call", pos :{x : parent.character.real_x, y : parent.character.real_y}})
}

setInterval(() => {
	send_cm(leader_name, {type_message : "pos"})
}, 500)