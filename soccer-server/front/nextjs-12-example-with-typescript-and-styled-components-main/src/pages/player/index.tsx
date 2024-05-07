import { NextPage } from "next";

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import PlayerList from "app/api/player/module/player-list";
import { getNo2Dsl, getNo2DslKey } from "app/api/player/service/player-service";
import { useEffect } from "react";


const PlayerPage: NextPage = ({ data }: any) => {

    useEffect(( )=>{
        console.log('my-info : PlayerPage SSR data is ')
        console.log(JSON.stringify(data))
    },[])

    return <PlayerList />
    


}


export async function getServerSideProps() {

    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(getNo2DslKey, getNo2Dsl)
    const data = queryClient.getQueryData(getNo2DslKey)

    console.log('my-info : PlayerPage SSR data is ')
    console.log(JSON.stringify(data))
        
    return {
        props: { data },
    };
}

export default PlayerPage