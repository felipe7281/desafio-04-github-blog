
import {  HeaderBackground, HeaderContainer} from "./types";

import { ProfileArea } from "../ProfileArea";



export function Header() {


    return(
        <><HeaderContainer>

            <HeaderBackground>
                <img src={"src/assets/cover.png"} width={1440} height={296}></img>
                
            </HeaderBackground>
            
        </HeaderContainer>
        
    </>)
}