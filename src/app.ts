// import { MailerSend, EmailParams, Sender, Recipient } from '../node_modules/mailer-send-ts'

var number: number = 1
let string: string

function sum(a: number, b: number): number {
    return a + b
}

const multiply = (a: number, b: number) => a * b

// const sendEmail = async ({
//     email,
//     name,
//     emailClient,
//     nameClient,
//     subject,
//     content
// }: {
//     email: string
//     name: string
//     emailClient: string
//     nameClient: string
//     subject: string
//     content: string
// }) => {
//     const mailerSend = new MailerSend({ apiKey: '1234566789' })

//     const sentFrom = new Sender(email, name)

//     const recipients = [new Recipient(emailClient, nameClient)]

//     const emailParams = new EmailParams()
//         .setFrom(sentFrom)
//         .setTo(recipients)
//         .setSubject(subject)
//         .setText(content)

//     const res = await mailerSend.email.send(emailParams)
//     return res
// }

function waitAndDo(callback: (param: string) => void) {
    return setTimeout(() => callback('Hello'), 1000)
}

class Say {
    sayHi(name: string) {
        console.info('Hello, ', name)
    }
}
