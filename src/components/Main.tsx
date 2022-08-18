import { useEffect, useState } from "react";
import "./Main.css";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import UserDetails from "./UserDetails";

export interface UserData {
	login: string;
	avatar_url: string;
	html_url: string;
	name: string;
	company: string;
	blog: string;
	location: string;
	email: string;
	bio: string;
	twitter_username: string;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: string;
}

export default function Main() {
	const [user, setUser] = useState<UserData>();
	const [username, setUsername] = useState("");
	const [theme, setTheme] = useState("darkmode");
	const [isSearchReady, setIsSearchReady] = useState(false);

	const handleClick = async () => {
		setIsSearchReady(false);
		fetch(`https://api.github.com/users/${username}`)
			.then((res) => res.json())
			.then((result: UserData) => {
				setTimeout(setUser, 300, result);
				setTimeout(setIsSearchReady, 300, true);
			});
	};

	useEffect(() => {
		document.body.id = theme;
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "darkmode" ? "lightmode" : "darkmode");
	};

	return (
		<section>
			<header>
				<h1>devfinder</h1>
				<button onClick={toggleTheme} id="themeButton">
						{theme === "darkmode" ? (
							<div>
								<LightModeOutlinedIcon />
								<h6>light</h6>
							</div>
						) : (
							<div>
								<DarkModeOutlinedIcon />
								<h6>dark</h6>
							</div>
						)}
				</button>
			</header>
			<div className="searchbar">
				<SearchOutlinedIcon />
				<input
					type="text"
					name="username"
					value={username}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				></input>
				<button onClick={handleClick} id="searchButton">
					<h4>Search</h4>
				</button>
			</div>
			<div
				className={
					isSearchReady ? "searchResultReady" : "searchResultNotReady"
				}
			>
				{user && <UserDetails user={user} />}
			</div>
		</section>
	);
}
