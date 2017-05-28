import React, { Component } from 'react';
import './Sidebar-item.css';
var classNames = require('classnames');

class SidebarItem extends Component {

    selectClass() {
        this.props.classClickCallback(this.props.classObj.id);
    }

    render() {
        console.log('sidebar item render');
        const classNamesObj = classNames(
            'item',
            {
                'selected': this.props.classObj.id === this.props.selectedClassId
            }
        );

        return (
            <a className={classNamesObj} onClick={this.selectClass.bind(this)}>
                <span>></span>
                <span className="pl-4">{this.props.classObj.name}</span>
            </a>
        );
    }
}

export default SidebarItem;