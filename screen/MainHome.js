import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, Octicons } from '@expo/vector-icons';


function Regio() {
  const [region, set_regio] = React.useState(0)

  return (
    <View style={{ alignSelf: 'center' }}>
      <Text style={{ fontSize: 22, alignSelf: 'center', marginTop: '5%' }}
      >
        Regio {region == 0? ('Depan') : ('Belakang')}
      </Text>

      <Image
        style={{ width: 335, height: 488, alignSelf: 'center' }}
        source={region==0? (require('../assets/img/Regio/depan.png')) : (require('../assets/img/Regio/belakang.png'))}
      />

      <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
        <TouchableOpacity style={{ marginRight: 10 }}
          onPress={() => {set_regio(0)}}
        >
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>

        <Octicons style={{ marginRight: 2.5 }} name={region==0? ('dot-fill') : ('dot')} size={30} color="black" />
        <Octicons style={{ marginLeft: 2.5 }} name={region==1? ('dot-fill') : ('dot')} size={30} color="black" />

        <TouchableOpacity style={{ marginLeft: 10 }}
          onPress={() => {set_regio(1)}}
        >
          <AntDesign name="right" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default function MainHome() {


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <Text style={{ alignSelf: 'center', marginTop: '10%', fontWeight: 'bold', fontSize: 22 }}>
          Sakit Yang Dirasakan
        </Text>
      </View>
      <LinearGradient
        colors={['#A5E5E3', '#62CFCB']}
        style={{
          flex: 8, margin: '5%', borderRadius: 10, shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowOpacity: 0.5,
          shadowRadius: 15,
          elevation: 5,
        }}
      >



        <Regio />



      </LinearGradient>
      <View style={{ flex: 1 }}>
        <View style={{ alignSelf: 'center', width: 131, height: 46 }}>

          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <LinearGradient
              colors={['#A5E5E3', '#62CFCB']}
              style={{
                width: 131, height: 46, borderRadius: 15, shadowColor: 'black',
                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.5,
                shadowRadius: 15,
                elevation: 5,
              }}
            >
              <Text style={{ alignSelf: 'center', padding: 10, color: 'white', fontWeight: 'bold', fontSize: 18 }}>Lanjut</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )


}

const styles = StyleSheet.create({})