import {Int} from "./Int";

export namespace IntMath {
    export function roundToInt(num: number):Int { return Math.round(num) as Int }
}
