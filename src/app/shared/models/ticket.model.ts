export class TicketModel{
  public title: string; 
  public description: string;
  public labels: string[];
  public ticketNumber: number; 
  public ticketStatus: string;
  public associatedDashboard: string;
  public associatedColumn: string;

  constructor(
    title: string,
    ticketNumber: number,
    ticketStatus: string,
    associatedDashboard: string,
    associatedColumn: string,
    description?: string,
    labels?: string[],
  ) {
    this.title = title;
    this.description = description || "";
    this.labels = labels || [];
    this.ticketNumber = ticketNumber;
    this.ticketStatus = ticketStatus;
    this.associatedDashboard = associatedDashboard;
    this.associatedColumn = associatedColumn;
  }

}