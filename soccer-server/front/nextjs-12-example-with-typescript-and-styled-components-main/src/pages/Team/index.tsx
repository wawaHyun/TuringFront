import { NextPage } from "next";
import axios from "axios";

// interface Props{data : {title:string};}

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import TeamList from "app/api/team/module/team-list";

const TeamPage: NextPage = ({ data }: any) => {

    return <TeamList />;
}

export async function getServersideProps() {

    const queryClient = new QueryClient()

    const result = await fetch('https://api.github.com/repos/TanStack/query')
        .then((res) => res.json())

    return {
        props: {
            data: result
        },
    };

}

export default TeamPage;