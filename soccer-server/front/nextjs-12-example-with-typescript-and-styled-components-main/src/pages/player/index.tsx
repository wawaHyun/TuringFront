import PlayerList from "app/player/module/player-list";
import { NextPage } from "next";

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'


const PlayerPage: NextPage = ({ data }: any) => {

    return <PlayerList />
}


export async function getServerSideProps() {
    const queryClient = new QueryClient()

    const result = await fetch('https://api.github.com/repos/TanStack/query')
    


    return {
        props: {
            data: result},
    };
}

export default PlayerPage