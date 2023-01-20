import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { GithubLink, HeaderBackground, HeaderContainer, ProfileHeaderContent, ProfileIconsContainer, ProfileName, ProfileNamePlusLink, ProfileSummary, ProfileSummaryContainer } from "./types";
import GithubBrand from "../../assets/github-brand.svg"

export function Header() {

    return(
        <HeaderContainer>

            <HeaderBackground>
                <img src="src/assets/cover.png" width={1440} height={296}></img>
                
            </HeaderBackground>
            <ProfileHeaderContent>

                <img src="src/assets/profile-photo.jpeg" width={148} height={148}/>
                
                <ProfileSummaryContainer>
                    <ProfileNamePlusLink>
                        <ProfileName>Felipe Ferreira da Silva</ProfileName>
                        <GithubLink><a href="https://github.com/felipe7281">GITHUB <ArrowSquareOut  size={12}/></a></GithubLink>

                    </ProfileNamePlusLink>
                    <ProfileSummary>
                        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                    </ProfileSummary>
                    <ProfileIconsContainer>
                        <span><img className="icons" src="src/assets/github-brand.svg"></img>Github</span>
                        <span><Buildings className="icons" size={18} /> Empresa</span>
                        <span><Users className="icons" size={18} /> Seguidores</span>
                    </ProfileIconsContainer>
                
                </ProfileSummaryContainer>
            </ProfileHeaderContent>
        </HeaderContainer>
    )
}