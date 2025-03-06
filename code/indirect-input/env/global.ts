import { innerWidthFn } from "./window";

export function doubleUserAge() {
    const userAge = 18;
    return Number(userAge) * 2;
}

export function doubleInnerWidth() {
    return innerWidthFn() * 2;
}
