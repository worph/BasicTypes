// src/AngleRadMath.ts
var AngleRadMath;
((AngleRadMath2) => {
  function shortestBetween(angleFrom, angleTo) {
    let difference = angleTo - angleFrom;
    if (difference === 0) {
      return 0;
    }
    let times = Math.floor((difference - -Math.PI) / (Math.PI * 2));
    return difference - times * (Math.PI * 2);
  }
  AngleRadMath2.shortestBetween = shortestBetween;
  function normalize(angle) {
    angle = angle % (2 * Math.PI);
    if (angle >= 0) {
      return angle;
    } else {
      return angle + 2 * Math.PI;
    }
  }
  AngleRadMath2.normalize = normalize;
})(AngleRadMath || (AngleRadMath = {}));

// src/Point2Math.ts
var Point2Math;
((Point2Math2) => {
  function offsetPoint({ x, y }, point) {
    return { x: x + point.x, y: y + point.y };
  }
  Point2Math2.offsetPoint = offsetPoint;
  function mult(pointA, scalar, output) {
    if (output) {
      output.x = pointA.x * scalar;
      output.y = pointA.y * scalar;
      return output;
    } else {
      return { x: pointA.x * scalar, y: pointA.y * scalar };
    }
  }
  Point2Math2.mult = mult;
  function floor(pointA, output) {
    if (output) {
      output.x = Math.floor(pointA.x);
      output.y = Math.floor(pointA.y);
      return output;
    } else {
      return { x: Math.floor(pointA.x), y: Math.floor(pointA.y) };
    }
  }
  Point2Math2.floor = floor;
  function round(pointA, output) {
    if (output) {
      output.x = Math.round(pointA.x);
      output.y = Math.round(pointA.y);
      return output;
    } else {
      return { x: Math.round(pointA.x), y: Math.round(pointA.y) };
    }
  }
  Point2Math2.round = round;
  function ceil(pointA, output) {
    if (output) {
      output.x = Math.ceil(pointA.x);
      output.y = Math.ceil(pointA.y);
      return output;
    } else {
      return { x: Math.ceil(pointA.x), y: Math.ceil(pointA.y) };
    }
  }
  Point2Math2.ceil = ceil;
  function add(pointA, pointB, output) {
    if (output) {
      output.x = pointA.x + pointB.x;
      output.y = pointA.y + pointB.y;
      return output;
    } else {
      return { x: pointA.x + pointB.x, y: pointA.y + pointB.y };
    }
  }
  Point2Math2.add = add;
  function distance(pointA, pointB) {
    let y = pointB.x - pointA.x;
    let x = pointB.y - pointA.y;
    return Math.sqrt(x * x + y * y);
  }
  Point2Math2.distance = distance;
  function equals(pointA, pointB) {
    return pointA.x == pointB.x && pointA.y == pointB.y;
  }
  Point2Math2.equals = equals;
  function clone(point) {
    return {
      x: point.x,
      y: point.y
    };
  }
  Point2Math2.clone = clone;
})(Point2Math || (Point2Math = {}));

// src/AreaMath.ts
var AreaMath;
((AreaMath2) => {
  function center(area) {
    return {
      x: Math.floor((area.from.x + area.to.x) / 2),
      y: Math.floor((area.from.y + area.to.y) / 2)
    };
  }
  AreaMath2.center = center;
  function size(area) {
    return {
      x: area.to.x - area.from.x + 1,
      y: area.to.y - area.from.y + 1
    };
  }
  AreaMath2.size = size;
  function containsPoint(area, point) {
    return area.from.x <= point.x && point.x <= area.to.x && area.from.y <= point.y && point.y <= area.to.y;
  }
  AreaMath2.containsPoint = containsPoint;
  function offsetArea({ x, y }, area, output) {
    if (output) {
      output.from.x = area.from.x + x;
      output.from.y = area.from.y + y;
      output.to.x = area.to.x + x;
      output.to.y = area.to.y + y;
      return output;
    } else {
      return {
        from: { x: area.from.x + x, y: area.from.y + y },
        to: { x: area.to.x + x, y: area.to.y + y }
      };
    }
  }
  AreaMath2.offsetArea = offsetArea;
  function equals(area1, area2) {
    return Point2Math.equals(area1.from, area2.from) && Point2Math.equals(area1.to, area2.to);
  }
  AreaMath2.equals = equals;
  function clone(area) {
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
  AreaMath2.clone = clone;
  function forEach(area, callback, increment = 1) {
    for (let x = area.from.x; x <= area.to.x; x += increment) {
      for (let y = area.from.y; y <= area.to.y; y += increment) {
        callback(x, y);
      }
    }
  }
  AreaMath2.forEach = forEach;
  function mk() {
    return {
      from: {
        x: 0,
        y: 0
      },
      to: {
        x: 0,
        y: 0
      }
    };
  }
  AreaMath2.mk = mk;
})(AreaMath || (AreaMath = {}));

// src/Direction.ts
var UP = "up";
var DOWN = "down";
var RIGHT = "right";
var LEFT = "left";

// src/DirectionMath.ts
var DirectionMath;
((DirectionMath2) => {
  function reverse(inDir) {
    switch (inDir) {
      case UP:
        return DOWN;
      case DOWN:
        return UP;
      case RIGHT:
        return LEFT;
      case LEFT:
        return RIGHT;
    }
    throw new Error();
  }
  DirectionMath2.reverse = reverse;
  function getAdjacentRightDir(dir) {
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
  DirectionMath2.getAdjacentRightDir = getAdjacentRightDir;
})(DirectionMath || (DirectionMath = {}));

// src/IntMath.ts
var IntMath;
((IntMath2) => {
  function roundToInt(num) {
    return Math.round(num);
  }
  IntMath2.roundToInt = roundToInt;
})(IntMath || (IntMath = {}));

// src/PointDirectionMath.ts
var PointDirectionMath;
((PointDirectionMath2) => {
  function addInDirection(dir, value, { x, y } = { x: 0, y: 0 }) {
    switch (dir) {
      case UP:
        return { x, y: y - value };
      case DOWN:
        return { x, y: y + value };
      case RIGHT:
        return { x: x + value, y };
      case LEFT:
        return { x: x - value, y };
    }
    throw new Error();
  }
  PointDirectionMath2.addInDirection = addInDirection;
  function get4AdjacentDirectionPoint({ x, y }, value = 1) {
    let ret = [];
    ret.push({
      direction: UP,
      point: addInDirection(UP, value, { x, y })
    });
    ret.push({
      direction: RIGHT,
      point: addInDirection(RIGHT, value, { x, y })
    });
    ret.push({
      direction: DOWN,
      point: addInDirection(DOWN, value, { x, y })
    });
    ret.push({
      direction: LEFT,
      point: addInDirection(LEFT, value, { x, y })
    });
    return ret;
  }
  PointDirectionMath2.get4AdjacentDirectionPoint = get4AdjacentDirectionPoint;
  function rotatePoint({ x, y }, dir) {
    switch (dir) {
      case UP:
        return { x, y };
      case DOWN:
        return { x: -x, y: -y };
      case RIGHT:
        return { x: -y, y: x };
      case LEFT:
        return { x: y, y: -x };
    }
    throw new Error();
  }
  PointDirectionMath2.rotatePoint = rotatePoint;
})(PointDirectionMath || (PointDirectionMath = {}));

// src/Vector2Math.ts
var Vector2Math;
((Vector2Math2) => {
  function rotate(vec, angleRad, center) {
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);
    let x, y;
    if (center) {
      const cx = center.x;
      const cy = center.y;
      x = cos * (vec.x - cx) - sin * (vec.y - cy);
      y = sin * (vec.x - cx) + cos * (vec.y - cy);
    } else {
      x = cos * vec.x - sin * vec.y;
      y = sin * vec.x + cos * vec.y;
    }
    vec.x = x;
    vec.y = y;
    return vec;
  }
  Vector2Math2.rotate = rotate;
})(Vector2Math || (Vector2Math = {}));
export {
  AngleRadMath,
  AreaMath,
  DOWN,
  DirectionMath,
  IntMath,
  LEFT,
  Point2Math,
  PointDirectionMath,
  RIGHT,
  UP,
  Vector2Math
};
//# sourceMappingURL=index.mjs.map
