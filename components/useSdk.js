import { useContext } from 'react';
import { SdkContext } from './sdk';

export default function useSdk() {
    return useContext(SdkContext);
}