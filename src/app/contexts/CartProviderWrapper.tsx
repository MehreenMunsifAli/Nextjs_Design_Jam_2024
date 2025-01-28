"use client";
// This makes it a client component

import { CartProvider } from "./CartContext";

export default function CartProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CartProvider>{children}</CartProvider>;
}
