import { useRouter } from 'next/router'
import useSdk from "./useSdk";
import {SdkContextProvider} from "./sdk";
import {signIn, signOut, useSession} from "next-auth/react";
import {ApiClient, DealsApi} from "pipedrive";
import {useState} from "react";


// https://popa.onrender.com/home/api/auth/callback/pipedrive
// https://popa.onrender.com/home/test

// http://localhost:3000/home/api/auth/callback/pipedrive
// http://localhost:3000/home/test

const Test = () =>{
    //const sdk = useSdk();
    const router = useRouter();
    const sessions = useSession();
    const [response, setResponse] = useState();

    //const defaultClient = new ApiClient();
    //defaultClient.authentications.api_key.apiKey = '8eb02561abd335a572b7f341c01aa1a306ee4c1e';

    //const client = new DealsApi(defaultClient);

    // const data = {
    //     title: 'Deal of the century',
    //     value: 10000,
    //     currency: 'USD',
    //     user_id: 14915273,
    //     person_id: null,
    //     org_id: 1,
    //     stage_id: 1,
    //     status: 'open',
    //     expected_close_date: '2024-02-11',
    //     probability: 60,
    //     lost_reason: null,
    //     visible_to: 1,
    //     add_time: '2023-05-20',
    // }
    //

    return(
     <div>
         <div>
             router:
             {
                 Object.entries(router.query)
                 .map( ([key,value]) => `${key}: ${value}`)
                 .map(item => <div>{item}</div>)
             }
         </div>

        <div>
            sessions:
            {
                Object.entries(sessions.data || {})
                .map( ([key,value]) => `${key}: ${value}`)
                .map(item => <div>{item}</div>)
            }
        </div>

         <div>
             response:
             {
                'NONE'
             }
         </div>

         {/*<button onClick={async ()=>{*/}
         {/*    const res = await client.addDeal(data);*/}
         {/*    console.log(res)*/}
         {/*    setResponse(res);*/}

         {/*}}>Press me</button>*/}
     </div>

    )
}

const Signup = () =>{
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user?.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }

    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}

export const Example = () =>{
    const router = useRouter();
    return(
        <SdkContextProvider id={router.query.id}>
            <Test/>
            <Signup/>
        </SdkContextProvider>
    )
}