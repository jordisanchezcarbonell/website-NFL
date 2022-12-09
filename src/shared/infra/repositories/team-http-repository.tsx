import { apiConfig } from "../../../configuration/api-config";
import apiService from "../../services/remote/ApiService";

import { Team } from "../../domain/entities/team/team";
import { TeamRepository } from "../../domain/entities/team/team.repository";
import { TeamGetAllResponseDTO } from "../dtos/response/team-get.response-dto";

export class TeamHttpRepository implements TeamRepository {
  readonly http = apiService;

  // private apiUrl = apiConfig.API_URL;

  async getAllTeams(): Promise<Team> {
    const response = await this.http.get<TeamGetAllResponseDTO>(
      "http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams"
    );
    return response.data.sports;
  }
}
