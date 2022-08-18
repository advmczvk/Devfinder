import { UserData } from "./Main";
import "./UserDetails.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useEffect, useState } from "react";

interface Props {
	user: UserData;
}
export default function UserDetails({ user }: Props) {
    const [date, setDate] = useState(new Date());

    
    useEffect(() => {
        setDate(new Date(user.created_at));
        // eslint-disable-next-line
    }, [user.created_at])

	return (
		<>
			<div className="container">
				<div className="wrapper">
					<img
						className="profilePic"
						src={user.avatar_url}
						alt="User avatar"
					/>
					<div className="details">
						<div className="name">
							<h1>{user.name}</h1>
							<h4>{date.toLocaleString()}</h4>
						</div>
						<h3>@{user.login}</h3>
						<p>{user.bio}</p>
						<div className="stats">
							<div>
								<h4>Repos</h4>
								<h3>{user.public_repos}</h3>
							</div>
							<div>
								<h4>Followers</h4>
								<h3>{user.followers}</h3>
							</div>
							<div>
								<h4>Following</h4>
								<h3>{user.following}</h3>
							</div>
						</div>
						<div className="infos">
							<div>
								<div className="info">
									<LocationOnOutlinedIcon />
									<h3 className={user.location ? "" : "disabled"}>
										{user.location
											? user.location
											: "not available"}
									</h3>
								</div>
								<div className="info">
                                    <TwitterIcon />
									<h3 className={user.twitter_username ? "" : "disabled"}>
										{user.twitter_username
											? "@" + user.twitter_username
											: "not available"}
									</h3>
								</div>
							</div>
							<div>
								<div className="info">
                                    <LinkIcon />
									<h3 className={user.blog ? "" : "disabled"}>
										{user.blog
											? user.blog
											: "not available"}
									</h3>
								</div>
								<div className="info">
                                    <ApartmentIcon/>
									<h3 className={user.company ? "" : "disabled"}>
										{user.company
											? user.company
											: "not available"}
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
