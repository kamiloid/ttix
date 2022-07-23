/*jshint esversion:8*/

const Stage = require("./stage");
const Frame = require("./ui/frame");
const Grid = require("./ui/grid");
const Section = require("./ui/section");

const Stage_factory =
{
    stage: (props = {}) =>
    {
        let stage = new Stage(props);
        return stage;
    },
    section: (props = {}) =>
    {
        let section = new Section(props);
        return section;
    },
    grid: (props = {}) =>
    {
        let grid = new Grid(props);
        return grid;
    },
    frame: (props = {}) =>
    {
        let frame = new Frame(props);
        return frame;
    }
};

module.exports =
    {
        Factory: Stage_factory 
    };
