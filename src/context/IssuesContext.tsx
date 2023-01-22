import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface IssuesContextType {
     issues: IssuesProps[]
     
}

interface IssuesProviderProps{
    children: React.ReactNode;
}

 interface IssuesProps {
    id: string
    number: number
    title: string
    body: string
 }

export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesProvider( {children} : IssuesProviderProps ) {

    const [issues, setIssues] = useState<IssuesProps[]>([])

   

    useEffect(() => {
        

        
         async function getIssue() {

        

        const response = await api.get('issues')

        

        setIssues(response.data);
        console.log(response.data)


    }
        getIssue();
        

        
        }
    , []);


    return(
        <IssuesContext.Provider value={{issues}}>
            {children}
        </IssuesContext.Provider>
    )

}