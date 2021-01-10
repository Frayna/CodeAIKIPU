let leader_name;
let figthers = [];
let pos_cm = {};

if (character.owner == "5569783890706432" ) {
	leader_name = "Traderman";
	figthers.push("Fraynanger");
	figthers.push("Fraynarrior");
	figthers.push("Fraynameno");
}
if (character.owner == "6078116965908480" ) {
	leader_name = "Viarader";
	figthers.push("Viarrior");
	figthers.push("Viarrest");
	figthers.push("Vianger");
}

let threshold ={
call_for_inventory: 10,
call_for_gold: 100000,
max_hpot0_fighter: 3000,
alert_hpot_fighter: 200,
max_mpot0_fighter: 3000,
alert_mpot_fighter: 200
}
//event constants
let on_party_without_merchant;
let on_solo;
let on_need_mpot0;
let on_need_mpot1;
let on_need_hpot0;
let on_need_hpot1;
let on_leader_in_range;
let on_leader_in_range_previous_state;
let on_clean_inventory;
let on_clean_gold;
let on_clean_inventory_previous_state;
let on_clean_gold_previous_state;
let on_low_hpot0;
let on_low_hpot0_previous_state;
let on_low_mpot0;
let on_low_mpot0_previous_state;;