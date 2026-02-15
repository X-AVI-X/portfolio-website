import { NextResponse } from "next/server";
import dns from "node:dns";

// Fix for ETIMEDOUT: Force IPv4 over IPv6 for DNS resolution
// This prevents Node.js from hanging on unreachable IPv6 addresses (common with Telegram API)
dns.setDefaultResultOrder("ipv4first");

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Validate basic fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.error("Telegram environment variables are missing");
            return NextResponse.json(
                { error: "Server configuration error" },
                { status: 500 }
            );
        }

        const text = `
🚀 *New Contact Form Submission*

👤 *Name:* ${name}
📧 *Email:* ${email}
📝 *Message:*
${message}

---
Sent from your portfolio website.
        `.trim();

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const response = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: "Markdown",
                }),
                signal: controller.signal,
            }
        );
        clearTimeout(timeoutId);

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Telegram API error:", errorData);
            return NextResponse.json(
                { error: "Failed to send message to Telegram" },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
