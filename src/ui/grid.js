/*jshint esversion:8*/

const Node = require("../core/node");
const Frame = require("./frame");

class Grid extends Node
{
    constructor(props)
    {
        super(props);
    }

    add_row = (buffer = []) =>
    {
        if(!Array.isArray(buffer)) return;

        let row = new Grid({ name: `row_${ this._childs.length + 1 }` });
        for(let c of buffer)
        {
            if(typeof c.comp === 'undefined') continue;
            if(!c.comp instanceof Frame) continue;
            row.add_child(c.comp);
        }
        this.add_child(row);
    }
}

module.exports = Grid;
