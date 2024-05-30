import { Products } from "@/types/provider.interface";
import React from "react";

export interface CardsProps {
  items: Products;
}

export interface ModalProps {
  items: Products;
}

export interface ButtonProps {
  children: React.ReactNode;
  className: string;
  radius: "sm" | "md" | "lg";
  variant:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  size?: "sm" | "md" | "lg";
  onPress?: () => void;
}

export interface SkeletonProps {
  children: React.ReactNode;
  isLoaded?: boolean;
  className?: string;
}
