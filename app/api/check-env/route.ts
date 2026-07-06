import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "NOT SET",
    allPublicEnvVars: Object.keys(process.env)
      .filter((key) => key.startsWith("NEXT_PUBLIC"))
      .reduce(
        (acc, key) => {
          acc[key] = process.env[key];
          return acc;
        },
        {} as Record<string, string | undefined>
      ),
  });
}
