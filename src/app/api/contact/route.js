import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import getGoogleAuth from "../../utils/auth";

export async function POST(req, res) {
  const { firstName, lastName, email, service, message, phoneNumber } = await req.json();
  if (!firstName || !lastName || !email || !service || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  
  }
  try {
    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.SPREADSHEET_ID; 
    const range = "glint contact page!A:F";
    
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[firstName, lastName, email, service, message , phoneNumber]],
      },
    });
    
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const emailHTML = `
    <div style="text-align: center; font-family: Arial, sans-serif; padding: 20px;">
        <img src="https://res.cloudinary.com/dessvl8l8/image/upload/f_auto,q_auto/zrrbrgiph9iycaabzth1" alt="glint Logo" style="max-width: 120px;">
        <h2>Thank You for Reaching Out!</h2>
        <p>Hi ${firstName},</p>
        <p>We have received your message and one of our team members will get back to you shortly.</p>
        <p>If you have any urgent queries, feel free to reach us at <a href="mailto:glint4u@gmail.com">glint4u@gmail.com</a></p>
        <p><strong>Your Submitted Details:</strong></p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
        <div style="margin-top: 30px;">
        <a href="https://glint4u.tech" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visit Our Website</a>
        </div>
    </div>
`

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting us",
      html: emailHTML,
    });

    const devEmailHTML = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #000000;">
        <img src="https://res.cloudinary.com/dessvl8l8/image/upload/f_auto,q_auto/zrrbrgiph9iycaabzth1" alt="glint Logo" style="max-width: 120px;">
        <h2>New Contact Request</h2>
        <p>Hey there,</p>
        <p>You have a new message from the contact form on your website.</p>
        <p><strong>Details:</strong></p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Interested:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <div style="margin-top: 30px;">
        <a href="https://glint4u.tech" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visit Our Website</a>
        </div>
    </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "glint4u@gmail.com",
      subject: "New Contact Request from Website",
      html: devEmailHTML,
    });


    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
