const buy_pot = () => {
	//Less than 9999 hpot0
	if (character.items[locate_item("hpot0")].q == -1 || character.items[locate_item("hpot0")].q < 9999 && character.items[locate_item("hpot0")].name == "hpot0")
		console.log("return buy hpot: ", buy("hpot0", 9999 - character.items[locate_item("hpot0")].q));

	//Less than 9999 mpot0
	if (character.items[locate_item("mpot0")].q == -1 || character.items[locate_item("mpot0")].q < 9999 && character.items[locate_item("mpot0")].name == "mpot0")
		console.log("return buy mpot: ", buy("mpot0", 9999 - character.items[locate_item("mpot0")].q));

/*	
	//Less than 9999 hpot1
	if ((locate_item("hpot1").q < 9999 && locate_item("hpot1").name == "hpot1") || locate_item("hpot1").q == -1)
		console.log("return buy hpot: ", buy("hpot1", 9999 - locate_item("hpot1").q));

	//Less than 9999 mpot1
	if ((locate_item("mpot1").q < 9999 && locate_item("mpot1").name == "mpot1") || locate_item("mpot1").q == -1)
		console.log("return buy mpot: ", buy("mpot1", 9999 - locate_item("mpot1").q));
*/
}

const restock_pot = () => {
	if (!is_in_range(find_npc("potions")) && !is_moving(character))
		smart_move("potions", buy_pot);
	else if (is_in_range(find_npc("potions")) && !is_moving(character))
		buy_pot();
}

const available_slots = () => {
	return character.items.filter(e => e === null).length
}

