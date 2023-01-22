import styled from "styled-components";

export const HomeContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 4.5rem;
  
  
   
   
   
  

     div{
        display: flex;
        justify-content: space-between;
        width: 54rem;
       
     }

     h1{
      font-weight: bold;
      font-size: 1.125rem;
      color: ${props => props.theme['base-subtitle']};
     }

     p{
      color: ${props => props.theme['base-span']};
      font-size: 0.875rem;
     }
`    

export const IssuesContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 2rem;
`