"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export function useMobileMenu() {
  const pathname = usePathname();
  // remember which page the menu was opened on, so it closes by itself after navigating
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  return { open, toggle: () => setOpenedOn(open ? null : pathname), pathname };
}
