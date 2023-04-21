import PropTypes from 'prop-types';

import {ProfileWrapper, Description, AvatarImg, AvatarName, AvatarTag, AvatarLocation, ProfileStats, StatsLabel, StatsQuantity} from './Profile.module.jsx';

export const Profile = ({username, tag, location, avatar, stats:{followers,views,likes}}) => {
    return (
    <ProfileWrapper>
        <Description>
            <AvatarImg
                src={avatar}
                alt="User avatar"
            />
            <AvatarName>{username}</AvatarName>
            <AvatarTag>{'@'+tag}</AvatarTag>
            <AvatarLocation>{location}</AvatarLocation>
        </Description>

        <ProfileStats>
            <li>
                <StatsLabel>Followers</StatsLabel>
                <StatsQuantity>{followers}</StatsQuantity>
            </li>
            <li>
                <StatsLabel >Views</StatsLabel>
                <StatsQuantity>{views}</StatsQuantity>
            </li>
            <li>
                <StatsLabel >Likes</StatsLabel>
                <StatsQuantity>{likes}</StatsQuantity>
            </li>
        </ProfileStats>
    </ProfileWrapper>); 
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location:PropTypes.string,
  avatar: PropTypes.string,
    stats: PropTypes.shape(
        {
          followers: PropTypes.number,
          views: PropTypes.number,
          likes: PropTypes.number
        }
    ) 
      
}