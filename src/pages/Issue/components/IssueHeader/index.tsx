import { ArrowSquareOut, Buildings, Calendar, CalendarBlank, CalendarCheck, CalendarPlus, CalendarX, ChatCircle, SkipBack, Users } from "phosphor-react";
import { IssueGithubLink, IssueHeaderContainer, IssueHeaderContent, IssueIconsContainer, IssueName, IssueNamePlusLink, IssueSummary } from "./styles";
import { IssuesProps } from "../../../Home";
import { Spinner } from "../../../../components/Spinner";
import { useNavigate } from "react-router-dom";
import GithubIcon from "../../../../assets/github-brand.svg"

interface PostHeaderProps {
    postData: IssuesProps
    isLoading: boolean
}

export function IssueHeader({ postData, isLoading }: PostHeaderProps ) {

const navigate = useNavigate();

function goBack() {
    navigate(-1);
}

    return(

        <IssueHeaderContainer>

            {isLoading ? (<Spinner />) : (
                <>
                    <IssueHeaderContent>
                        <IssueNamePlusLink>
                                <IssueName><a href="../"><SkipBack />VOLTAR</a></IssueName>
                                <IssueGithubLink><a href={postData.html_url} target='_blank'>VER NO GITHUB <ArrowSquareOut  size={12}/></a></IssueGithubLink>

                        </IssueNamePlusLink>
                        <IssueSummary>
                            {postData.title}
                        </IssueSummary>
                        <IssueIconsContainer>
                                <span><img className="icons" src={GithubIcon}></img>{postData.user.login}</span>
                                <span><CalendarBlank weight="fill" className="icons" size={18} />Há 1 dia</span>
                                <span><ChatCircle weight="fill" className="icons" size={18} />{postData.comments} Comentários</span>
                        </IssueIconsContainer>
                    

                    
                    </IssueHeaderContent>
                </>
            )}
        
        </IssueHeaderContainer>
    )
}