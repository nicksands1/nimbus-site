import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const SectionBorder = (props: HTMLAttributes<HTMLDivElement>) => {
    return <div className={twMerge('', props.className)}{...props}/>;
}