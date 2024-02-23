import { COLLECTIONS, readAllUsers,readAllRooms } from "../services/firestore";


export const getBottomBarIconName = (name:string) => {
    let icon = '';
    switch (name) {
      case 'Home':
        icon = 'home';
        break;
      case 'Book a Slot':
        icon = 'calendar-account';
        break;
      case 'My Booking':
        icon = 'account-circle';
        break;
      case 'Scan':
        icon = 'qrcode-scan';
            break;
        case 'Setting':
        icon = 'cog-outline'    
    }
    return icon;
}

export const getOptions = async (option: string) => {
  let options = []


  switch (option) {
    case 'rooms':
      {
        const data = await readAllRooms();

        options = data.map(item => ({
          label: item.name,
          value: item.id
        }));
      }
      break;
    case 'organizers':
      {
        const data = await readAllUsers();

        options = data.map(item => ({
          label: item.name,
          value: item.id
        }));
      }
      break;
    
  }
  return options;
}