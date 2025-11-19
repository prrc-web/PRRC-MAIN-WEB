import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import payload from "payload";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const start = async () => {
  try {
    // Load payload config dynamically so dotenv has been applied
    const payloadConfig = (await import("./payload.config")).default;

    // Basic env checks and debug
    console.log("ENV CHECK — payload-backend");
    console.log("  NODE_ENV:", process.env.NODE_ENV || "development");
    console.log("  PORT:", process.env.PORT || 3001);
    console.log("  PAYLOAD_SECRET set:", !!process.env.PAYLOAD_SECRET);
    console.log(
      "  PAYLOAD_SECRET length:",
      process.env.PAYLOAD_SECRET?.length || 0
    );
    console.log("  MONGODB_URI set:", !!process.env.MONGODB_URI);

    // Initialize Payload CMS (admin + api)
    await (payload.init as any)({
      config: payloadConfig,
      express: app,
      onInit: async () => {
        payload.logger.info(
          `Payload Admin URL: http://localhost:${PORT}/admin`
        );
        payload.logger.info(`Payload API URL: http://localhost:${PORT}/api`);

        // Optional: seed admin for dev
        try {
          const users = await payload.find({ collection: "users", limit: 1 });
          if (
            (!users || users.docs.length === 0) &&
            process.env.ADMIN_EMAIL &&
            process.env.ADMIN_PASSWORD &&
            process.env.SEED_ADMIN === "true"
          ) {
            await payload.create({
              collection: "users",
              data: {
                email: process.env.ADMIN_EMAIL,
                password: process.env.ADMIN_PASSWORD,
                displayName: process.env.ADMIN_NAME || "Admin",
                role: "admin",
              },
              disableVerificationEmail: true,
            });
            payload.logger.info("Seeded admin user from environment variables");
          }
        } catch (err: any) {
          payload.logger.warn(
            `Admin seeding skipped due to error: ${err?.message || err}`
          );
        }
      },
    });
    // Health check endpoint
    app.get("/health", (req: Request, res: Response) => {
      res.status(200).json({
        status: "ok",
        timestamp: new Date().toISOString(),
        service: "PRRC Backend",
      });
    });

    // API endpoint example
    app.get("/api/status", (req: Request, res: Response) => {
      res.status(200).json({
        message: "Backend API is running",
        version: "1.0.0",
      });
    });

    // Root API - useful for simple checks from the frontend or browser
    app.get("/api", (req: Request, res: Response) => {
      res.status(200).json({
        message: "PRRC Backend API Root",
        available: [
          { path: "/api/status", description: "Basic status endpoint" },
        ],
      });
    });

    app.listen(PORT, () => {
      console.log(`✅ PRRC Backend Server running on port ${PORT}`);
      console.log(`📍 Health: http://localhost:${PORT}/health`);
      console.log(`📍 API: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

start();
