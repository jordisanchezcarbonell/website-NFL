import { Serializable } from "../../../../interfaces/serializable";

export interface TeamProps {
  sports: Array<{ id: string; uid: string; name: string; slug: string }>;
}
export interface EmpresaObjectIAPI {
  teams: Array<NoticiaIAPI>;
}
export interface NoticiaIAPI {
  team: {
    id: number;
    uid: string;
    location: string;
    name: string;
    nickname: string;
    abbreviation: string;
    color: string;
    altColor: string;
    logos: Array<{
      href: string;
    }>;
    wordMark: string;
  };
}

export interface MonthlyConsumptionDataAPII {
  datos: {
    sports: Array<{ id: string; uid: string; name: string; slug: string }>;
  };
}

export class Team implements Serializable<Team> {
  teams: Array<NoticiaIAPI> = [];
  deserialize(input: EmpresaObjectIAPI): Team {
    console.log("11111111,", input);
    if (!input) {
      return this;
    }

    this.teams = input.teams;

    return this;
  }
}
