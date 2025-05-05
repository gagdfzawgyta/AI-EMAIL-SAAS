"use client";

import React from "react";
import { Button } from "./ui/button";
import { getAurinkoAuthUrl } from "@/lib/aurinko";

export const LinkAccountButton = () => {
  return (
    <Button
      onClick={async () => {
        const authUrl = await getAurinkoAuthUrl("Google");
        console.log(`AuthUrl : ${authUrl}`);
      }}
    >
      Link Account
    </Button>
  );
};
