import PropTypes from "prop-types";

import { FriendImg, FriendItem, FriendName, FriendStatus } from "./FriendListItem.module";

export const FriendListItem = ({status, avatar, name}) => {
    return (
        <FriendItem>
            <FriendStatus>{status}</FriendStatus>
            <FriendImg src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FriendItem>
    );
}

FriendListItem.propTypes = {
    status: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
}