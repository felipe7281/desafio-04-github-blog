
import { IssueContainer, IssueContent } from "./styles";


import {  formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useIssues } from "../../hooks/useIssues";
import { IssuesProps } from "../../pages/Home/index";


export interface PostProps  {
    post: IssuesProps
}


export function IssueCard ({post}: PostProps) {

    

    

    return(
       <IssueContainer>
            
            
               
               
                    <a href={`/issue/${post.number}`} target="_blank" key={post.id} >
                        <IssueContent>
                            <section>
                                <h1>{post.title}</h1>
                                <p>{formatDistanceToNow(new Date(post.created_at), {
                                    addSuffix: true,
                                    locale: ptBR
                                }) }</p>
                            </section>
                            
                            <article>{String(post.body).slice(0, 180)}...</article>
                        </IssueContent>
                    </a>
                


            



           
        </IssueContainer>
        
    )
}

//https://api.github.com/search/issues?q=%20repo:felipe7281/desafio-04-github-blog

//https://api.github.com/repos/felipe7281/desafio-04-github-blog/issues/3