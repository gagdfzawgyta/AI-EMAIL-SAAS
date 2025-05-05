"use server";
import { auth } from "@clerk/nextjs/server";

export const getAurinkoAuthUrl = async (
  serviceType: "Google" | "office365",
) => {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthrized");
  const params = new URLSearchParams({
    clientId: process.env.AURINKO_CLIENT_ID || "",
    serviceType,
    scopes: "Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts Mail.All",
    resposeType: "code",
    returnUrl: `${process.env.NEXT_PUBLIC_URL}/api/aurinko/callback`,
  });
  const url = `https://aurinko.io/v1/auth/authorize?${params.toString()}`;
};
