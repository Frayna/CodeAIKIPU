let ip = "";

$.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
  ip = data.geobytesipaddress;
});

setInterval(() => {
	// check if party is empty
	if (!Object.keys(get_party()).length) {
		send_cm(leader_name, { ip: ip, msg: "group" })
	}
}, 1000)

on_party_invite = (leader_name) => {
	accept_party_invite(leader_name);
}