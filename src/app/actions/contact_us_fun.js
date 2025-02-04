"use server";

import ContactFormEmail from "@/components/email-template/ContactFormEmail";
import { gettingAccessToken } from "@/lib/access_token_fun";
import { mailsendfunction } from "@/lib/mailsend_fun";

import { render } from "@react-email/components";

export async function contactFunction(data) {
  try {
    const { name, phone, email, message } = data;

    const token = await gettingAccessToken({
      ClientId: process.env.CLIENT_ID,
      ClientSecret: process.env.CLIENT_SECRET,
      TenantID: process.env.TENANT_ID,
    });
    const accessToken = token.message.access_token;

    const emailHtml = await render(
      ContactFormEmail({
        name,
        email,
        phone,
        message,
      })
    );

    const emailPayload = {
      message: {
        subject: "New Contact Form Submission",
        body: {
          contentType: "HTML",
          content: emailHtml,
        },
        toRecipients: [
          {
            emailAddress: {
              address: process.env.ADMIN_EMAIL,
            },
          },
        ],
      },
      saveToSentItems: false,
    };
    const response = await mailsendfunction(emailPayload, accessToken);
    if (response.status === 200) {
      return {
        status: 200,
        message:
          "We received your message successfully. Our team will get back to you soon.",
        success: true,
      };
    } else {
      return {
        status: 500,
        message: response.message,
        success: false,
      };
    }
  } catch (error) {
    console.error("Email error:", error);
    return {
      success: false,
      message:
        "An error occurred. Sorry for the inconvenience. Please try again.",
    };
  }
}
