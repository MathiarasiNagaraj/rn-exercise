import React from 'react'
import {Text, StyleSheet, SafeAreaView, StatusBar, View,Platform} from 'react-native';
export const CustomStatusBar = ({backgroundColor, ...props}) => {
  return (
    <View style={[styles.statusBar]}>
    <SafeAreaView>
              <StatusBar translucent={true} backgroundColor="transparent" {...props} />
    </SafeAreaView>
  </View>
  )
}
const STATUSBAR_HEIGHT = StatusBar.currentHeight;


const styles = StyleSheet.create({

    statusBar: {
        height: STATUSBAR_HEIGHT,
    }
})