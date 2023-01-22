import styled from "styled-components";

export const SearchBarContainer = styled.div`
   margin-top: 1.125rem;
   margin-bottom: 3rem;

    input{
        width: 54rem;
        background: ${props => props.theme['base-input']};
        color: ${props => props.theme['base-text']};
        border: 1px solid ${props => props.theme['base-border']};
        border-radius: 6px;
        height: 3.125rem;
        padding: 0.5rem 1.25rem;

        &::placeholder {
            color: ${props => props.theme['base-label']};
        }
    }
`

