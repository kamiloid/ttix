/*jshint esversion:8*/

class Vector2
{
    _x = 0;
    _y = 0;
    constructor(x = 0, y = 0)
    {
        this._x = x;
        this._y = y;
    }
}

class Rect
{
    _x = 0;
    _y = 0;
    _w = 0;
    _h = 0;

    constructor(x = 0, y = 0, w = 0, h = 0)
    {
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
    }

    get_rect = () =>
    {
        return {
            top: this._y,
            left: this._x,
            right: this._x + this._w,
            bottom: this._y + this._h,
        };
    };
}

module.exports = {
    Vector2: Vector2,
    Rect: Rect
};
