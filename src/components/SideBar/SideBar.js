import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarRow">
                <HomeIcon />
                {/* Click PostAddIcon to go through the posts page */}
                <Link to="/posts">
                    <PostAddIcon />
                </Link>
                <SubscriptionsIcon />
                <HistoryIcon />
                <ThumbUpAltOutlinedIcon />
                <ExpandMoreOutlinedIcon />
            </div>
        </div>
    )
}

export default SideBar
