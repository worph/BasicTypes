import { Direction } from "./Direction";
import { Point2 } from "./Point2";
export declare namespace PointDirectionMath {
    function addInDirection(dir: Direction, value: number, { x, y }?: {
        x: number;
        y: number;
    }): Point2;
    function get4AdjacentDirectionPoint({ x, y }: {
        x: any;
        y: any;
    }, value?: number): {
        point: Point2;
        direction: Direction;
    }[];
    function rotatePoint({ x, y }: Point2, dir: Direction): Point2;
}
//# sourceMappingURL=PointDirectionMath.d.ts.map