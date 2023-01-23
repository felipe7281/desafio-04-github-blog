import { SearchBar } from "../../components/Searchbar";
import { useIssues } from "../../hooks/useIssues";
import { IssueCard } from "../../components/IssueCard/Index";
import { HomeContainer, IssuesContainer, PostsCounter, PostsCounterContainer, PostsCounterTItle } from "./types";
import { Header } from "../../components/Header";
import { ProfileArea } from "../../components/ProfileArea";

export function Home() {

    const {issues} = useIssues()
    

    return(
        <HomeContainer>

            
            <ProfileArea />
            <PostsCounterContainer>
                <PostsCounterTItle>Publicações</PostsCounterTItle>
                <PostsCounter>{issues.length} publicações</PostsCounter>
            </PostsCounterContainer>
            <SearchBar />

            <IssuesContainer>      
                <IssueCard />
            </IssuesContainer>

        </HomeContainer>
    )
}