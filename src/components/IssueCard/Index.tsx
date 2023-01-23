
import { IssueContainer, IssueContent } from "./styles";


import {  formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useIssues } from "../../hooks/useIssues";





export function IssueCard () {

    const {issues} = useIssues()

    

    return(
       <IssueContainer>
            {issues.map(item => {
                return (
                    <a href="/issue" target="_blank">
                        <IssueContent key={item.id}>
                            <section>
                                <h1>{item.title}</h1>
                                <p>{formatDistanceToNow(new Date(item.created_at), {
                                    addSuffix: true,
                                    locale: ptBR
                                }) }</p>
                            </section>
                            
                            <article>{String(item.body).slice(0, 180)}...</article>
                        </IssueContent>
                    </a>
                )
            })}
           
        </IssueContainer>
        
    )
}

//https://api.github.com/search/issues?q=%20repo:felipe7281/desafio-04-github-blog

//https://api.github.com/repos/felipe7281/desafio-04-github-blog/issues/3