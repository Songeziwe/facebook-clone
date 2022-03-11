import { Avatar } from '@material-ui/core';
import React from 'react'
import '../style/sidebarRow.css';

function SidebarRow({src, Icon, title}) {
    return (
        <div className = 'sidebarRow'>
            {src && <Avatar src = {src}/>}
            {Icon && <Icon />}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow;
