import { BingoGroup,Payment, PlayerTicket } from "../types/types";


export const playertickets: PlayerTicket[] = [
    {
        id: "1",
        ticketName: "Tenis Group",
        tickets: "3",
        price: "193$",
        date: "Dec 11, 2024",
        time: "01:09 am"
    },
    {
        id: "2",
        ticketName: "Volleyball Club",
        tickets: "2",
        price: "15$",
        date: "Dec 11, 2024",
        time: "01:09 am"
    },
    {
        id: "3",
        ticketName: "Football Club",
        tickets: "5",
        price: "105$",
        date: "Feb 1, 2024",
        time: "01:09 am"
    }
]

export const bingoGroups: BingoGroup[] = [
    {
        id: "1",
        association: 'Tennis Club',
        numberOfTickets: '180',
        prizes: '500$',
        ticketPrice: "10$",
        biggestPrize: "",
        category: "Association"
    },
    {
        id: "2",
        association: 'Tennis Club',
        numberOfTickets: '180',
        prizes: '500$',
        ticketPrice: "10$",
        biggestPrize: "",
        category: "Association"
    },
    {
        id: "3",
        association: 'Tennis Club',
        numberOfTickets: '180',
        prizes: '500$',
        ticketPrice: "10$",
        biggestPrize: "",
        category: "Association"
    },
    {
        id: "4",
        association: 'Tennis Club',
        numberOfTickets: '180',
        prizes: '500$',
        ticketPrice: "10$",
        biggestPrize: "",
        category: "Association"
    },
]

export const ticketPayments: Payment[] = [
    {
        id: "1",
        ticketName: "Tennis Gruop",
        purchaser: "Jacob Jones",
        tickets: "6",
        bought: "193$",
        transaction: "0x7a9ad74929509384...",
        date: "Dec 11, 2024",
        time: "01:09 am"
    },
    {
        id: "2",
        ticketName: "Tennis Gruop",
        purchaser: "Dianne Russell",
        tickets: "4",
        bought: "63$",
        transaction: "0x6c9ad723476409384...",
        date: "Dec 11, 2024",
        time: "01:09 am"
    },
    {
        id: "3",
        ticketName: "Tennis Gruop",
        purchaser: "Kathryn Murphy",
        tickets: "2",
        bought: "82$",
        transaction: "0xa3c5744c55643...",
        date: "Dec 11, 2024",
        time: "01:09 am"
    },
    {
        id: "4",
        ticketName: "Volleyball Club",
        purchaser: "Cody Fisher",
        tickets: "9",
        bought: "203$",
        transaction: "0x3d86de74347ce...",
        date: "Dec 11, 2024",
        time: "01:09 am"
    },
    {
        id: "5",
        ticketName: "Volleyball Club",
        purchaser: "Floyd Miles",
        tickets: "1",
        bought: "43$",
        transaction: "0x788a8533ff3...",
        date: "Dec 11, 2024",
        time: "01:09 am"
    }
]
