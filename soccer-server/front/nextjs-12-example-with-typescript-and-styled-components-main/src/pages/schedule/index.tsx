import { NextPage } from "next";

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import ScheduleList from "app/schedule/module/schedule-list";


const SchedulePage: NextPage = ({ data }: any) => {

    return <ScheduleList />
}


export async function getServerSideProps() {
    const queryClient = new QueryClient()

    const result = await fetch('https://api.github.com/repos/TanStack/query')
    


    return {
        props: {
            data: result},
    };
}

export default SchedulePage