/*jshint esversion:8*/

const Renderer = require("./renderer");

class Node extends Renderer
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
