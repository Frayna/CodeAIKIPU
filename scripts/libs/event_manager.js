const merchant_in_party = () => {
	return Object.values(parent.party).filter(e => e.type == "merchant").length
}

//Repeting custom Event
setInterval(() => {
	///////////////Party Checks//////////////
	//Check party + check party merchant
	if (!merchant_in_party && Object.values(parent.party).length)
		if (on_party_without_merchant)
			on_party_without_merchant();

	//Check for solo
	if (!Object.values(parent.party).length)
		if (on_solo) //Not Han Solo you dick head
			on_solo();

	//////////////Potions Checks//////////////
	//Check for mpot1 needed
	if (parent.character.mp < parent.character.max_mp - 500 && parent.character.max_mp - 500 > 100)
		if (on_need_mpot1)
			on_need_mpot1();

	//Check for mpot0 needed
	if (parent.character.mp < parent.character.max_mp - 300 && parent.character.max_mp - 300 > 100)
		if (on_need_mpot0)
			on_need_mpot0();

	//Check for hpot1 needed
	if (parent.character.hp < parent.character.max_hp - 400 && parent.character.max_hp - 400 > 100)
		if (on_need_hpot1)
			on_need_hpot1();

	//Check for hpot0 needed
	if (parent.character.hp < parent.character.max_hp - 200 && parent.character.max_hp - 200 > 100)
		if (on_need_hpot0)
			on_need_hpot0();

	///////////////Inventory//////////////
	//Check for leader in range
	//Fire once Event
	
	if (sortByDistance({x:pos_cm.x, y : pos_cm.y}, {x : character.real_x, y : character.real_y}) <= 50 && !on_leader_in_range_previous_state) {
		//FIRE
		console.log("TEST");
		if (on_leader_in_range)
			on_leader_in_range();
		on_leader_in_range_previous_state = sortByDistance({x:pos_cm.x, y : pos_cm.y}, {x : character.real_x, y : character.real_y}) <= 50 ? true : false;
	}

	if (available_slots() <= threshold.call_for_inventory && !on_clean_inventory_previous_state) {
		if (on_clean_inventory) 
			on_clean_inventory();
		on_clean_inventory_previous_state = available_slots() <= threshold.call_for_inventory ? true : false;
	}

	if (character.gold >= threshold.call_for_gold && !on_clean_gold_previous_state) {
		if (on_clean_gold);
			on_clean_gold();
		on_clean_gold_previous_state = character.gold >= threshold.call_for_gold ? true : false;
	}
}, 100);