import { Team } from "./team";

export interface TeamRepository {
  getAllTeams(): Promise<Team>;
}
