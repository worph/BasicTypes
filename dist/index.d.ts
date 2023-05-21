type AngleRad = number;

declare namespace AngleRadMath {
    function shortestBetween(angleFrom: AngleRad, angleTo: AngleRad): number;
    function normalize(angle: AngleRad): AngleRad;
}

interface Point2 {
    x: number;
    y: number;
}

interface Area {
    from: Point2;
    to: Point2;
}

declare namespace AreaMath {
    function center(area: Area): Point2;
    function size(area: Area): Point2;
    function containsPoint(area: Area, point: Point2): boolean;
    function offsetArea({ x, y }: Point2, area: Area, output?: Area): Area;
    function equals(area1: Area, area2: Area): boolean;
    function clone(area: Area): Area;
    function forEach(area: Area, callback: (x: number, y: number) => void, increment?: number): void;
    function mk(): Area;
}

declare const UP = "up";
declare const DOWN = "down";
declare const RIGHT = "right";
declare const LEFT = "left";
type Direction = "up" | "right" | "down" | "left";

declare namespace DirectionMath {
    function reverse(inDir: Direction): Direction;
    function getAdjacentRightDir(dir: any): Direction;
}

type Int = number & {
    __int__: void;
};

declare namespace IntMath {
    function roundToInt(num: number): Int;
}

declare namespace Point2Math {
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

declare namespace PointDirectionMath {
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

interface Vector2 extends Point2 {
}

declare namespace Vector2Math {
    function rotate(vec: Vector2, angleRad: AngleRad, center?: Vector2): Vector2;
}

export { AngleRad, AngleRadMath, Area, AreaMath, DOWN, Direction, DirectionMath, Int, IntMath, LEFT, Point2, Point2Math, PointDirectionMath, RIGHT, UP, Vector2, Vector2Math };
