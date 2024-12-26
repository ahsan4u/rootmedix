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
    try {
        await transporter.sendMail({
            to: "mohdahsanahsan1@gmail.com",
            subject: `${name}`,
            html: `<div style="display:flex;">
                    <div style="margin-right:4px;">
                        <p style="margin:7px;">Name:</p>
                        <p style="margin:7px;">Contact: </p>
                        <p style="margin:7px;">Email:</p>
                        <p style="margin:7px;">Country:</p>
                    </div>
                    <div>
                        <p style="margin:7px;">${name}</p>
                        <p style="margin:7px;">${std} ${contact}</p>
                        <p style="margin:7px;">${email}</p>
                        <p style="margin:7px;">${country}</p>
                    </div>
                </div>
                <p style="margin:7px;">Massage...</p>
                <pre style="margin: 0; font-size:17px;border-radius:10px;border:1px solid black;padding:5px;">${msg}</pre>`,
        })
        return json({success: true});

    } catch (error) {
        console.log('Error to send', err);
        return json({success: false});
    }
}