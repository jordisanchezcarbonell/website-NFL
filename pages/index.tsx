import Navbar from "../src/shared/presentation/components/molecules/Navbar";

import BannerHome from "../src/shared/presentation/components/molecules/Banner";
import CardTailwind from "../src/shared/presentation/components/atoms/cardTeam";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { GetAllTeams } from "../src/shared/modules/nfl/use-cases/get-all-team";
import { NoticiaIAPI } from "../src/shared/domain/entities/team/team";

interface CommunityDetailPageProps {
  teams: any;
}

export default function Home(props: CommunityDetailPageProps) {
  const { teams } = props;

  return (
    <div className="container mx-auto">
      <Navbar />
      <BannerHome />
      <div className="container flex m-auto w-full flex-wrap ">
        {teams.map((x: NoticiaIAPI) => (
          <CardTailwind
            key={x.team.id}
            nickname={x.team.nickname}
            logos={{
              href: x.team.logos[0].href,
            }}
          />
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
