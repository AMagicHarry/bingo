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

export interface Payment {
    id:string;
    purchaser:string
    tickets:string;
    bought:string;
    transaction:string;
    date:string;
    time:string;
}