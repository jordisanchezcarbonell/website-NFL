import { NoticiaIAPI, Team } from "./team";

export interface TeamRepository {
  getAllTeams(): Promise<NoticiaIAPI[]>;
}
