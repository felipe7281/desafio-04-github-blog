import styled from "styled-components";

export const HeaderContainer = styled.header`
     display: flex;
     flex-direction: column;
     align-items: center;
    
`

export const HeaderBackground = styled.div`
    width: 90rem;
    height: 18.5rem;

   
    

`

export const ProfileHeaderContent = styled.div`
    position: relative;
    width: 54rem;
    height: 13.25rem;
    background-color: ${(props) => props.theme['base-profile']};
    display: flex;
    justify-content: flex-start;
   
    padding: 2rem;
    gap: 2rem;
    margin-top: calc(0px - 5.5rem);

    border-radius: 10px;

    img{
        border-radius: 8px;
    }
    


`

export const ProfileSummaryContainer = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
    
`

export const ProfileNamePlusLink = styled.h1`
    width: 38.25rem;
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
   
    

`


export const ProfileSummary = styled.article`
    width: 38.25rem;
    display: flex;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
    


`
export const ProfileName = styled.p`
    display: flex;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    font-weight: bold;
    
`
export const GithubLink = styled.span`
    display: flex;
    font-size: 0.75rem;
    color: ${(props) => props.theme['blue']};

    a{
        color: ${(props) => props.theme['blue']};
    }
    
`


export const ProfileIconsContainer = styled.span`
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