import {Area} from "./Area";
import {Point2} from "./Point2";
import {Point2Math} from "./Point2Math";

export namespace AreaMath {
    export function center(area: Area): Point2 {
        return {
            x: Math.floor((area.from.x + area.to.x) / 2),
            y: Math.floor((area.from.y + area.to.y) / 2),
        }
    }

    export function size(area: Area): Point2 {
        return {
            x: (area.to.x - area.from.x) + 1,
            y: (area.to.y - area.from.y) + 1,
        }
    }

    export function containsPoint(area: Area, point: Point2) {
        return area.from.x <= point.x && point.x <= area.to.x && area.from.y <= point.y && point.y <= area.to.y
    }

    export function offsetArea({x, y}: Point2, area: Area, output?: Area): Area {
        if (output) {
            output.from.x = area.from.x + x;
            output.from.y = area.from.y + y;
            output.to.x = area.to.x + x;
            output.to.y = area.to.y + y;
            return output;
        } else {
            return {
                from: {x: area.from.x + x, y: area.from.y + y},
                to: {x: area.to.x + x, y: area.to.y + y},
            }
        }
    }

    export function equals(area1: Area, area2: Area): boolean {
        return Point2Math.equals(area1.from, area2.from) && Point2Math.equals(area1.to, area2.to);
    }

    export function clone(area: Area): Area {
        return {
            from: {
                x: area.from.x,
                y: area.from.y
            },
            to: {
                x: area.to.x,
                y: area.to.y
            }
        };
    }

    export function forEach(area: Area, callback: (x: number, y: number) => void, increment = 1) {
        for (let x = area.from.x; x <= area.to.x; x += increment) {
            for (let y = area.from.y; y <= area.to.y; y += increment) {
                callback(x, y);
            }
        }
    }

    export function mk(from: Point2 = {x: 0, y: 0}, to = {x: 0, y: 0}): Area {
        if (from.x > to.x || from.y > to.y) {
            throw new Error("from must be smaller than to");
        }
        return {from, to};
    }
}
