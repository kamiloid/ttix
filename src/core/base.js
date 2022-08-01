/*jshint esversion:8*/

const Ticker = require("./ticker");

class Base
{
    _id = -1;
    _name = ``;
    constructor(props = {})
    {
        this._id = props.id || Math.ceil(Math.random() * Date.now());
        this._name = props.name || this._id.toString();
        this._tick = new Ticker(props.ticker || {});
    }
}

module.exports = Base;
