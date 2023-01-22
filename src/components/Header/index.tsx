import { ArrowSquareOut, Buildings, Users } from "phosphor-react";
import { GithubLink, HeaderBackground, HeaderContainer, ProfileHeaderContent, ProfileIconsContainer, ProfileName, ProfileNamePlusLink, ProfileSummary, ProfileSummaryContainer } from "./types";
import { useEffect, useState } from "react";

interface ProfileProps {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_ur: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: string;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;

}

export function Header() {

    const [userData, setUserData] = useState<ProfileProps>();

    async function getProfile() {

        const response = await fetch("https://api.github.com/users/felipe7281")

        const data = await response.json();

        setUserData (data);

    }

    useEffect(() => {
        

        getProfile();

        console.log(userData);
        }
    , []);

  

    return(
        <HeaderContainer>

            <HeaderBackground>
                <img src={"src/assets/cover.png"} width={1440} height={296}></img>
                
            </HeaderBackground>
            <ProfileHeaderContent>

                <img src={userData?.avatar_url} width={148} height={148}/>
                
                <ProfileSummaryContainer>
                    <ProfileNamePlusLink>
                        <ProfileName>{userData?.name}</ProfileName>
                        <GithubLink><a href="https://github.com/felipe7281">GITHUB <ArrowSquareOut  size={12}/></a></GithubLink>

                    </ProfileNamePlusLink>
                    <ProfileSummary>
                     {userData?.bio}
                    </ProfileSummary>
                    <ProfileIconsContainer>
                        <span><img className="icons" src="src/assets/github-brand.svg"></img>{userData?.login}</span>
                        <span><Buildings className="icons" size={18} />{userData?.company}</span>
                        <span><Users className="icons" size={18} />{userData?.followers} Seguidores</span>
                    </ProfileIconsContainer>
                
                </ProfileSummaryContainer>
            </ProfileHeaderContent>
        </HeaderContainer>
    )
}