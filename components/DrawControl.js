
const MapboxDraw = require("@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw");
const react_mapbox_gl_1 = require("react-mapbox-gl");
import React from 'react';
import { connect } from "react-redux";
import memoize from "memoize-one";
import {changeDrawMode} from '../actions/drawcontroller'

function noop() {
    /* do nothing */
}

class DrawControl extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            draw_mode: 'read_only',
        }

        this.changeMode = this.changeMode.bind(this);
        this.handleChangeMode = this.handleChangeMode.bind(this);
    };

    componentDidMount() {
        const map = this.context;
        // The map needs to be passed in the React Context, or welse we can't do
        // anything.
        if (!map || !map.getStyle()) {
            throw new Error('Map is undefined in React context.');
        }
        const { modes, onDrawActionable, onDrawCombine, onDrawCreate, onDrawDelete, onDrawModeChange, onDrawRender, onDrawSelectionChange, onDrawUncombine, onDrawUpdate, position } = this.props;

        // Define a new Draw Control
        this.draw = new MapboxDraw(Object.assign({}, this.props, { modes: Object.assign({}, MapboxDraw.modes, modes) }));
        // Add it to our map
        map.addControl(this.draw, position);
        // Hook draw events
        map.on('draw.actionable', onDrawActionable || noop);
        map.on('draw.combine', onDrawCombine || noop);
        map.on('draw.create', onDrawCreate || noop);
        map.on('draw.delete', onDrawDelete || noop);
        map.on('draw.modechange', function(e){
            this.handleChangeMode(e.mode);
        }.bind(this) || noop);
        map.on('draw.render', onDrawRender || noop);
        map.on('draw.selectionchange', onDrawSelectionChange || noop);
        map.on('draw.uncombine', onDrawUncombine || noop);
        map.on('draw.update', onDrawUpdate || noop);
    }
    
    componentWillUnmount() {
        const map = this.context;
        if (!map || !map.getStyle()) {
            return;
        }
        if (!this.draw) {
            return;
        }
        map.removeControl(this.draw);
    };

    changeMode = memoize((draw_mode) => {
        console.log(draw_mode);
        if(this.draw){
            if (draw_mode === 'direct_select'){
                //nothibg todo
            }else{
               this.draw.changeMode(draw_mode);
            }
        }
    });

    handleChangeMode = (mode) => {
        this.props.changeDrawMode(mode);
    };

    render() {
        this.changeMode(this.props.draw_mode);
        return null;
    }
}

function mapStateToProps(state)    {
    return {draw_mode:state.drawcontroller.draw_mode};
}


DrawControl.contextType = react_mapbox_gl_1.MapContext;
DrawControl.defaultProps = {
    position: 'top-left'
};

export default connect(mapStateToProps, {changeDrawMode} )(DrawControl);