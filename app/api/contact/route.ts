import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactRequest = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Missing Resend environment variables.");

      return NextResponse.json(
        {
          success: false,
          message: "Email configuration is incomplete.",
        },
        { status: 500 },
      );
    }

    const body = (await request.json()) as ContactRequest;

    const name = normalize(body.name);
    const company = normalize(body.company);
    const email = normalize(body.email).toLowerCase();
    const phone = normalize(body.phone);
    const service = normalize(body.service);
    const message = normalize(body.message);
    const website = normalize(body.website);

    // Honeypot spam protection
    if (website) {
      return NextResponse.json({
        success: true,
        message: "Inquiry submitted successfully.",
      });
    }

    if (!name || !company || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid business email address.",
        },
        { status: 400 },
      );
    }

    if (name.length > 100 || company.length > 150) {
      return NextResponse.json(
        {
          success: false,
          message: "One or more fields exceed the permitted length.",
        },
        { status: 400 },
      );
    }

    if (message.length < 20 || message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please provide between 20 and 5,000 characters in your requirements.",
        },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New CoreViaSupport inquiry — ${company}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New CoreViaSupport Inquiry</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background: #f7f3f1;
              color: #201a16;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            <div style="padding: 32px 16px;">
              <div
                style="
                  max-width: 680px;
                  margin: 0 auto;
                  overflow: hidden;
                  border: 1px solid #e7ddd8;
                  border-radius: 20px;
                  background: #ffffff;
                "
              >
                <div
                  style="
                    padding: 28px;
                    background: #201a16;
                    color: #ffffff;
                  "
                >
                  <p
                    style="
                      margin: 0 0 10px;
                      color: #f3aab6;
                      font-size: 12px;
                      font-weight: 700;
                      letter-spacing: 1px;
                      text-transform: uppercase;
                    "
                  >
                    Website Inquiry
                  </p>

                  <h1
                    style="
                      margin: 0;
                      color: #ffffff;
                      font-size: 26px;
                      line-height: 1.3;
                    "
                  >
                    New operational support inquiry
                  </h1>
                </div>

                <div style="padding: 28px;">
                  <table
                    role="presentation"
                    width="100%"
                    cellspacing="0"
                    cellpadding="0"
                    style="border-collapse: collapse;"
                  >
                    <tr>
                      <td
                        style="
                          width: 150px;
                          padding: 12px 0;
                          border-bottom: 1px solid #eee5e1;
                          color: #6a625c;
                          font-size: 14px;
                        "
                      >
                        Name
                      </td>

                      <td
                        style="
                          padding: 12px 0;
                          border-bottom: 1px solid #eee5e1;
                          color: #201a16;
                          font-size: 14px;
                          font-weight: 700;
                        "
                      >
                        ${safeName}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          width: 150px;
                          padding: 12px 0;
                          border-bottom: 1px solid #eee5e1;
                          color: #6a625c;
                          font-size: 14px;
                        "
                      >
                        Company
                      </td>

                      <td
                        style="
                          padding: 12px 0;
                          border-bottom: 1px solid #eee5e1;
                          color: #201a16;
                          font-size: 14px;
                          font-weight: 700;
                        "
                      >
                        ${safeCompany}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          width: 150px;
                          padding: 12px 0;
                          border-bottom: 1px solid #eee5e1;
                          color: #6a625c;
                          font-size: 14px;
                        "
                      >
                        Email
                      </td>

                      <td
                        style="
                          padding: 12px 0;
                          border-bottom: 1px solid #eee5e1;
                          color: #201a16;
                          font-size: 14px;
                          font-weight: 700;
                        "
                      >
                        ${safeEmail}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          width: 150px;
                          padding: 12px 0;
                          border-bottom: 1px solid #eee5e1;
                          color: #6a625c;
                          font-size: 14px;
                        "
                      >
                        Phone
                      </td>

                      <td
                        style="
                          padding: 12px 0;
                          border-bottom: 1px solid #eee5e1;
                          color: #201a16;
                          font-size: 14px;
                          font-weight: 700;
                        "
                      >
                        ${safePhone}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          width: 150px;
                          padding: 12px 0;
                          color: #6a625c;
                          font-size: 14px;
                        "
                      >
                        Service
                      </td>

                      <td
                        style="
                          padding: 12px 0;
                          color: #c21e3a;
                          font-size: 14px;
                          font-weight: 700;
                        "
                      >
                        ${safeService}
                      </td>
                    </tr>
                  </table>

                  <div
                    style="
                      margin-top: 24px;
                      padding: 20px;
                      border-left: 4px solid #c21e3a;
                      border-radius: 12px;
                      background: #fbf4f2;
                    "
                  >
                    <p
                      style="
                        margin: 0 0 10px;
                        color: #c21e3a;
                        font-size: 12px;
                        font-weight: 700;
                        letter-spacing: 0.5px;
                        text-transform: uppercase;
                      "
                    >
                      Operational Requirements
                    </p>

                    <p
                      style="
                        margin: 0;
                        color: #514a45;
                        font-size: 14px;
                        line-height: 1.8;
                      "
                    >
                      ${safeMessage}
                    </p>
                  </div>

                  <p
                    style="
                      margin: 24px 0 0;
                      color: #7b726c;
                      font-size: 12px;
                      line-height: 1.6;
                    "
                  >
                    Reply directly to this email to respond to ${safeName}.
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "We could not send your inquiry. Please email us directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while submitting your inquiry. Please try again.",
      },
      { status: 500 },
    );
  }
}