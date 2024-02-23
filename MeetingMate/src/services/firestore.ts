import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
export const COLLECTIONS = {
  Meetings: 'Meetings',
  Users: 'Users',
  Rooms: 'Rooms',
  location: 'Locations',
};





export const addData = async (collection: string, data: any) => {
  try {
    await firestore()
      .collection(collection)
      .doc()
      .set(data)
      .catch(err => console.log(err));
  } catch (error) {
    return error;
  }
};


export const readAllMeetings = async () => {
  try {
    const snapshot = await firestore().collection(COLLECTIONS.Meetings).get();
    const documents: { id: string }[] = [];
    snapshot.forEach(doc => {
      documents.push({
        id: doc.id, ...doc.data(),
        start: doc.data().start.toDate(),
        end: doc.data().end.toDate()
      
      });
    });
    return documents;
  }
  catch (error) {
    return error;
  }
}
export const readAllRooms = async () => {
  try {
    const snapshot = await firestore().collection(COLLECTIONS.Rooms).get();
    const documents: { id: string }[] = [];
    snapshot.forEach(doc => {
      documents.push({
        id: doc.id, ...doc.data()
      
      });
    });
    return documents;
  }

  catch (error) {
    return error;
  }
}
export const readAllUsers = async () => {
  try {
    const snapshot = await firestore().collection(COLLECTIONS.Users).get();
    const documents: { id: string }[] = [];
    snapshot.forEach(doc => {
      documents.push({
        id: doc.id, ...doc.data()
      
      });
    });
    return documents;
  }
  catch (error) {
    return error;
  }
}

export const readDataById = async (collection: string, id: string) => {
  try {
    const snapshot = firestore().collection(collection).doc(id);
    const documents = await snapshot.get();

    const docId = documents.id
    const data=documents.data()
    if (documents.exists)
      
      return {
        docId,
        ...data
      };
    return null;
  } catch (error) {
    return error;
  }
};

export const readMeetingbyRoomId = async (roomId:string) => {
  try {
    const querySnapshot =await  firestore().collection(COLLECTIONS.Meetings).where('roomName','==',roomId).get();
    const documents: { id: string; }[] = [];
    querySnapshot.forEach(doc => {
      documents.push({
        id: doc.id, ...doc.data(),
        start: doc.data().start.toDate(),
        end: doc.data().end.toDate()
      
      });
    });
    return documents;
   
  } catch (error) {
    return error;
  }
}

export const readMeetingbyUserId = async (userId:string) => {
  try {
    const querySnapshot = await firestore().collection(COLLECTIONS.Meetings).where('organizerName','==',userId).get();
    const documents: { id: string; }[] = [];
    querySnapshot.forEach(doc => {
      documents.push({ id: doc.id, ...doc.data() ,start:doc.data().start,end:doc.data().end});
    });

    return documents;
  } catch (error) {
    return error;
  }
}

export const editParticularData = async (collection: string, id: string, updatedData) => {
  try {
    const snapshot = firestore().collection(collection).doc(id);
    await snapshot.update(updatedData);
  } catch (error) {
    return error;
  }
 
};
export const deleteParticularData = async (
  collection: string,
  id: string,
) => {
  try {
    const snapshot = firestore().collection(collection).doc(id);
    await snapshot.delete();
  } catch (error) {
    return error;
  }
};
