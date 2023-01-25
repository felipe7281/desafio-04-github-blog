import { SearchBar } from "../../components/Searchbar";
import { useIssues } from "../../hooks/useIssues";
import { IssueCard } from "../../components/IssueCard/Index";
import { HomeContainer, IssuesContainer, PostsCounter, PostsCounterContainer, PostsCounterTItle } from "./types";

import { ProfileArea } from "../../components/ProfileArea";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";


export interface IssuesProps {
    id: string
    number: number
    title: string
    body: string
    html_url: string
    created_at: number
    comments: number
    user: {
        login: string
    }
 }

export function Home() {

    const[ isLoading, setIsLoading] = useState(true);
    const [issues, setIssues] = useState<IssuesProps[]>([]);


    const getIssues = useCallback(
        async (query: string = "") => {
            try{
                setIsLoading(true)
                const response = await api.get(`/search/issues?q=${query}%20repo:felipe7281/desafio-04-github-blog `)


                setIssues(response.data.items)
            } finally{
                setIsLoading(false);
            }
        },[issues]
    )

   

    useEffect(() => {
        

        
     
        getIssues();
        

        
        }
    , []);


    
    

    return(
        <HomeContainer>

            
            <ProfileArea />
            <PostsCounterContainer>
                <PostsCounterTItle>Publicações</PostsCounterTItle>
                <PostsCounter>{issues.length} publicações</PostsCounter>
            </PostsCounterContainer>
            <SearchBar getPosts={getIssues}/>

            <IssuesContainer>      
                {issues.map(item => (
                    <IssueCard key={item.number} post={item}/>
                ))}
            </IssuesContainer>

        </HomeContainer>
    )
}