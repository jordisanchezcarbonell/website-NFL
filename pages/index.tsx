import Navbar from "../src/shared/presentation/components/molecules/Navbar";

import BannerHome from "../src/shared/presentation/components/molecules/Banner";
import CardTailwind from "../src/shared/presentation/components/atoms/cardTeam";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { GetAllTeams } from "../src/shared/modules/nfl/use-cases/get-all-team";

interface CommunityDetailPageProps {
  teams: any;
}

export default function Home(props: CommunityDetailPageProps) {
  console.log(props);
  const arrayTest = Array.from(Array(10).keys());
  return (
    <div className="container mx-auto">
      <Navbar />
      <BannerHome />
      <div className="container flex m-auto w-full flex-wrap ">
        {arrayTest.map((x) => (
          <CardTailwind key={x} />
        ))}
      </div>
    </div>
  );
}
export async function getServerSideProps(
  Props: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> {
  const teams = await new GetAllTeams().execute();
  return {
    props: {
      teams: teams,
    },
  };
}
