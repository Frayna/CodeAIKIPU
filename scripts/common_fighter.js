/////Events/////
//Party

on_cm = (name, data) => {
	if (name == leader_name)
		pos_cm = data;
}

on_party_without_merchant = () => {
	leave_party();
}

on_solo = () => {
	ask_for_party();
}

//Potions
on_need_hpot0 = () => {
	if (!is_on_cooldown("use_hp"))
		use(locate_item("hpot0"));
}

on_need_hpot1 = () => {
	if (!is_on_cooldown("use_hp"))
		use(locate_item("hpot1"));
}

on_need_mpot0 = () => {
	if (!is_on_cooldown("use_mp"))
		use(locate_item("mpot0"));
}

on_need_mpot1 = () => {
	if (!is_on_cooldown("use_mp"))
		use(locate_item("mpot1"));
}

///Inventaire
on_leader_in_range = () => {
	if (character.gold > 0)
		send_gold(leader_name, character.gold);
	character.items.forEach((element, index) => {
		if (element) {
			if (element.name != "hpot0" && element.name != "hpot1" && element.name != "mpot0" && element.name != "mpot1")
				send_item(leader_name, index, element.q);
		}
	});
	if (locate_item("hpot0") == -1 || character.items[locate_item("hpot0")].q <= threshold.alert_hpot_fighter)
		send_cm(leader_name, { type_message: "ask_item", item: { name: "hpot0", q : threshold.max_hpot0_fighter - (locate_item("hpot0") == -1 ? 0 : character.items[locate_item("hpot0")].q)} })
	if (locate_item("mpot0") == -1 || character.items[locate_item("mpot0")].q <= threshold.alert_hpot_fighter) {
		send_cm(leader_name, { type_message: "ask_item", item: { name: "mpot0", q : threshold.max_mpot0_fighter - (locate_item("mpot0") == -1 ? 0 : character.items[locate_item("mpot0")].q)} })
	}
}

on_clean_gold = () => {
	send_cm(leader_name, { type_message: "call", pos: { x: parent.character.real_x, y: parent.character.real_y } })
}

on_clean_inventory = () => {
	send_cm(leader_name, { type_message: "call", pos: { x: parent.character.real_x, y: parent.character.real_y } })
}

on_low_hpot0 = () => {
	send_cm(leader_name, { type_message: "call", pos: { x: parent.character.real_x, y: parent.character.real_y } })
}

on_low_mpot0 = () => {
	send_cm(leader_name, { type_message: "call", pos: { x: parent.character.real_x, y: parent.character.real_y } })
}

setInterval(() => {
	send_cm(leader_name, { type_message: "pos" })
}, 500)