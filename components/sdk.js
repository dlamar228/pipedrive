import React, { useState, createContext, useEffect } from 'react';
import SurfaceSDK from '@pipedrive/app-extensions-sdk';

const SdkContext = createContext({ sdk: null });

const SdkContextProvider = ({ id, children }) => {
    const [sdk, setSdk] = useState(null);

    useEffect(() => {
        const initialize = async () => {
            const sdk = new SurfaceSDK()

            await sdk.initialize();

            setSdk(sdk);
        }

        initialize().catch(console.error);
    }, [id]);

    return (
        <SdkContext.Provider value={sdk}>
            {children}
        </SdkContext.Provider>
    );
};


export { SdkContext, SdkContextProvider };