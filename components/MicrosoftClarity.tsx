"use client";

import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

const CLARITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

export default function MicrosoftClarity() {
  useEffect(() => {
    if (!CLARITY_PROJECT_ID) {
      return;
    }

    Clarity.init(CLARITY_PROJECT_ID);
  }, []);

  return null;
}