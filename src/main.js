import React from 'react';
import InfoProfile from './infoProfile';

const nickname = "quentg77"

function Main() {
	return(
	<div className="Main">
		<InfoProfile nickname={nickname} />
	</div>
	);
}

export default Main;