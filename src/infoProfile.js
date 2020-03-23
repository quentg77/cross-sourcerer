import React from 'react';
import { useQuery } from "react-apollo";
import { infoProfile } from './queries';
import "./infoProfile.css"

function InfoProfile(props) {
	const { nickname } = props;
	const { loading, error, data } = useQuery(
		infoProfile,
		{
			variables: {
				nickname
			}
		}
	);

	let nbCommit = 0;

	if (!loading && !error) {
		const result = data.user.repositories.nodes.map(obj => {
			return obj.object.history.totalCount;
		});
		nbCommit = result.reduce((a, b) => a + b);
		console.log(nbCommit);
	}

	return(
		<div className="InfoProfile">
			{
				!loading &&
				!error &&
				<>
					<h1 className="Nickname">quentg77</h1>
					<div className="Basics">
						<img className="Avatar" src={data.user.avatarUrl} />
						<div className="Box">
							<span>Commits</span>
							<span>{nbCommit}</span>
						</div>
						<div className="Box">
							<span>Repos</span>
							<span>{data.user.repositories.totalCount}</span>
						</div>
						<div className="Box">
							<span>followers</span>
							<span>{data.user.followers.totalCount}</span>
						</div>
						<div className="Box">
							<span>following</span>
							<span>{data.user.following.totalCount}</span>
						</div>
					</div>
				</>
			}
			{
				!loading &&
				error &&
				<p>{JSON.stringify(error)}</p>
			}
		</div>
	)
}

export default InfoProfile;
