import React, { Component } from 'react';
import SidebarItem from  './sidebar-item/Sidebar-item';

import './Sidebar.css';

class Sidebar extends Component {
    constructor() {
        super();
    }

    selectClassCallback(selectedClassId) {
        this.props.selectClassCallback(selectedClassId);
    }

    render() {
        console.log('sidebar render');
        const classes = this.props.classList.map((eachClass) => {
            return <li key={eachClass.id}>
                <SidebarItem selectedClassId={this.props.selectedClassId} classObj={eachClass} classClickCallback={this.selectClassCallback.bind(this)}/>
            </li>;
        });

        return (
            <div className="sidebar flex-1">
                <ul className="list-unstyled">
                    {classes}
                </ul>
            </div>
        );
    }
}

export default Sidebar;