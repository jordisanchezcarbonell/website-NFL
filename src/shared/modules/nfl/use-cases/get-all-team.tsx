import { Team } from "../../../domain/entities/team/team";
import { TeamRepository } from "../../../../shared/domain/entities/team/team.repository";
import { UseCase } from "../../../../shared/domain/use-case";
import { TeamHttpRepository } from "../../../infra/repositories/team-http-repository";

export class GetAllTeams implements UseCase<Team> {
  private repository: TeamRepository;

  constructor() {
    this.repository = new TeamHttpRepository();
  }

  async execute(): Promise<Team> {
    return await this.repository.getAllTeams();
  }
}
