/*jshint esversion:8*/

const Base = require("./base");

class Ticker extends Base
{
    _loop = null;
    _ms = 0;
    _buffer = [];
    _play = true;
    constructor(props)
    {
        super(props);
        this._ms = props.ms || 0.5 * 1000;
    }

    add_signal = (method) =>
    {
        this._buffer.push(method);
    };

    loop = () =>
    {
        this._loop = setInterval(() => {
            if(!this._play) return;
            for(let b of this._buffer)
            {
                if(typeof b !== 'function') continue;
                b();
            }
        }, _ms);
    };

    play = () =>
    {
        this._play = true;
    };

    pause = () =>
    {
        this._play = false;
    };

    stop = () =>
    {
        if(typeof this._loop !== 'undefined')
        {
            clearInterval(this._loop);
            this._loop = null;
        }
    };
}

module.exports = Ticker;
