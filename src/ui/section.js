/*jshint esversion:8*/

const Node = require("../core/node");
const Grid = require("./grid");

class Section extends Node
{
    _grid = null;

    constructor(props)
    {
        super(props);
        this._grid = new Grid();
        this.add_child(this._grid);
    }

    grid = () => { return this._grid; }
}

module.exports = Section;
