import { format } from "date-fns";

export function formatMinutes(seconds: number) {
    const milliseconds = seconds * 1000;

    const date = new Date(milliseconds);

    return format(date, "mm:ss");
}