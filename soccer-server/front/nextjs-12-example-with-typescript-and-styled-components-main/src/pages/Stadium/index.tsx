import { NextPage } from "next";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import StadiumList from "app/api/stadium/module/stadium-list";
import { useEffect } from "react";
import { getStadiums, getStadiumsKey } from "app/api/stadium/service/stadium-service";


const StadiumPage:NextPage = ({data} : any) => {
    useEffect(()=>{
        console.log('MY-INFO : StadiumPage useEffect data is')
        console.log(JSON.stringify(data));
    },[])
    return <StadiumList/>;
}

export async function getServerSideProps(){

    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery(getStadiumsKey,getStadiums)
    const data = queryClient.getQueryData(getStadiumsKey);
    console.log('MY-INFO : StadiumPage SSR data is')
    console.log(JSON.stringify(data));
    
    return {
        props:{data},
    }
}
export default StadiumPage;