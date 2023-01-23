
import { IssueContent } from "./components/IssueContent";
import { IssueHeader } from "./components/IssueHeader";
import { IssueContainer } from "./styles";







export function Issue () {

    return(
        <IssueContainer>
            <IssueHeader />
            <IssueContent />
        </IssueContainer>
        

    )
}

   