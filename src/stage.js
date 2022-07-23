/*jshint esversion:8*/

const Base = require('./core/base');
const Section = require('./ui/section');

class Stage extends Base
{
    _sections = [];

    constructor(props = {})
    {
        super(props);
        this.section(`main`, {});
    }

    section = (k, props = undefined) =>
    {
        if(typeof k !== 'string') return;
        if(typeof props === 'undefined') return this._sections[k];
        props = props || {};
        props.name = props.name || k;
        let section = new Section(props);
        this._sections[k] = section;
    };
}

module.exports = Stage;
