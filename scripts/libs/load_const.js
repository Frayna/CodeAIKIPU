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
}

let threshold ={
call_for_inventory: 10,
call_for_gold: 100000}
//event constantes
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