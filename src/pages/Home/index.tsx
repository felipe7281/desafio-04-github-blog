import { SearchBar } from "../../components/Searchbar";
import { useIssues } from "../../hooks/useIssues";
import { Issue } from "../Issue/Index";
import { HomeContainer, IssuesContainer } from "./types";

export function Home() {

    const {issues} = useIssues()
    

    return(
        <HomeContainer>
            <div>
                <h1>Publicações</h1>
                <p>{issues.length} publicações</p>
            </div>
            <SearchBar />

            <IssuesContainer>
            
                <Issue />
               
                
                
            </IssuesContainer>

        </HomeContainer>
    )
}