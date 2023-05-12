import { StyleSheet, Text, View, Alert, Button } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { db } from '../api/firebase';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function Register({ navigation }) {
  const [nama, set_nama] = React.useState('')
  const [jk, set_jk] = React.useState('0')
  const [username, set_username] = React.useState('')
  const [password, set_password] = React.useState('')
  const [penyakit, set_penyakit] = React.useState('')
  const [operasi, set_operasi] = React.useState('')
  const [alergi, set_alergi] = React.useState('')
  const [darah, set_darah] = React.useState('A')
  const [bb, set_bb] = React.useState('')
  const [tb, set_tb] = React.useState('')
  const golongan = ["A", "B", "O", "AB"]
  const monthNames = [
    "januari", "februari", "maart", "april", "mei", "juni",
    "juli", "augustus", "september", "oktober", "november", "december"
  ];
  const [date, set_date] = React.useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    set_date(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };


  var radio_props = [
    { label: 'Laki-Laki    ', value: '0' },
    { label: 'Perempuan', value: '1' }
  ];

  const createUser = (username, password, dt) => {
    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data == null) {
        set(ref(db, 'users/' + username), {
          username: username,
          password: password,
          data: dt
        }).then(() => {
          Alert.alert('Buat Akun', 'Berhasil Membuat Akun', [{
            text: 'Ok',
            onPress: () => {
              navigation.navigate('Login')
            }
          }])
        }).catch(e => Alert.alert('Buat Akun', e));
      } else {
        Alert.alert('Buat Akun', 'Nama Pengguna Sudah Digunakan')
      }
    });
   
  }

  const readUser = (username) => {
    
  }


  return (
    <LinearGradient
      colors={['#A5E5E3', '#62CFCB']}
      style={{ flexDirection: 'column', flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <View style={{}}>
          <View style={{ alignSelf: 'flex-start', marginLeft: '5%' }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack()
              }}
            >
              <AntDesign name="arrowleft" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold', position: 'absolute' }}>Buat Akun</Text>
        </View>
      </View>
      <View style={{ flex: 40, }}>
        <View style={styles.container}>
          <View style={{ margin: '5%', marginTop: '1%' }}>
            <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold' }}>Informasi Umum</Text>
            <View style={{}}>
              <Text style={{ marginTop: '0.5%' }}>Nama Lengkap</Text>
              <TextInput
                style={styles.input}
                onChangeText={set_nama}
                value={nama}
                placeholder="Nama Lengkap"
                placeholderTextColor={'rgba(0, 0, 0, 0.5)'
                }
              />
              <Text style={{ marginTop: '0.5%' }}>Tanggal Lahir</Text>
              <TouchableOpacity style={{
                alignSelf: 'center', alignItems: 'center', borderWidth: 1.5, width: 300,
                height: 35, borderRadius: 4
              }}
                onPress={showDatepicker}
              >
                <Text style={{ marginTop: '2%' }}>{`${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`}</Text>
              </TouchableOpacity>
              <Text style={{ marginTop: '0.5%' }}>Jenis Kelamin</Text>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(value) => { set_jk(value) }}
                formHorizontal={true}
                buttonColor={'black'}
              />
              <Text style={{ marginTop: '0.5%' }}>Nama Pengguna</Text>
              <TextInput
                style={styles.input}
                onChangeText={set_username}
                value={username}
                placeholder="Nama Pengguna"
                placeholderTextColor={'rgba(0, 0, 0, 0.5)'
                }
              />
              <Text style={{ marginTop: '0.5%' }}>KataSandi</Text>
              <TextInput
                style={styles.input}
                onChangeText={set_password}
                value={password}
                placeholder="KataSandi"
                placeholderTextColor={'rgba(0, 0, 0, 0.5)'
                }
              />
            </View>
            <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold', marginTop: '0.5%' }}>Informasi Tambahan</Text>
            <View style={{}}>
              <Text style={{ marginTop: '0.5%' }}>Riwayat Penyakit</Text>
              <TextInput
                style={styles.input}
                onChangeText={set_penyakit}
                value={penyakit}
                placeholder="Riwayat Penyakit"
                placeholderTextColor={'rgba(0, 0, 0, 0.5)'
                }
              />
              <Text style={{ marginTop: '0.5%' }}>Riwayat Operasi</Text>
              <TextInput
                style={styles.input}
                onChangeText={set_operasi}
                value={operasi}
                placeholder="Riwayat Operasi"
                placeholderTextColor={'rgba(0, 0, 0, 0.5)'
                }
              />
              <Text style={{ marginTop: '0.5%' }}>Alergi</Text>
              <TextInput
                style={styles.input}
                onChangeText={set_alergi}
                value={alergi}
                placeholder="Alergi"
                placeholderTextColor={'rgba(0, 0, 0, 0.5)'
                }
              />
              <Text style={{ marginTop: '0.5%' }}>Berat Badan (Kg) </Text>
              <TextInput
                style={styles.input}
                onChangeText={set_bb}
                value={bb}
                placeholder="Berat Badan"
                placeholderTextColor={'rgba(0, 0, 0, 0.5)'
                }
                keyboardType='numeric'
              />
              <Text style={{ marginTop: '0.5%' }}>Tinggi Badan (Cm) </Text>
              <TextInput
                style={styles.input}
                onChangeText={set_tb}
                value={tb}
                placeholder="Tinggi Badan"
                placeholderTextColor={'rgba(0, 0, 0, 0.5)'
                }
                keyboardType='numeric'

              />
              <Text style={{ marginTop: '0.5%' }}>Golongan Darah</Text>
              <SelectDropdown
                data={golongan}
                buttonStyle={{ width: 300, height: 35, borderRadius: 4, borderWidth: 1.5, backgroundColor: 'white' }}
                defaultValueByIndex={0}
                onSelect={(value, index) => {
                  set_darah(value)
                }}
              />
            </View>
            <View style={{ alignSelf: 'center', width: 299, height: 38, marginTop: '8%' }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  if (username != '' && password != '' &&
                    nama != '' && date != null && jk != '' &&
                    darah != '' &&
                    bb != '' && tb != '') {
                    readUser(username) 
                    createUser(username, password, {
                      'nama': nama,
                      'date': date,
                      'jk': jk,
                      'penyakit': penyakit,
                      'operasi': operasi,
                      'alergi': alergi,
                      'darah': darah,
                      'bb': bb,
                      'tb': tb,
                    })
                  } else {
                    Alert.alert('Buat Akun', 'Mohon Mengisi Data Dengan Benar')
                  }
                }
                }
              >
                <Text style={{ textAlign: 'center', marginTop: 6, fontWeight: 'bold', fontSize: 18 }}>Masuk</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 700,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '5%',
    shadowColor: 'black',
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
  },
  input: {
    marginTop: '1%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 4,
    color: 'rgba(0, 0, 0, 0.9)',
    width: 300,
    height: 35,
    borderColor: 'black',
    borderWidth: 1.5
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