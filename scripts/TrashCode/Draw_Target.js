on_draw = () => {
	clear_drawings()
		draw_circle(parent.character.real_x, parent.character.real_y, parent.character.range + 20, 1, 0xAAAAFF)
	if(monsters[0])
		draw_circle(parent.character.real_x, parent.character.real_y, 5, 1, 0x00FF00)
	if(monsters[0]){
		let vec1 = {x:parent.character.real_x,y:parent.character.real_y};
		let vec2 = {x:monsters[0].real_x,y:monsters[0].real_y};
		draw_circle(monsters[0].real_x, monsters[0].real_y, monsters[0].range, 1, 0xFF0000)
		let vecFC = vecFromCoord(vec1,vec2)
		let vecFCLen = vecLen(vecFC)
		let vecFCNorm = {x : vecFC.x/vecFCLen, y : vecFC.y/vecFCLen}
		vecFC = {x : vecFCNorm.x * (vecFCLen - monsters[0].range), y : vecFCNorm.y * (vecFCLen - monsters[0].range)}
		vec2 = {x : vec1.x + vecFC.x, y : vec1.y + vecFC.y}
		vec1 = {x : vec1.x + vecFCNorm.x * 5, y : vec1.y + vecFCNorm.y * 5}
		draw_line(vec1.x, vec1.y, vec2.x, vec2.y, 1, 0xFF0000)
	}
}