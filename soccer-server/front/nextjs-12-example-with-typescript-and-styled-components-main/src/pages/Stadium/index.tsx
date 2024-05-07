import { NextPage } from "next";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import StadiumList from "app/api/stadium/module/stadium-list";


const StadiumPage:NextPage = ({data} : any) => {
    return <StadiumList/>;
}

export async function getServerSideProps(){

    const queryClient = new QueryClient();
    const result = await fetch('https://api.github.com/repos/TanStack/query')
    return {
        props: {
            data: {data: result},
        },
    };
}

export default StadiumPage;