import { Direction, DOWN, LEFT, RIGHT, UP } from "./Direction";

export namespace DirectionMath {
    export function reverse(inDir: Direction): Direction {
        switch (inDir) {
            case(UP):
                return DOWN;
            case(DOWN):
                return UP;
            case(RIGHT):
                return LEFT;
            case(LEFT):
                return RIGHT;
        }
        throw new Error();
    }

    export function getAdjacentRightDir(dir): Direction {
        switch (dir) {
            case UP: {
                return RIGHT;
            }
            case DOWN: {
                return LEFT;
            }
            case RIGHT: {
                return DOWN;
            }
            case LEFT: {
                return UP;
            }
        }
        throw new Error();
    }
}
