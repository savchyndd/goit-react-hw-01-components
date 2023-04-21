import PropTypes from "prop-types";
import { FriendListWrapper } from "./FriendList.module.jsx";
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <FriendListWrapper>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendListItem
                        key={id}
                        status={isOnline}
                        avatar={avatar}
                        name={name}
                    />);
            })
            }        
        </FriendListWrapper>);
}

FriendList.propTypes = {
    friends: PropTypes.array
}