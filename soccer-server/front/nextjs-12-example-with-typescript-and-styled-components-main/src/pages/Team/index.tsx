import { NextPage } from "next";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'
import { getAllTeamsDsl, getAllTeamsDslKey } from "app/api/team/service/team-service";
import { useEffect } from "react";

import TeamList from "app/api/team/module/team-list";

const TeamPage: NextPage = ({ data }: any) => {
    useEffect(() => {
        console.log('MY-INFO : TeamPage useEffect data is : ', JSON.stringify(data))
    }, []);


    return <TeamList />;
}

export async function getServerSideProps() {

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(getAllTeamsDslKey, getAllTeamsDsl);
    const data = queryClient.getQueryData(getAllTeamsDslKey);
    console.log('MY-INFO : useEffect before: TeamPage SSR data is');
    console.log(JSON.stringify(data));

    return {
        props: { data },
    };

}

export default TeamPage;