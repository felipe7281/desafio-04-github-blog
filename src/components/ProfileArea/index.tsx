import { ArrowSquareOut, Buildings, Users } from "phosphor-react";
import { GithubLink, ProfileHeaderContent, ProfileIconsContainer, ProfileName, ProfileNamePlusLink, ProfileSummary, ProfileSummaryContainer } from "./styles";
import { useEffect, useState } from "react";


interface ProfileProps {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name: string;
    company: string;
    bio: string;
    followers: number;
}
export function ProfileArea() {

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
        <ProfileHeaderContent>

                <img src={userData?.avatar_url} width={148} height={148}/>
                
                <ProfileSummaryContainer>
                    <ProfileNamePlusLink>
                        <ProfileName>{userData?.name}</ProfileName>
                        <GithubLink><a href={userData?.html_url} target='_blank'>GITHUB <ArrowSquareOut  size={12}/></a></GithubLink>

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
    )
}