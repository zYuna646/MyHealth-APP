import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Foundation, MaterialIcons, Entypo, Fontisto } from '@expo/vector-icons';
import { _retrieve_data } from '../handler/handler_storage';

export default function Profile() {

  const [user, set_user] = React.useState(null)
  const fetchData = async () => {
    const data = await _retrieve_data('user')
    set_user(data)
  }

  React.useEffect(() => {
    fetchData()
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}
    >
      <LinearGradient
        colors={['#A5E5E3', '#62CFCB']}
        style={{ flex: 2, borderBottomRightRadius: 200, borderBottomLeftRadius: 200, marginLeft: -40, marginRight: -40 }}
      >
        <View style={{ alignSelf: 'center', marginTop: '10%' }}>
          <MaterialIcons name="account-circle" size={190} color={'black'} />
          <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 30 }}>{user != null ? (user.username) : ('')}</Text>
        </View>
      </LinearGradient>
      <View style={{ flex: 3, alignSelf: 'center' }}>
        <LinearGradient
          colors={['#A5E5E3', '#62CFCB']}
          style={{
            width: 350, height: 380, marginTop: '10%', borderRadius: 10,
            shadowColor: 'black',
            shadowOffset: {
              width: 0,
              height: 4
            },
            shadowOpacity: 0.5,
            shadowRadius: 15,
            elevation: 5,
          }}
        >
          <View style={{ margin: '5%', marginLeft: '8%', flexDirection: 'row' }}>
            <View>
              <Text style={styles.txt}>Nama Lengkap</Text>
              <Text style={styles.txt}>Tanggal Lahir</Text>
              <Text style={styles.txt}>Jenis Kelamin</Text>
              <Text style={styles.txt}>Riwayat Penyakit</Text>
              <Text style={styles.txt}>Riwayat Operasi</Text>
              <Text style={styles.txt}>Alergi</Text>
              <Text style={styles.txt}>Berat Badan</Text>
              <Text style={styles.txt}>Tinggi Badan</Text>
              <Text style={styles.txt}>Golongan Darah</Text>
            </View>
            <View>
              <Text style={styles.txt}> : </Text>
              <Text style={styles.txt}> : </Text>
              <Text style={styles.txt}> : </Text>
              <Text style={styles.txt}> : </Text>
              <Text style={styles.txt}> : </Text>
              <Text style={styles.txt}> : </Text>
              <Text style={styles.txt}> : </Text>
              <Text style={styles.txt}> : </Text>
              <Text style={styles.txt}> : </Text>
            </View>
            {user != null ?
              (<View>
                <Text style={styles.txt}>{user.data.nama}</Text>
                <Text style={styles.txt}>{user.data.tgl}</Text>
                <Text style={styles.txt}>{user.data.jk}</Text>
                <Text style={styles.txt}>{user.data.penyakit}</Text>
                <Text style={styles.txt}>{user.data.operasi}</Text>
                <Text style={styles.txt}>{user.data.alergi}</Text>
                <Text style={styles.txt}>{user.data.bb}</Text>
                <Text style={styles.txt}>{user.data.tb}</Text>
                <Text style={styles.txt}>{user.data.darah}</Text>
              </View>) :
              (<ActivityIndicator />)}


          </View>
        </LinearGradient>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  txt: {
    fontSize: 15,
    marginTop: 15,
    fontWeight: 'bold'
  }

})