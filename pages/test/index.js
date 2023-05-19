import SurfaceSDK, { Command, Modal } from '@pipedrive/app-extensions-sdk';
import {useEffect} from "react";

const sdk = SurfaceSDK();

export default function Home() {
    useEffect(async()=>{
        sdk.initialize({ size: { height: 300,width:300 } });
    },[]);

    return (
        <>
           <div>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
        </>
    )
}
