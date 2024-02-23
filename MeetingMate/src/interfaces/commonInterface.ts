export interface Room {
  id: string;
  name: string;
  maxLimit: number;
  monitorAvailablity: boolean;
  boardAvailablity: boolean;
  branch: string;
  location: string;
  availability: boolean;
  roomImg: string;
}

export interface User {
    id: string;
    name:string
  email: string;
  password: string;
}

export interface Meeting {
  id: string;
  roomId: string;
  start: string;
  end: string;
  organizerId: string;
  Title: string;
  showMeetingTitle: boolean;
}
