import { useRouter } from 'next/router'
import useSdk from "./useSdk";
import {SdkContextProvider} from "./sdk";
import {useSession} from "next-auth/react";


const Test = () =>{
    //const sdk = useSdk();
    const router = useRouter();
    const sessions = useSession();

    return(
     <div>
         router:
         {   Object.entries(router.query)
             .map( ([key,value]) => `${key}: ${value}`)
             .map(item => <div>{item}</div>)
         }

         sessions:
         {   Object.entries(sessions.data || {})
             .map( ([key,value]) => `${key}: ${value}`)
             .map(item => <div>{item}</div>)
         }
     </div>
    )
}


export const Example = () =>{
    const router = useRouter();
    return(
        <SdkContextProvider id={router.query.id}>
            <Test/>
        </SdkContextProvider>
    )
}