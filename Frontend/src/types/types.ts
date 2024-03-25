export interface Bingo {
    id:string,
    date:string;
    time:string;
    association:string;
    firstPrice:string;
    donation:string;
    status:string;
    ticketPrice:string;
}

export interface BingoGroup {
    id:string;
    association:string
    numberOfTickets:string;
    ticketPrice:string;
    prizes:string;
    biggestPrize:string;
    category:string;
}