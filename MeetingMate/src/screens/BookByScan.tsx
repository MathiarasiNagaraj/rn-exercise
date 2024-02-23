import React, {useEffect, useState, useRef} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Button from '../components/Button';
import {LinearGradientView} from '../containers/LinearGradientView';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCodeScanner,
} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
import {MEETING_ROOM} from '../constants/commonConstants';
import ScreenHeader from '../components/ScreenHeader';
export const BookByScan = () => {
  const camera = useRef(null);
  const [position, setPosition] = useState('back');
  const navigation = useNavigation();
  const devices = useCameraDevice(position);
  const device = devices;
  const format = useCameraFormat(device, [{photoHdr: true}, {videoHdr: true}]);

  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState('');
  const changeCamera = () => {
    if (position === 'back') setPosition('front');
    else setPosition('back');
  };
  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);
      setShowCamera(false);
    }
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }
  useEffect(() => {
    async function getPermission() {
      const newCameraPermission = await Camera.requestCameraPermission();
      console.log(newCameraPermission);
    }
    getPermission();
  }, []);
  const onPressHandler = () => {
setShowCamera(true)
  };
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(codes);
      const roomName = codes[0].value;
      console.log(roomName === MEETING_ROOM[1].name);
      const details = MEETING_ROOM.find(room => room.name == roomName);

      navigation.navigate('Room Details', {details});
      // alert(`Scanned ${codes[0].value} codes!`)
    },
  });

  return (
    <LinearGradientView>
      <ScreenHeader title={'Book By Scan'} />
      <View style={styles.container}>
        <Camera
          ref={camera}
          codeScanner={codeScanner}
          style={{
            height: 500, width: '80%',
          marginBottom:100
          }}
          device={device}
          format={format}
          isActive={showCamera}
          photo={true}
          enableZoomGesture={true}
          audio={true}
        />
        <Button
          buttonDetails={{name: 'Scan Now', style: 'scanBtn'}}
          onPress={onPressHandler}
        />
    
      </View>
    </LinearGradientView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeBtn: {
    position: 'absolute',
    right: 0,
    top: 15,
    height: 60,
    width: 60,
    borderRadius: 40,
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',

    alignSelf: 'center',
  },

  button: {
    backgroundColor: 'gray',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
