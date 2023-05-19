import { useRouter } from 'next/router'
import useSdk from "./useSdk";
import {SdkContextProvider} from "./sdk";


const Test = () =>{
    const sdk = useSdk();

    return(
     <div>Example</div>
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