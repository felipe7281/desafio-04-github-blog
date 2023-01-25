import { Spinner } from "../../../../components/Spinner";
import { IssuesProps } from "../../../Home";
import { IssueContentContainer } from "./styles";

interface PostHeaderProps {
    postData: IssuesProps
    isLoading: boolean
}

export function IssueContent({ postData, isLoading }: PostHeaderProps) {

    return(

        <IssueContentContainer>
            {isLoading ? (<Spinner />) : (
                <>
                    {postData.body}
                </>
            )}
        </IssueContentContainer>
    )
}