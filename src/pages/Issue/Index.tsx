import { useContext, useEffect, useState } from "react";
import { IssueContainer } from "./styles";
import { api } from "../../lib/axios";
import { IssuesContext } from "../../context/IssuesContext";
import { useIssues } from "../../hooks/useIssues";






export function Issue () {

    const {issues} = useIssues()

    

    return(
       <>
            {issues.map(item => {
                return (

                    <IssueContainer key={item.id}>
                        <section>
                            <h1>{item.title}</h1>
                            <p></p>
                        </section>
                        
                        <article>{String(item.body).slice(0, 180)}...</article>
                    </IssueContainer>
                )
            })}
           
        </>
        
    )
}

//https://api.github.com/search/issues?q=%20repo:felipe7281/desafio-04-github-blog

//https://api.github.com/repos/felipe7281/desafio-04-github-blog/issues/3