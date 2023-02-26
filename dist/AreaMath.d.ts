import { Area } from "./Area";
import { Point2 } from "./Point2";
export declare namespace AreaMath {
    function center(area: Area): Point2;
    function size(area: Area): Point2;
    function containsPoint(area: Area, point: Point2): boolean;
    function offsetArea({ x, y }: Point2, area: Area, output?: Area): Area;
    function equals(area1: Area, area2: Area): boolean;
    function clone(area: Area): Area;
    function forEach(area: Area, callback: (x: number, y: number) => void, increment?: number): void;
    function mk(): Area;
}
//# sourceMappingURL=AreaMath.d.ts.map