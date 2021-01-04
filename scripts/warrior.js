const refreshMonsters = () => { return Object.values(parent.entities).filter((v) => { if (v.name == enemy) return (true); return false }) }

let monsters = refreshMonsters();
if (monsters)
	monsters.sort((a, b) => {
		return (vecLen(vecFromCoord(a, { x: parent.character.real_x, y: parent.character.real_y })) -
			vecLen(vecFromCoord(b, { x: parent.character.real_x, y: parent.character.real_y })))
	})
setInterval(() => {
	monsters = refreshMonsters();
	monsters.sort((a, b) => {
		return (vecLen(vecFromCoord(a, { x: parent.character.real_x, y: parent.character.real_y })) -
			vecLen(vecFromCoord(b, { x: parent.character.real_x, y: parent.character.real_y })))
	})
	if (monsters[0]) {
		parent.move(monsters[0].real_x, monsters[0].real_y, true);
		if (!is_on_cooldown("attack") && is_in_range(monsters[0], "attack")) {
			attack(monsters[0]).then(
				function (data) {
				},
				function (data) {
					game_log("oh no, attack failed: " + data.reason);
				},
			);
		}
	}
	loot()
}, 200)