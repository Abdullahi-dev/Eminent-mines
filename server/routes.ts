import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSubscriberSchema } from "../shared/schema";
import { ZodError, z } from "zod";
import { sendEmail } from "./email";

export function registerRoutes(
  httpServer: Server,
  app: Express
): Server {
  // prefix all routes with /api

  // Newsletter subscribe
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const data = insertNewsletterSubscriberSchema.parse(req.body);
      const subscriber = await storage.subscribeToNewsletter(data);

      // Send email notification with proper error handling
      const toEmail = process.env.COMPANY_EMAIL || process.env.SMTP_USER || "";
      if (toEmail) {
        try {
          await sendEmail({
            to: toEmail,
            subject: "[EMRL] New Newsletter Subscriber",
            text: `Email: ${subscriber.email}`,
          });
          console.log("[Newsletter] Email notification sent successfully");
        } catch (error) {
          console.error("[Newsletter] Failed to send email notification:", error);
          // Don't fail the request if email fails - just log it
        }
      } else {
        console.warn("[Newsletter] No COMPANY_EMAIL or SMTP_USER configured for notifications");
      }

      res.json(subscriber);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid email address" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Booking request
  app.post("/api/booking", async (req, res) => {
    const schema = z.object({
      companyName: z.string().min(2),
      contactPerson: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(10),
      equipmentType: z.string().min(1),
      duration: z.string().min(1),
      startDate: z.string().min(1),
    });

    try {
      const v = schema.parse(req.body);
      const toEmail = process.env.COMPANY_EMAIL || process.env.SMTP_USER;
      if (!toEmail) throw new Error("Email not configured");
      
      // Send email notification with proper error handling
      try {
        await sendEmail({
          to: toEmail,
          subject: "[EMRL] New Equipment Booking Request",
          text: `Booking Request\n${JSON.stringify(v, null, 2)}`,
        });
        console.log("[Booking] Email notification sent successfully");
      } catch (error) {
        console.error("[Booking] Failed to send email notification:", error);
        // Don't fail the request if email fails - just log it
      }
      
      res.json({ ok: true });
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid booking data" });
      } else {
        res.status(500).json({ message: error?.message || "Email service error" });
      }
    }
  });

  // Registration
  app.post("/api/registration", async (req, res) => {
    const schema = z.object({
      fullName: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(10),
      membershipType: z.string().min(1),
      profession: z.string().min(2),
      yearsExperience: z.string().min(1),
    });

    try {
      const v = schema.parse(req.body);
      const toEmail = process.env.COMPANY_EMAIL || process.env.SMTP_USER;
      if (!toEmail) throw new Error("Email not configured");
      
      // Send email notification with proper error handling
      try {
        await sendEmail({
          to: toEmail,
          subject: "[EMRL] New Membership Registration",
          text: `Registration\n${JSON.stringify(v, null, 2)}`,
        });
        console.log("[Registration] Email notification sent successfully");
      } catch (error) {
        console.error("[Registration] Failed to send email notification:", error);
        // Don't fail the request if email fails - just log it
      }
      
      res.json({ ok: true });
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid registration data" });
      } else {
        res.status(500).json({ message: error?.message || "Email service error" });
      }
    }
  });

  // Application
  app.post("/api/application", async (req, res) => {
    const schema = z.object({
      fullName: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(10),
      dateOfBirth: z.string().min(1),
      gender: z.string().min(1),
      nationality: z.string().min(1),
      stateOfOrigin: z.string().min(1),
      program: z.string().min(1),
      education: z.string().min(1),
      institutionAttended: z.string().min(1),
      yearOfGraduation: z.string().min(4),
      employmentStatus: z.string().min(1),
      message: z.string().optional(),
    });

    try {
      const v = schema.parse(req.body);
      const toEmail = process.env.COMPANY_EMAIL || process.env.SMTP_USER;
      if (!toEmail) throw new Error("Email not configured");
      
      // Send email notification with proper error handling
      try {
        await sendEmail({
          to: toEmail,
          subject: "[EMRL] New School Application",
          text: `Application\n${JSON.stringify(v, null, 2)}`,
        });
        console.log("[Application] Email notification sent successfully");
      } catch (error) {
        console.error("[Application] Failed to send email notification:", error);
        // Don't fail the request if email fails - just log it
      }
      
      res.json({ ok: true });
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid application data" });
      } else {
        res.status(500).json({ message: error?.message || "Email service error" });
      }
    }
  });

  // Contact
  app.post("/api/contact", async (req, res) => {
    const schema = z.object({
      firstName: z.string().min(1),
      lastName: z.string().min(1),
      email: z.string().email(),
      subject: z.string().min(1),
      message: z.string().min(1),
    });

    try {
      const v = schema.parse(req.body);
      const toEmail = process.env.COMPANY_EMAIL || process.env.SMTP_USER;
      if (!toEmail) throw new Error("Email not configured");
      
      // Send email notification with proper error handling
      try {
        await sendEmail({
          to: toEmail,
          subject: `[EMRL] Contact: ${v.subject}`,
          text: `From: ${v.firstName} ${v.lastName} <${v.email}>\n\n${v.message}`,
        });
        console.log("[Contact] Email notification sent successfully");
      } catch (error) {
        console.error("[Contact] Failed to send email notification:", error);
        // Don't fail the request if email fails - just log it
      }
      
      res.json({ ok: true });
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid contact data" });
      } else {
        res.status(500).json({ message: error?.message || "Email service error" });
      }
    }
  });

  // Test email route for debugging
  app.post("/api/test-email", async (req, res) => {
    try {
      const toEmail = process.env.COMPANY_EMAIL || process.env.SMTP_USER;
      if (!toEmail) {
        return res.status(400).json({ message: "Email not configured" });
      }

      console.log("[Test Email] Attempting to send test email to:", toEmail);
      console.log("[Test Email] SMTP_USER:", process.env.SMTP_USER);
      console.log("[Test Email] COMPANY_EMAIL:", process.env.COMPANY_EMAIL);
      
      const result = await sendEmail({
        to: toEmail,
        subject: "[EMRL] Test Email - Debugging",
        text: "This is a test email to verify SMTP configuration is working correctly.",
      });
      
      console.log("[Test Email] Test email sent successfully:", result.messageId);
      res.json({ message: "Test email sent successfully", messageId: result.messageId });
    } catch (error) {
      console.error("[Test Email] Failed to send test email:", error);
      res.status(500).json({ 
        message: "Failed to send test email", 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  return httpServer;
}
