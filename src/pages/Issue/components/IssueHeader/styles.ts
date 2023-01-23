import  styled  from 'styled-components';


export const IssueHeaderContainer = styled.header`
     display: flex;
     flex-direction: column;
     align-items: center;
`

export const IssueHeaderContent = styled.div`
    position: relative;
    width: 54rem;
    height: 13.25rem;
    background-color: ${(props) => props.theme['base-profile']};
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    margin-top: calc(0px - 5.5rem);

    border-radius: 10px;

   
    


`
export const IssueSummaryContainer = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
    
`

export const IssueNamePlusLink = styled.div`
    width: 50rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
   
    

`


export const IssueSummary = styled.article`
    width: 38.25rem;
    display: flex;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    font-weight: bold;
    


`
export const IssueName = styled.p`
    display: flex;
   
    color: ${(props) => props.theme['blue']};
    align-items: center;

    a{
        color: ${(props) => props.theme['blue']};
        text-decoration: none;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
    }
    
    
`
export const IssueGithubLink = styled.span`
    display: flex;
    font-size: 0.75rem;
    color: ${(props) => props.theme['blue']};

    a{
        color: ${(props) => props.theme['blue']};
    }
    
`


export const IssueIconsContainer = styled.span`
    display: flex;
    margin-top: 1rem;
    align-items: center;
    justify-content: flex-start;
    
    gap: 1.5rem;

    .icons{
        color: ${(props) => props.theme['base-label']};
    }
    span{
        display: flex;
        gap: 0.5rem;
    }
   
    
`