import { json } from "@remix-run/node";
import nodeMailer from "nodemailer";

export async function action({request}) {
    const formData = await request.formData();
    const {name, email, country, contact, std, msg} = Object.fromEntries(formData.entries());
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            // user: process.env.MY_MAIL,
            user: "mohdahsanahsan1@gmail.com",
            // pass: process.env.PASS,
            pass: "wtaf rsag jtea nxqs",
        },
    });
    
    await transporter.sendMail({
        to: "mohdahsanahsan1@gmail.com",
        subject: `${name}`,
        text: `${msg} \n Contact: ${std}${contact} \n email address: ${email} \n Country ${country}`,
    })
    .then(()=> { return json({success: true}); })
    .catch((err)=> {
        console.log('Error to send', err);
        return json({success: false});
    });
}