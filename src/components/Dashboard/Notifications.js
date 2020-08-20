import React from 'react';
import moment from 'moment'


const Notifications = ({notifications}) => {
    notifications && console.log('NOTIFICATIONS', notifications)
    return (
        <div className='section'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>
                        Notifications
                    </span>
                    <ul className='notifications'>
                        {
                            notifications && notifications.map(notification => (
                                // console.log('NOtifaications hhh', notification)
                                <li key={notification.id}>
                                    <span className='pink-text'>{notification && notification.user}</span>
                                    <span>{ notification && notification.caontent}</span>
                                    <div className='grey-text note-date'>
                                        {moment(notification.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;
