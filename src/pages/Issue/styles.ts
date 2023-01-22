import styled from "styled-components";

export const IssueContainer = styled.section` 
    width: 416px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    background: ${props => props.theme['base-post']};
    border-radius: 10px;
    padding: 2rem;
    
    h1{
        font-size: 1.25rem;
        color: ${props => props.theme['base-title']};
        width: 17.6875rem;
    }

    section{
        width: 22rem;
        display: flex;
        align-items: flex-start;
        
        
    }
    p{
        font-size: 0.875rem;
        color: ${props => props.theme['base-span']};
        
    }

    article{
        width: 22rem;
    }
    
    
   
`