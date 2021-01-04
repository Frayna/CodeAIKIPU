const vecFromCoord = (vec1, vec2) => { return { x: vec2.x - vec1.x, y: vec2.y - vec1.y } }
const vecLen = (vec) => { return Math.abs(Math.sqrt(Math.pow(vec.x, 2) + Math.pow(vec.y, 2))) }
const sortByDistance = (entitie1, entitie2) => {
	return (
		vecLen(vecFromCoord(entitie1, entitie2))

	)
}