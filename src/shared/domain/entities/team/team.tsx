export interface TeamProps {
  leagues: EmpresaObjectIAPI;
}
export interface EmpresaObjectIAPI {
  name: string;
  abbreviation: string;
  teams: Array<NoticiaIAPI>;
}
export interface NoticiaIAPI {
  id: number;
  uid: string;
  location: string;
  name: string;
  nickname: string;
  abbreviation: string;
  color: string;
  altColor: string;
  logo: string;
  wordMark: string;
}

export class Team {
  leagues: EmpresaObjectIAPI;

  constructor(props: TeamProps) {
    this.leagues = props.leagues;
  }

  public static create(props: TeamProps): Team {
    console.log(props);
    return new Team(props);
  }
}
