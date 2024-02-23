import React from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import ScreenHeader from '../components/ScreenHeader'
import { LinearGradientView } from '../containers/LinearGradientView'

const MyAccount = () => {
  return (
      <LinearGradientView>
          <ScreenHeader title={'My Account'} />
          <ScrollView>
              <View>
                  <Text>profile image</Text>
              </View>
              <TextInput placeholder='Email' />
              <TextInput placeholder='Password' />
              <TextInput placeholder='City'/>
         </ScrollView>
</LinearGradientView>
  )
}

export default MyAccount