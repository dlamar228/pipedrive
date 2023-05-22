import { useRouter } from 'next/router'
import useSdk from "./useSdk";
import {SdkContextProvider} from "./sdk";
import {signIn, signOut, useSession} from "next-auth/react";
import {getToken} from "next-auth/jwt";
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
             Router:
             {
                 Object.entries(router.query)
                 .map( ([key,value]) => `${key}: ${value}`)
                 .map(item => <div>{item}</div>)
             }
         </div>

        <div>
            Sessions:
            {
                Object.entries(sessions.data || {})
                .map( ([key,value]) => `${key}: ${value}`)
                .map(item => <div>{item}</div>)
            }
        </div>

         <div>
             Response:
             {
                 Object.entries(response || {})
                 .map( ([key,value]) => `${key}: ${value}`)
                 .map(item => <div>{item}</div>)
             }
         </div>

         <button onClick={async ()=>{
             let url = process.env.DOMAIN+process.env.BASE_PATH+"/api/test"
             let result = await fetch(url,{method: 'GET',}).then(res => res.json());
             console.log(result)
             setResponse(result)
             // const res = await client.addDeal(data);
             // console.log(res)
             // setResponse(res);

         }}>Press me</button>
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