import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Button,
} from "@react-email/components";

const ContactFormEmail = ({ name, email, phone, message }) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={heading}>✨ New Message Received</Heading>
        </Section>

        <Section style={content}>
          <Text style={paragraph}>
            You've received a new contact form submission:
          </Text>

          <Hr style={divider} />

          <Section style={detailSection}>
            <Text style={detailLabel}>From:</Text>
            <Text style={detailValue}>{name}</Text>

            <Text style={detailLabel}>Email:</Text>
            <Text style={detailValue}>{email}</Text>

            <Text style={detailLabel}>Phone:</Text>
            <Text style={detailValue}>{phone || "Not provided"}</Text>
          </Section>

          <Hr style={divider} />

          <Text style={messageLabel}>Message:</Text>
          <Text style={messageContent}>{message}</Text>
        </Section>

        <Section style={footer}>
          <Text style={footerText}>
            Sent via your website contact form •{" "}
            {new Date().toLocaleDateString()}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Styling
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  borderRadius: "12px",
  boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
  maxWidth: "600px",
};

const header = {
  padding: "25px 30px",
  background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
};

const heading = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "600",
  margin: "0",
  lineHeight: "1.4",
};

const content = {
  padding: "30px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#525f7f",
  margin: "0 0 20px 0",
};

const divider = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const detailSection = {
  margin: "15px 0",
};

const detailLabel = {
  color: "#6b7280",
  fontSize: "14px",
  fontWeight: "500",
  margin: "8px 0 4px 0",
};

const detailValue = {
  color: "#1f2937",
  fontSize: "16px",
  margin: "0 0 12px 0",
  fontWeight: "500",
};

const messageLabel = {
  ...detailLabel,
  marginTop: "20px",
};

const messageContent = {
  backgroundColor: "#f8f9fa",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  color: "#374151",
  lineHeight: "1.6",
};

const footer = {
  padding: "0 30px",
  textAlign: "center",
};

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  margin: "20px 0 0 0",
};

export default ContactFormEmail;
