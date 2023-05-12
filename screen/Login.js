import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'

export default function Login({ navigation }) {
  const [username, set_username] = React.useState('')
  const [password, set_password] = React.useState('')

  React.useEffect(() => {
  }, [])

  const LoginHandler = () => {
    navigation.navigate('MainHome')
  }

  return (
    <LinearGradient
      colors={['#A5E5E3', '#62CFCB']}
      style={{ flexDirection: 'column', flex: 1 }}
    >
      <View style={styles.header}>
        <View style={{ alignSelf: 'flex-start', margin: '10%' }}>
          <TouchableOpacity onPress={() => {
            navigation.goBack()
          }}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <View style={{ alignSelf: 'center', marginTop: '5%' }}>
          <Image
            source={require('../assets/img/Home/heart.png')}
            resizeMode='cover'
          />
        </View>
        <View style={{ alignSelf: 'center', marginTop: '5%' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Masuk</Text>

        </View>
        <View style={{ marginTop: '5%' }}>
          <Text style={{ marginLeft: '15%', marginBottom: '2%', marginTop: '5%', fontWeight: 'bold' }}>Nama Pengguna</Text>
          <TextInput
            style={styles.input}
            onChangeText={set_username}
            value={username}
            placeholder="Nama Pengguna"
            placeholderTextColor={'rgba(255, 255, 255, 0.5)'
            }
          />
          <Text style={{ marginLeft: '15%', marginBottom: '2%', marginTop: '5%', fontWeight: 'bold' }}>Kata Sandi</Text>
          <TextInput
            style={styles.input}
            onChangeText={set_password}
            value={password}
            placeholder="Kata Sandi"
            placeholderTextColor={'rgba(255, 255, 255, 0.5)'
            }
          />
          <View style={{ alignSelf: 'center', width: 299, height: 38, marginTop: '10%' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={LoginHandler}
            >
              <Text style={{ textAlign: 'center', marginTop: 6, fontWeight: 'bold', fontSize: 18 }}>Masuk</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }} >
            <Text style={{ textAlign: 'center', marginTop: '2%', fontSize: 16, color: 'gray' }}>Belum Punya Akun? Buat Akun
            </Text>
            <View style={{ marginTop: '2%', marginLeft: '2%' }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Register')
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'gray', textDecorationLine: 'underline' }}>Disini</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },

  main: {
    flex: 6,
  },

  input: {
    alignSelf: 'center',
    width: 299,
    height: 38,
    borderColor: 'black',
    borderRadius: 6,
    borderWidth: 2,
    padding: 10,
    color: 'rgba(255, 255, 255, 0.8)'
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 6,
    height: 299,
    height: 38,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5
  }

})