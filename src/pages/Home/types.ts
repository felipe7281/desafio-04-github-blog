import styled from "styled-components";

export const HomeContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   
`   
export const PostsCounterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 54rem;
   margin-top: 4.5rem;
` 
export const PostsCounterTItle = styled.h1`
       font-weight: bold;
      font-size: 1.125rem;
      color: ${props => props.theme['base-subtitle']};
`

export const PostsCounter = styled.p`
     color: ${props => props.theme['base-span']};
      font-size: 0.875rem;
`

export const IssuesContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 2rem;
`