import {AngleRad} from "./AngleRad";
import {Vector2} from "./Vector2";

export namespace Vector2Math {
    /**
     *  Rotate this Vector by an angle amount.
     * @param angleRad radian
     * @param vec
     * @param center optional center otherwise {0,0}
     */
    export function rotate(vec: Vector2, angleRad:AngleRad, center?: Vector2): Vector2 {
        //https://stackoverflow.com/questions/17410809/how-to-calculate-rotation-in-2d-in-javascript
        //https://github.com/photonstorm/phaser/blob/v3.51.0/src/math/Vector2.js#L678
        const cos = Math.cos(angleRad);
        const sin = Math.sin(angleRad);
        let x, y;
        if (center) {
            const cx = center.x;
            const cy = center.y;
            x = (cos * (vec.x - cx) - sin * (vec.y - cy));
            y = (sin * (vec.x - cx) + cos * (vec.y - cy));
        } else {
            x = cos * vec.x - sin * vec.y;
            y = sin * vec.x + cos * vec.y;
        }
        vec.x = x;
        vec.y = y;
        return vec;
    }
}
