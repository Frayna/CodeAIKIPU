on_cm = (name, data) => {
	if (data.ip == ip) {
		switch (data.msg) {
			case 'group':
    			send_party_invite(name);
    		break;
		default:
    		console.log(`CM Error, reveived : ${data}.`);
		}
	}
}
