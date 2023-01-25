
import {  HeaderBackground, HeaderContainer} from "./types";

import logoSrc from "../../assets/headerBg.svg" 
import logo from "../../assets/logo.svg" 



export function Header() {


    return(
        <>
        <HeaderContainer>

            <HeaderBackground>
                <img src={logoSrc} width={1440} height={296}></img>
                
                
            </HeaderBackground>
            
        </HeaderContainer>
        
    </>)
}