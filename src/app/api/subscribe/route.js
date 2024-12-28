import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function POST(req, res) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    // Create transporter for sending email via Gmail
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Email HTML for the user
    const emailHTML = `
    <div style="text-align: center; font-family: Arial, sans-serif; padding: 20px;">
        <img src="https://res.cloudinary.com/dessvl8l8/image/upload/f_auto,q_auto/zrrbrgiph9iycaabzth1" alt="GLINT Logo" style="max-width: 120px;">
        <h2>Thank You for Subscribing!</h2>
        <p>Hi Subscriber,</p>
        <p>Thank you for subscribing to our newsletter!</p>
        <p>You will now be the first to know about any updates, offers, and events.</p>
        <p>If you have any questions, feel free to reach us at <a href="mailto:glint4u@gmail.com">glint4u@gmail.com</a></p>
        <p><strong>Stay tuned for exciting updates!</strong></p>
        <div style="margin-top: 30px;">
        <a href="https://glint4u.tech" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visit Our Website</a>
        </div>
    </div>
    `;

    // Send the email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for subscribing!",
      html: emailHTML,
    });

    // Save the subscription details to Google Sheets
    const auth = new google.auth.GoogleAuth({
      keyFile: "C:/Users/swabh/OneDrive/Desktop/Glint4u_Website/credentials.json", // Your path to credentials file
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.SPREADSHEET_ID; // Your spreadsheet ID
    const range = "subscription!A:B"; // Change the range according to your sheet layout

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email]],
      },
    });

    return NextResponse.json(
      { message: "Subscription successful, confirmation email sent." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
