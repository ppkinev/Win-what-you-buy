export const initialState = { isLoading: false, unread: 0, notifications: [] }

export const getUnreadNotificationsAmount = (state = initialState) => state.unread
export const getNotifications = (state = initialState) => state.notifications
export const isNotificationsLoading = (state = initialState) => state.isLoading
