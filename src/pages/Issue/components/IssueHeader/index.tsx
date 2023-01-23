import { ArrowSquareOut, Buildings, Calendar, CalendarBlank, CalendarCheck, CalendarPlus, CalendarX, ChatCircle, SkipBack, Users } from "phosphor-react";
import { IssueGithubLink, IssueHeaderContainer, IssueHeaderContent, IssueIconsContainer, IssueName, IssueNamePlusLink, IssueSummary } from "./styles";

export function IssueHeader() {

    return(

        <IssueHeaderContainer>

            <IssueHeaderContent>
                <IssueNamePlusLink>
                        <IssueName><a href="../"><SkipBack />VOLTAR</a></IssueName>
                        <IssueGithubLink><a  target='_blank'>VER NO GITHUB <ArrowSquareOut  size={12}/></a></IssueGithubLink>

                </IssueNamePlusLink>
                <IssueSummary>
                     No samba 
                </IssueSummary>
                <IssueIconsContainer>
                        <span><img className="icons" src="src/assets/github-brand.svg"></img>Felipe7281</span>
                        <span><CalendarBlank weight="fill" className="icons" size={18} />Há 1 dia</span>
                        <span><ChatCircle weight="fill" className="icons" size={18} /> Comentários</span>
                </IssueIconsContainer>
            

            
            </IssueHeaderContent>
        
        </IssueHeaderContainer>
    )
}