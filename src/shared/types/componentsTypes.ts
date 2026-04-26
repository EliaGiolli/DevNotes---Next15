// types for button, inputs, cards and so on
import React, { ReactNode } from "react";

export interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
}