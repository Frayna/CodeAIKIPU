const restock_pot = () => {
	if (!is_in_range(find_npc("potions")) && !is_moving(character))
		smart_move("potions", () => {
			if(character.items[0].q < 9999 && character.items[0].name == "hpot0")
				console.log("return buy hpot: ", buy("hpot0", 9999 - character.items[0].q));
			if(character.items[1].q < 9999 && character.items[1].name == "mpot0")
				console.log("return buy mpot: ", buy("mpot0", 9999 - character.items[1].q));
	});
}
