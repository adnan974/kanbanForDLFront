export class TicketModel {
  public title: string;
  public description!: string;
  public labels!: string[];
  public ticketNumber: number;
  public ticketStatus: string;
  public owner: string;

  constructor(
    title: string,
    description: string,
    labels: string[],
    ticketNumber: number,
    ticketStatus: string,
    owner: string,
  ) {
    this.title = title;
    this.description = description;
    this.labels = labels;
    this.ticketNumber = ticketNumber;
    this.ticketStatus = ticketStatus;
    this.owner = owner;
  }
}