import React from 'react';
import './SideBarRow.css';

const SideBarRow = ({Icon}) => {
    return (
        <div className="sidebarRow">
            <Icon className="sidebarRow__icon"/>
        </div>
    )
}

export default SideBarRow
