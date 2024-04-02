export interface User {
    _id:string,
    name:string,
    email:string,
    accesstoken:string,
}


export interface Bingo {
    id: string,
    date: string;
    time: string;
    association: string;
    firstPrice: string;
    donation: string;
    status: string;
    ticketPrice: string;
}

export interface BingoGroup {
    id: string;
    association: string
    numberOfTickets: string;
    ticketPrice: string;
    prizes: string;
    biggestPrize: string;
    category: string;
}

export interface Payment {
    id: string;
    ticketName: string;
    purchaser: string;
    tickets: string;
    bought: string;
    transaction: string;
    date: string;
    time: string;
}

export interface BingoHistory {
    id: string;
    createddate: string;
    createdtime: string;
    prize: string;
    target: string;
    price: string;
    drawdate: string;
    drawtime: string;
}

export interface TicketHistory {
    id: string;
    createddate: string;
    createdtime: string;
    totalTicket: string;
    ticketPrize: string;
    totalSold: string;
    revenue: string;
    avaiableTickets: string;
}

export interface PlayerTicket {
    id: string;
    ticketName: string;
    tickets: string;
    price: string;
    date: string;
    time: string;
}

export interface LoginForm {
    email:string,
    password:string
}

export interface RegisterForm {
    name:string,
    email:string,
    password:string,
    confirmPassword:string,
}

export enum ApiStatus {
    "loading",
    "ideal",
    "success",
    "error"
}

export interface AuthState {
    user:User,
    getRegisterStatus: ApiStatus,
    getLoginStatus: ApiStatus,
    getLogoutStatus: ApiStatus,
    getRefreshStatus: ApiStatus
    loginError:any,
    registerError:any
    logoutError:any;
    refreshError:any;
}