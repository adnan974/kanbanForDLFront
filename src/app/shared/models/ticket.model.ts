export class TicketModel{
  public title: string; 
  public description: string;
  public labels: string[];
  public ticketNumber: number; 
  public ticketStatus: string;

  constructor(
    title: string,
    ticketNumber: number,
    ticketStatus: string,
    description?: string,
    labels?: string[],
  ) {
    this.title = title;
    this.description = description || "";
    this.labels = labels || [];
    this.ticketNumber = ticketNumber;
    this.ticketStatus = ticketStatus;
  }

}