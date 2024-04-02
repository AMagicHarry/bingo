const RandomOrg = require('random-org');
const nodemailer = require('nodemailer');

const sendTicketEmail = async(recipientName, recipientEmail, ticket)=> {
    let transporter = nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        secure: false, 
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    let mailOptions = {
        from: "Ticket Sender",
        to: recipientEmail, 
        subject: 'Your Ticket Information', 
        text: `Hello ${recipientName},\n\nHere is your ticket information:\nTicket Number: ${ticket.ticketNumber}\n\nBest regards,`, 
        html: `<p>Hello ${recipientName},</p><p>Here is your ticket information:</p><p>Ticket Number: <b>${ticket.ticketNumber}</b></p><p>Best regards,</p>`, 
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Failed to send email:', error);
    }
}


// const random = new RandomOrg({ apiKey: process.env.GRID });

// const generateBingoColumn = async(min, max, n)=> {
//   const result = await random.generateIntegers({
//     min,
//     max,
//     n,
//     replacement: false 
//   });
//   return result.random.data.sort((a, b) => a - b);
// }


// const  generateBingoGrid =async()=> {
//   const grid = [];
//   const columnRanges = [[1, 15], [16, 30], [31, 45], [46, 60], [61, 75]];

//   for (let i = 0; i < columnRanges.length; i++) {
//     const [min, max] = columnRanges[i];
//     const n = i === 2 ? 4 : 5;
//     const columnNumbers = await generateBingoColumn(min, max, n);
//     if (i === 2) {
//       columnNumbers.splice(2, 0, 'FREE');
//     }
//     for (let j = 0; j < columnNumbers.length; j++) {
//       if (!grid[j]) grid[j] = [];
//       grid[j][i] = columnNumbers[j];
//     }
//   }

//   return grid;
// }





// function printGrid(grid) {
//   console.log('B  I  N  G  O');
//   grid.forEach(row => {
//     console.log(row.map(number => number.toString().padStart(4)).join(' '));
//   });
// }


// generateBingoGrid().then(grid => {
//   printGrid(grid);
// }).catch(error => {
//   console.error('Failed to generate the bingo grid:', error);
// });


const validatePassword = (password,next) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (!re.test(password)) {
    return next({ message: 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.' });
  }
};

module.exports = {
    sendTicketEmail,
    // generateBingoGrid,
    validatePassword
}
