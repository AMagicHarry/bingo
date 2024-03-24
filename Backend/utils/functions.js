export async function processPayment(paymentInfo) {
    return { success: true };
}

export async function sendTicketEmail(recipientEmail, ticket) {
    console.log(`Sending email to ${recipientEmail} for ticket ${ticket.ticketNumber}`);
}