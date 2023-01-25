import { ArrowSquareOut, Buildings, Users } from "phosphor-react";
import { GithubLink, ProfileHeaderContent, ProfileIconsContainer, ProfileName, ProfileNamePlusLink, ProfileSummary, ProfileSummaryContainer } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Spinner } from "../Spinner";


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
    const[isLoading, setIsLoading] = useState(true)
    const [userData, setUserData] = useState<ProfileProps>();

    const getProfileData = useCallback(async () => {
        try {
          setIsLoading(true);
          const response = await api.get(`/users/felipe7281`);
    
          setUserData(response.data);
        } finally {
          setIsLoading(false);
        }
      }, [userData]);
    
      useEffect(() => {
        getProfileData();
      }, []);

    return(
        <ProfileHeaderContent>

                <img src={userData?.avatar_url} width={148} height={148}/>
                
                <ProfileSummaryContainer>
                    {isLoading ? (<Spinner />) : (
                        <>
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
                        </>)}
                    
                </ProfileSummaryContainer>
            </ProfileHeaderContent>
    )
}