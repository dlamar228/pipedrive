import { useRouter } from 'next/router'
import useSdk from "./useSdk";
import {SdkContextProvider} from "./sdk";
import {useSession} from "next-auth/react";


const Test = () =>{
    //const sdk = useSdk();
    const router = useRouter();
    const sessions = useSession();
    return(
     <div>{router.query}</div>
    )
}


export const Example = () =>{
    const router = useRouter();
    return(
        <SdkContextProvider id={router.query.id || 1}>
            <Test/>
        </SdkContextProvider>
    )
}