/*jshint esversion:8*/

const Base = require("./base");

class Node extends Base
{
    _parent = null;
    _childs = [];
    constructor(props)
    {
        super(props);
    }

    add_child = (child) =>
    {
        this._childs.push(child);
    }
}

module.exports = Node;
