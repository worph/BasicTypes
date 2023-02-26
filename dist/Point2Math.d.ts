import { Point2 } from "./Point2";
export declare namespace Point2Math {
    function offsetPoint({ x, y }: Point2, point: Point2): Point2;
    function mult(pointA: Point2, scalar: number, output?: Point2): Point2;
    function floor(pointA: Point2, output?: Point2): Point2;
    function round(pointA: Point2, output?: Point2): Point2;
    function ceil(pointA: Point2, output?: Point2): Point2;
    function add(pointA: Point2, pointB: Point2, output?: Point2): Point2;
    function distance(pointA: Point2, pointB: Point2): number;
    function equals(pointA: Point2, pointB: Point2): boolean;
    function clone(point: Point2): Point2;
}
//# sourceMappingURL=Point2Math.d.ts.map