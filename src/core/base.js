/*jshint esversion:8*/

class Base
{
    _id = -1;
    _name = ``;
    constructor(props = {})
    {
        this._id = props.id || Math.ceil(Math.random() * Date.now());
        this._name = props.name || this._id.toString();
    }
}

module.exports = Base;
