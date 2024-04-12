export interface User {
    _id:string,
    name:string,
    email:string,
    accesstoken:string,
    role:'admin' | 'association' | 'player'
}


export interface Bingo {
    _id: string,
    name:string,
    gameDay: string;
    time: string;
    startDate:string;
    endDate:string;
    association: string;
    ticketPrice: string;
    donation: string;
    status: string;
    prices:string;
    createdAt:string;
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
    _id: string;
    createdAt:string
    totalTicket: string;
    ticketPrice: string;
    totalSold: string;
    revenue: string;
    availableTickets: string;
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
    getGoogleRegisterAuthStatus:ApiStatus
    getGoogleLoginAuthStatus:ApiStatus
    getFacebookAuthStatus:ApiStatus
    loginError:any,
    registerError:any
    logoutError:any;
    refreshError:any;
    googleLoginAuthError:any
    googleRegisterAuthError:any
    facebookAuthError:any

    
}


export interface BingoState {
    bingos:Bingo[]
    associationBingos:Bingo[]
    bingo:Bingo,
    getAssociationBingoStatus:ApiStatus
    getAssociationBingoError:any
    getBingosStatus: ApiStatus,
    getBingoStatus: ApiStatus,
    addBingoStatus: ApiStatus,
    deleteBingoStatus: ApiStatus,
    updateBingoStatus: ApiStatus,
    getBingosError: any,
    getBingoError: any,
    addBingoError: any,
    deleteBingoError: any,
    updateBingoError: any,
}



export interface GroupedResult {
    _id:string,
    associationId: string;
    ownerEmail: string;
    date: string;
    time:string;
    ticketCount: number;
    totalPrice: number;
  }

export interface Ticket {
    _id: string;
    ownerName: string;
    ownerEmail: string;
    association: User;
    bingo:Bingo;
    ticketNumber: string;
    ticketPrice: string;
    transactionNumber: string;
    createdAt: string;
  }

export interface PaymentHistory {
    _id:string;
    purchaser:string;
    ticket:Ticket,
    transactionNumber:string;
    numberOfTickets:string;
    createdAt:string;
}

export interface Winner {
    _id: string;
    name:string;
    dateWon: string; 
    price: number;
  }