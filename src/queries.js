import { gql } from "apollo-boost";

export const infoProfile = gql`
	query getInfo($nickname: String!) {
		user(login: $nickname) {
			avatarUrl
			repositories(first: 100) {
				totalCount
				nodes {
					object(expression: "master") {
						... on Commit {
							history {
								totalCount
							}
						}
					}
				}
			}
			followers {
				totalCount
			}
			following {
				totalCount
			}
		}
	}
`;
