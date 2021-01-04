const dev = {
	host : "localhost",
	porc : 6969
}

const prod = {
	host : "viarra.fr",
	porc : 17171
}

///////////////////////////////////////////////VARIABLES/////////////////////////////////////////////

const host = dev.host;
const porc = dev.porc;
const classe = character.ctype;
const enemy = "Goo"
const auto_party = true;

/////////////////////////////////////////////////LOADER///////////////////////////////////////////////

const load_script = async (address) => {
	await $.ajax(address, {
		type: 'Get',
		dataType: "script",
		async: false,
		cache: true
	});
}

////////////////////////////////////////////////////CODE///////////////////////////////////////////////

const launchcode = async () => {
		await load_script(`http://${host}:${porc}/libs/load_const.js`)
		await load_script(`http://${host}:${porc}/libs/party_manager.js`)
		await load_script(`http://${host}:${porc}/libs/vector.js`)
		await load_script(`http://${host}:${porc}/libs/lib.js`)
		await load_script(`http://${host}:${porc}/common_fighter.js`)
		await load_script(`http://${host}:${porc}/${classe}.js`)
		await load_script(`http://${host}:${porc}/libs/event_manager.js`)
}
launchcode();