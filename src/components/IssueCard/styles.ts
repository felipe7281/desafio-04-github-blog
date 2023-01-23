
import styled from "styled-components";

export const IssueContainer = styled.div`
    width: 54rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;

    
   

    a{
        text-decoration: none;
        color: inherit;
       
    }
      
`

export const IssueContent = styled.section` 
    width: 26rem;
    display: flex;
    flex-direction: column;
    
    height: fit-content;
    background: ${props => props.theme['base-post']};
    border-radius: 10px;
    padding: 2rem;
    
   
    
    h1{
        font-size: 1.25rem;
        color: ${props => props.theme['base-title']};
        width: fit-content;
    }

    section{
        width: 22rem;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        
        
    }
    p{
        font-size: 0.875rem;
        color: ${props => props.theme['base-span']};
        flex-wrap: nowrap;
        
    }

    article{
        width: 22rem;
    }
    
    
   
`