

import { useCallback, useEffect, useState } from "react";
import { IssueContent } from "./components/IssueContent";
import { IssueHeader } from "./components/IssueHeader";
import { IssueContainer } from "./styles";
import { PostProps } from "../../components/IssueCard/Index";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { IssuesProps } from "../Home";







export function Issue () {
    const [postData, setPostData] = useState<IssuesProps>({} as IssuesProps);
    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams();

    const getPostDetails = useCallback(async () => {


        try{
            const response = await api.get(`/repos/felipe7281/desafio-04-github-blog/issues/${id}`);
            setIsLoading(true)
            setPostData(response.data)
        }
        finally{
            setIsLoading(false)
        }
    }, [postData])

    useEffect(() => {
        getPostDetails();
    }, [])

  

        return(
            <IssueContainer >
                <IssueHeader postData={postData} isLoading={isLoading}/>
                <IssueContent postData={postData} isLoading={isLoading} />
            </IssueContainer>
            

        )
    }

   