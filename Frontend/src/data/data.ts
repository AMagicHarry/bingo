import { Bingo, BingoGroup, BingoHistory, TicketHistory, Payment, PlayerTicket } from "../types/types";

export const bingos: Bingo[] = [
    {
        id: "1",
        date: "Mar 7, 2024",
        time: "10:41pm",
        association: 'Football club',
        donation: "3000",
        firstPrice: "Game Tickets",
        status: 'Play',
        ticketPrice: "10"
    },
    {
        id: "2",
        date: "Dec 11, 2024",
        time: "10:41pm",
        association: 'Tennis club',
        donation: "9000",
        firstPrice: "Car",
        status: 'Starting',
        ticketPrice: "20"
    },
    {
        id: "3",
        date: "Mar 7, 2024",
        time: "10:41pm",
        association: 'Tennis Club',
        donation: "9000",
        firstPrice: "Club tour",
        status: 'Play',
        ticketPrice: "100"
    },
    {
        id: "4",
        date: "Apr 22, 2024",
        time: "8:00pm",
        association: 'Chess Club',
        donation: "1500",
        firstPrice: "Chess Set",
        status: 'Finished',
        ticketPrice: "5"
    },
    {
        id: "5",
        date: "Jun 15, 2024",
        time: "9:30pm",
        association: 'Book Club',
        donation: "2000",
        firstPrice: "Signed Books",
        status: 'Play',
        ticketPrice: "15"
    },
    {
        id: "6",
        date: "Sep 1, 2024",
        time: "7:45pm",
        association: 'Art Club',
        donation: "5000",
        firstPrice: "Art Supplies",
        status: 'Finished',
        ticketPrice: "25"
    },
    {
        id: "7",
        date: "Nov 23, 2024",
        time: "6:30pm",
        association: 'Music Club',
        donation: "7500",
        firstPrice: "Concert Tickets",
        status: 'Starting',
        ticketPrice: "30"
    },
    {
        id: "8",
        date: "May 20, 2024",
        time: "5:00pm",
        association: 'Gardening Club',
        donation: "2500",
        firstPrice: "Gardening Kit",
        status: 'Finished',
        ticketPrice: "12"
    },
    {
        id: "9",
        date: "Jul 4, 2024",
        time: "8:00pm",
        association: 'Cycling Club',
        donation: "4000",
        firstPrice: "Bike",
        status: 'Play',
        ticketPrice: "20"
    },
    {
        id: "10",
        date: "Aug 15, 2024",
        time: "9:00pm",
        association: 'Photography Club',
        donation: "3000",
        firstPrice: "Camera",
        status: 'Finished',
        ticketPrice: "50"
    },
    {
        id: "11",
        date: "Oct 5, 2024",
        time: "7:00pm",
        association: 'Yoga Club',
        donation: "2000",
        firstPrice: "Yoga Retreat",
        status: 'Play',
        ticketPrice: "35"
    },
    {
        id: "12",
        date: "Jan 12, 2025",
        time: "6:00pm",
        association: 'Cooking Club',
        donation: "4500",
        firstPrice: "Cooking Class",
        status: 'Finished',
        ticketPrice: "40"
    },
    {
        id: "13",
        date: "Feb 14, 2025",
        time: "8:00pm",
        association: 'Film Club',
        donation: "3500",
        firstPrice: "Movie Premiere Tickets",
        status: 'Play',
        ticketPrice: "18"
    },
    {
        id: "14",
        date: "Mar 30, 2025",
        time: "10:00pm",
        association: 'Dance Club',
        donation: "6000",
        firstPrice: "Dance Lessons",
        status: 'Finished',
        ticketPrice: "22"
    }
];

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

export const bingohistorys: BingoHistory[] = [
    {
        id: "1",
        createddate: "Feb 27, 2024",
        createdtime: "01:55 pm",
        prize: "Bicycle",
        target: "3000$",
        price: "14$",
        drawdate: "Dec 11, 2024",
        drawtime: "01:09 am"
    },
    {
        id: "2",
        createddate: "Oct 28, 2024",
        createdtime: "11:55 pm",
        prize: "Iphone 13",
        target: "10000$",
        price: "80$",
        drawdate: "May 14, 2024",
        drawtime: "05:39 am"
    },
    {
        id: "3",
        createddate: "Dec 5, 2024",
        createdtime: "03:48 pm",
        prize: "Car",
        target: "50000$",
        price: "100$",
        drawdate: "Oct 2, 2024",
        drawtime: "06:29 am"
    },
    {
        id: "4",
        createddate: "May 30, 2024",
        createdtime: "01:35 pm",
        prize: "Painted Art",
        target: "7000$",
        price: "30$",
        drawdate: "Finished",
        drawtime: "Finished"
    }
]

export const tickethistorys: TicketHistory[] = [
    {
        id: "1",
        createddate: "Jan 11, 2024",
        createdtime: "11:27 pm",
        totalTicket: "190",
        ticketPrize: "15$",
        totalSold: "144",
        revenue: "1260$",
        avaiableTickets: "156"
    },
    {
        id: "2",
        createddate: "Jan 22, 2024",
        createdtime: "01:27 pm",
        totalTicket: "100",
        ticketPrize: "50$",
        totalSold: "68",
        revenue: "3400$",
        avaiableTickets: "156"
    },
    {
        id: "3",
        createddate: "Jan 11, 2024",
        createdtime: "11:27 pm",
        totalTicket: "200",
        ticketPrize: "20$",
        totalSold: "171",
        revenue: "3420$",
        avaiableTickets: "156"
    },
    {
        id: "4",
        createddate: "Mar 28, 2024",
        createdtime: "07:38 pm",
        totalTicket: "50",
        ticketPrize: "30$",
        totalSold: "50",
        revenue: "1500$",
        avaiableTickets: "No"
    }
]