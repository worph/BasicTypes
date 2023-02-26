import {Point2} from "./Point2";

export namespace Point2Math {

    //@deprecated
    export function offsetPoint({x, y}: Point2, point: Point2): Point2 {
        return {x: x + point.x, y: y + point.y};
    }

    export function mult(pointA: Point2, scalar:number, output?: Point2): Point2 {
        if(output){
            output.x = pointA.x *scalar;
            output.y = pointA.y *scalar;
            return output;
        }else{
            return {x: pointA.x *scalar, y: pointA.y *scalar};
        }
    }

    export function floor(pointA: Point2, output?: Point2): Point2 {
        if(output){
            output.x = Math.floor(pointA.x);
            output.y = Math.floor(pointA.y);
            return output;
        }else{
            return {x: Math.floor(pointA.x), y: Math.floor(pointA.y)};
        }
    }

    export function round(pointA: Point2, output?: Point2): Point2 {
        if(output){
            output.x = Math.round(pointA.x);
            output.y = Math.round(pointA.y);
            return output;
        }else{
            return {x: Math.round(pointA.x), y: Math.round(pointA.y)};
        }
    }

    export function ceil(pointA: Point2, output?: Point2): Point2 {
        if(output){
            output.x = Math.ceil(pointA.x);
            output.y = Math.ceil(pointA.y);
            return output;
        }else{
            return {x: Math.ceil(pointA.x), y: Math.ceil(pointA.y)};
        }
    }

    export function add(pointA: Point2, pointB: Point2, output?: Point2): Point2 {
        if(output){
            output.x = pointA.x + pointB.x;
            output.y = pointA.y + pointB.y;
            return output;
        }else{
            return {x: pointA.x + pointB.x, y: pointA.y + pointB.y};
        }
    }

    export function distance(pointA: Point2, pointB: Point2): number {
        let y = pointB.x - pointA.x;
        let x = pointB.y - pointA.y;

        return Math.sqrt(x * x + y * y);
    }

    export function equals(pointA: Point2, pointB: Point2) {
        return pointA.x == pointB.x && pointA.y == pointB.y;
    }

    export function clone(point: Point2): Point2 {
        return {
            x: point.x,
            y: point.y
        }
    }
}
