const ask_for_party = () => {
	// check if party is empty
	if (!Object.keys(get_party()).length) {
		send_cm(leader_name, { type_message: "group" })
	}
}

on_party_invite = (leader_name) => {
	if (auto_party)
		accept_party_invite(leader_name);
}

const merchant_in_party = () => {
	return Object.values(parent.party).filter(e => e.type == "merchant").length
}