/*jshint esversion:8*/

const Base = require("./base");

class Renderer extends Base
{
    _tick = null;
    constructor(props)
    {
        super(props);
    }

    ticker = (props) =>
    {
        if(typeof props === 'undefined') return this._tick;
        this._tick = new Ticker(props);
        return this._tick;
    };
}

module.exports = Renderer;
