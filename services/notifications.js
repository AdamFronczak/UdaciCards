import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo';

function createNotification () {
    return {
        title: 'Quiz reminder',
        body: "Long time no see! Would you like to take a Quiz?",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}
  
function setLocalNotification () {
    Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
            if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()

                let tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                tomorrow.setHours(20);
                tomorrow.setMinutes(0);

                Notifications.scheduleLocalNotificationAsync(
                    createNotification(),
                    {
                        time: tomorrow,
                        repeat: 'day',
                    }
                );
            }
        });
}

export function recreateNotification() {
    setLocalNotification();
}
  