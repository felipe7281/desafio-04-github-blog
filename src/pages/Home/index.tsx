import { SearchBar } from "../../components/Searchbar";
import { Issue } from "../Issue/Index";
import { HomeContainer } from "./types";

export function Home() {
    

    return(
        <HomeContainer>
            <span>
                <p>Publicações</p>
                <p>publicações</p>
            </span>
            <SearchBar />
            
            <Issue />


        </HomeContainer>
    )
}