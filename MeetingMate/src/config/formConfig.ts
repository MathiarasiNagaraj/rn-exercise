export const LOGIN_FORM = {
  style: 'loginForm',
  btnContainerStyle: 'btnstyle',
  isHavingShortFields:false,
  fields: [
    {

      name: 'email',
      placeholder: 'Enter your email Id',
      type: 'email-address',
      style: 'email',
      width:'full'
    },
    {
      name: 'password',
      placeholder: 'Enter your Password',
      type: 'default',
      style: 'email',
      isPassword: true,
      width:'full'
    },
  ],
  buttons: 
    {
      name: 'Login',
      style: 'loginBtn',
    },
  
};

export const ROOM_BOOKING_FORM = {
  style: 'bookingFormStyle',
  isHavingShortFields:true,
  fields: [
    {
      name: 'roomId',
      placeholder: 'Select the Room',
      type: 'dropDown',
      style: 'text',
      options:'rooms',
      width:'full'

    }, {
      name: 'title',
      placeholder: 'Enter Meeting Name',
      type: 'default',
      style: 'text',
      width:'full'
  
    }, {
      name: 'organizerId',
      placeholder: 'Select Organizer Name',
      type: 'dropDown',
      style: 'text',
      width: 'full',
      options:'organizers'

    }, {
      name: 'start',
      placeholder: '',
      type: 'time',
      style: 'time',
      width:'half'
    },
    {
      name: 'end',
      placeholder: '',
      type: 'time',
      style: 'time',
      width:'half'
    },
    {
      name: 'showMeetingTitle',
      placeholder: 'Show Meeting Name',
      type: 'checkBox',
      style: 'checkBox',
      width:'full'
    }
  ],
  buttons: {
    name: 'Book Now',
    style: 'BookBtn',
  }
}
