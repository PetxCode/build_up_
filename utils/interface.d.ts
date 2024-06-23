import { VariantProps } from "class-variance-authority";
import { Document } from "mongoose";
import { ReactNode } from "react";

export interface iUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
  role: string;
}

export interface iUserData extends iUser, Document {}

export interface iProduct {
  title: string;
  image: string;
}

export interface iProductData extends iProduct, Document {}

export interface iTask {
  title: string;
}

export interface iTaskData extends iTask, Document {}

export interface iButton
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof newButtonVar> {
  children: ReactNode;
  icon?: ReactNode;
}
