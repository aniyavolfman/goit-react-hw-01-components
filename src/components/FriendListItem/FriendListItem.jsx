import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={css.item}>
            <span className="status"></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};