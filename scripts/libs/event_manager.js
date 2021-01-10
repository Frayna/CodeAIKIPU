//Repeting long custom Event
setInterval(() => {
	///////////////Party Checks//////////////
	//Check party + check party merchant
	if (!merchant_in_party())
		if (on_party_without_merchant)
			on_party_without_merchant();
}, 500)



//Repeting fast custom Event
setInterval(() => {
	//Check for solo
	if (!Object.values(parent.party).length)
		if (on_solo) //Not Han Solo you dick head
			on_solo();

	//////////////Potions Checks//////////////
	//Check for mpot1 needed
	if (parent.character.mp < parent.character.max_mp - 500 && parent.character.max_mp - 500 > 0)
		if (on_need_mpot1)
			on_need_mpot1();

	//Check for mpot0 needed
	if (parent.character.mp < parent.character.max_mp - 300 && parent.character.max_mp - 300 > 0)
		if (on_need_mpot0)
			on_need_mpot0();

	//Check for hpot1 needed
	if (parent.character.hp < parent.character.max_hp - 400 && parent.character.max_hp - 400 > 0)
		if (on_need_hpot1)
			on_need_hpot1();

	//Check for hpot0 needed
	if (parent.character.hp < parent.character.max_hp - 200 && parent.character.max_hp - 200 > 0)
		if (on_need_hpot0)
			on_need_hpot0();

	///////////////Inventory//////////////
	//Check for leader in range
	//Fire once Event
	
	if (sortByDistance({x:pos_cm.x, y : pos_cm.y}, {x : character.real_x, y : character.real_y}) <= 50 && !on_leader_in_range_previous_state) {
		//FIRE
		if (on_leader_in_range)
			on_leader_in_range();
		on_leader_in_range_previous_state = sortByDistance({x:pos_cm.x, y : pos_cm.y}, {x : character.real_x, y : character.real_y}) <= 50 ? true : false;
	}

	if (available_slots() <= threshold.call_for_inventory && !on_clean_inventory_previous_state) {
		if (on_clean_inventory) 
			on_clean_inventory();
		}
	on_clean_inventory_previous_state = available_slots() <= threshold.call_for_inventory ? true : false;

	if (character.ctype != "merchant") {
		if (character.gold >= threshold.call_for_gold && !on_clean_gold_previous_state) {
			if (on_clean_gold);
				on_clean_gold();
			}
		on_clean_gold_previous_state = character.gold >= threshold.call_for_gold ? true : false;
	}

	if(character.ctype != "merchant") {
		if(on_low_hpot0)
			if(!on_low_hpot0_previous_state && (locate_item("hpot0") == -1 || character.items[locate_item("hpot0")].q <= threshold.alert_hpot_fighter)) {
				console.log("testhpot")
				on_low_hpot0()
			}
		on_low_hpot0_previous_state = (locate_item("mpot0") == -1 || character.items[locate_item("hpot0")].q <= threshold.alert_hpot_fighter) ? true : false;
	}

	if(character.ctype != "merchant") {
		if(on_low_mpot0)
		if(!on_low_mpot0_previous_state && (locate_item("mpot0") == -1 || character.items[locate_item("mpot0")].q <= threshold.alert_mpot_fighter)) {
				console.log("testmpot")
				on_low_mpot0()
			}
		on_low_mpot0_previous_state = (locate_item("mpot0") == -1 || character.items[locate_item("mpot0")].q <= threshold.alert_mpot_fighter) ? true : false;
	}
}, 100);