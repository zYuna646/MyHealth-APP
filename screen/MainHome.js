import { StyleSheet, Text, View, Image, KeyboardAvoidingView, ScrollView, TouchableHighlight, ActivityIndicator, Modal, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, Octicons } from '@expo/vector-icons';
import { Foundation, MaterialIcons, Entypo, Fontisto, Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import Autocomplete from 'react-native-autocomplete-input';
import { _store_data, _retrieve_data, _remove_data } from '../handler/handler_storage'
import { useIsFocused } from '@react-navigation/native';
import Voice from '@react-native-voice/voice';
import * as Speech from 'expo-speech';
import Comunication from './Comunication';


function Regio() {
  const [region, set_regio] = React.useState(0)
  const [dotDepan, setDotDepan] = React.useState([]);
  const [dotBelakang, setDotBelakang] = React.useState([]);

  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (!isFocused) {
      console.log(dotDepan);
    }

    return () => {
      if (dotDepan.length > 0 || dotBelakang.length > 0) {
        _store_data('Regio', [dotDepan, dotBelakang])
      }
    }
  }, [isFocused, dotDepan, dotBelakang]);


  const addDotDepan = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const newDot = { x: locationX, y: locationY };
    setDotDepan([...dotDepan, newDot]);
  };
  const addDotBelakang = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const newDot = { x: locationX, y: locationY };
    setDotBelakang([...dotBelakang, newDot]);
  };
  return (
    <View style={{ alignSelf: 'center' }}>

      <TouchableHighlight style={{ width: 250, height: 500 }} onPress={region === 0 ? addDotDepan : addDotBelakang}>
        <Image style={{ width: 225, height: 500, alignSelf: 'center' }} source={region === 0 ? require('../assets/img/Regio/depan.png') : require('../assets/img/Regio/belakang.png')} />
      </TouchableHighlight>
      {region === 0 ? (
        dotDepan.map((dot, index) => (
          <View
            key={index}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 0, 0, 0.4)',
              width: 25,
              height: 25,
              borderRadius: 100,
              top: dot.y,
              left: dot.x,
            }}
          />
        ))
      ) : (
        dotBelakang.map((dot, index) => (
          <View
            key={index}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 0, 0, 0.4)',
              width: 25,
              height: 25,
              borderRadius: 100,
              top: dot.y,
              left: dot.x,
            }}
          />
        ))
      )}

      <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: '2%' }}>
        <TouchableOpacity style={{ marginRight: 10 }}
          onPress={() => { set_regio(0) }}
        >
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>

        <Octicons style={{ marginRight: 2.5 }} name={region == 0 ? ('dot-fill') : ('dot')} size={30} color="black" />
        <Octicons style={{ marginLeft: 2.5 }} name={region == 1 ? ('dot-fill') : ('dot')} size={30} color="black" />

        <TouchableOpacity style={{ marginLeft: 10 }}
          onPress={() => { set_regio(1) }}
        >
          <AntDesign name="right" size={30} color="black" />
        </TouchableOpacity>

      </View>
      <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: 'white', padding: 3, borderRadius: 10, marginTop: '5%' }}
        onPress={() => {
          if (region == 0) {
            setDotDepan([])
          } else {
            setDotBelakang([])
          }
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Hapus Tanda</Text>
      </TouchableOpacity>
    </View>
  )
}

function Gejala() {
  const image = [
    require('../assets/img/Gejala/Rectangle21.png'),
    require('../assets/img/Gejala/Rectangle23.png'),
    require('../assets/img/Gejala/Rectangle22.png'),
    require('../assets/img/Gejala/Rectangle24.png'),
    require('../assets/img/Gejala/Rectangle26.png'),
    require('../assets/img/Gejala/Rectangle25.png'),
    require('../assets/img/Gejala/Rectangle27.png'),
    require('../assets/img/Gejala/Rectangle15.png'),
    require('../assets/img/Gejala/Rectangle19.png'),
    require('../assets/img/Gejala/Rectangle20.png'),
    require('../assets/img/Gejala/Rectangle18.png'),
    require('../assets/img/Gejala/Rectangle17.png'),
    require('../assets/img/Gejala/Rectangle16.png'),
    require('../assets/img/Gejala/Rectangle14.png'),
    require('../assets/img/Gejala/Rectangle13.png'),
    require('../assets/img/Gejala/Rectangle28.png'),
    require('../assets/img/Gejala/Rectangle29.png'),
    require('../assets/img/Gejala/Rectangle31.png'),
    require('../assets/img/Gejala/Rectangle30.png')
  ];

  const sakit = [
    'Flu', 'Pusing', 'Demam', 'Tenggorokan', 'Kedinginan', 'Batuk', 'Sesak Napas',
    'Berkeringan', 'Gatal', 'Buang Air Besar', 'Mata Sakit', 'Sakit Dada', 'Tidak Nafsu Makan',
    'Mimisan', 'Muntah', 'Bersin-bersin', 'Kelelahan', 'Lemas', 'Keram'
  ]
  const [lainnya, set_lainnya] = React.useState('')

  const [hasil, setHasil] = React.useState([
    '', '', '', '', '', '', '',
    '', '', '', '', '', '',
    '', '', '', '', '', '', ''
  ])

  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (!isFocused) {
    }
    return () => {
      _store_data('Gejala', hasil)
    }
  }, [isFocused, hasil]);


  const [color, setColor] = React.useState([
    'white', 'white', 'white', 'white', 'white', 'white', 'white',
    'white', 'white', 'white', 'white', 'white', 'white',
    'white', 'white', 'white', 'white', 'white', 'white'
  ])


  const select = (index) => {
    const newColor = [...color];
    const newHasil = [...hasil];
    if (newHasil[index] === '') {
      newHasil[index] = sakit[index];
      newColor[index] = 'green';
    } else {
      newColor[index] = 'white';
      newHasil[index] = '';
    }
    setColor(newColor);
    setHasil(newHasil);
  }

  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginLeft: '5%', marginTop: '10%' }}>
      {image.map((result, index) => (
        <LinearGradient
          colors={[color[index], '#D9D9D9']}
          style={{
            backgroundColor: 'red',
            flexBasis: '20%',
            height: 70,
            marginRight: '5%',
            marginTop: '5%',
            borderRadius: 10,
            shadowColor: 'black',
            shadowOffset: {
              width: 4,
              height: 4
            },
            shadowOpacity: 0.5,
            shadowRadius: 15,
            elevation: 5,
          }}
          key={index}
        >
          <TouchableOpacity style={{ flexBasis: 70, height: 70 }}
            onPress={() => {
              select(index)
            }}
          >
            <Image
              style={{ width: 40, height: 40, alignSelf: 'center', marginTop: '5%' }}
              source={result}
            />
            <Text style={{ alignSelf: 'center', fontSize: 10, textAlign: 'center' }}>{sakit[index]}</Text>
          </TouchableOpacity>
        </LinearGradient>
      ))}

      <LinearGradient
        colors={['white', '#D9D9D9']}
        style={{
          width: '90%', borderRadius: 10, height: 80, marginTop: '5%', shadowColor: 'black',
          shadowOffset: {
            width: 4,
            height: 4
          },
          shadowOpacity: 0.5,
          shadowRadius: 15,
          elevation: 5,
        }}
      >
        <View style={{ marginLeft: '5%' }}>
          <Text style={{ fontSize: 15 }}>Lainnya</Text>
          <TextInput
            style={{ width: '90%', height: 50, backgroundColor: 'rgba(128, 128, 128, 0.5)', padding: 10, borderRadius: 10 }}
            onChangeText={(props) => {
              set_lainnya(props)
              const newHasil = [...hasil];
              newHasil[20] = props
              setHasil(newHasil)
            }}
            placeholder='Ketik Disini'
            value={lainnya}
          />
        </View>
      </LinearGradient>
      <View
        style={{
          width: '90%', borderRadius: 10, height: 80, marginTop: '5%'
        }}
      >
      </View>

    </ScrollView>
  );
}

function Konsumsi() {
  const [konsumsi, set_konsumsi] = React.useState(['', '', '', ''])

  const image = [
    require('../assets/img/Sakit/pagi.png'),
    require('../assets/img/Sakit/siang.png'),
    require('../assets/img/Sakit/sore.png'),
    require('../assets/img/Sakit/malam.png'),
  ]

  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (!isFocused) {
    }
    return () => {
      _store_data('Konsumsi', konsumsi)
    }
  }, [isFocused, konsumsi]);


  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'column', flexWrap: 'wrap', alignSelf: 'center' }}>
      {image.map((result, index) => (
        <View key={index} style={{
          alignSelf: 'center', backgroundColor: 'white', width: 300, flexBasis: '20%', height: 124, marginRight: '5%', marginTop: 15, borderRadius: 10, shadowColor: 'black',
          shadowOffset: {
            width: 6,
            height: 6
          },
          shadowOpacity: 0.5,
          shadowRadius: 15,
          elevation: 5,
        }} >
          <View style={{ flexDirection: 'row', padding: 5, }}>
            <Image
              source={result}
              style={{ height: 118, width: 62 }}
            />
            <TextInput
              value={konsumsi[index]}
              onChangeText={(props) => {
                const newKonsumsi = [...konsumsi]
                newKonsumsi[index] = props
                set_konsumsi(newKonsumsi)
              }}
              placeholder='Ketik Disini'
              style={{ padding: 10, marginLeft: 5, width: 216, height: 107, backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 5 }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

function Sakit() {
  const [Btn, set_btn] = React.useState([
    '1 Hari', '2 Hari', '3 Hari', '4 Hari', '5 Hari', '6 Hari'
  ])

  const [color, set_color] = React.useState(['white', 'white', 'white', 'white', 'white', 'white'])

  const [hasil, set_hasil] = React.useState('')
  const [lainnya, set_lainnya] = React.useState('')

  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (!isFocused) {
    }
    return () => {
      _store_data('Sakit', hasil)
    }
  }, [isFocused, hasil]);


  const sumbit = (i) => {
    set_lainnya('')
    const newColor = ['white', 'white', 'white', 'white', 'white', 'white']
    if (color[i] != 'white') {
      set_hasil('')
    } else {
      newColor[i] = 'green'
    }
    set_color(newColor)
  }

  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: '15%' }}>
      {Btn.map((result, index) => (
        <View key={index} style={{
          alignSelf: 'center', backgroundColor: color[index], width: 150, flexBasis: '40%', height: 74, margin: '5%', borderRadius: 10,
          shadowColor: 'black',
          shadowOffset: {
            width: 4,
            height: 4
          },
          shadowOpacity: 0.5,
          shadowRadius: 15,
          elevation: 5,
        }} >
          <TouchableOpacity style={{ height: 74, width: 150, alignSelf: 'center' }}
            onPress={() => {
              set_hasil(result)
              sumbit(index)
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 18, alignSelf: 'center', paddingTop: '15%' }}>
              {result}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={{
        alignSelf: 'center', backgroundColor: 'white',
        width: 320, height: 110, marginLeft: 15, borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 15,
        elevation: 5,
      }}>
        <Text style={{ fontSize: 15, marginLeft: 5, marginTop: 5 }}>Lainnya</Text>
        <TextInput
          style={{
            backgroundColor: 'rgba(128, 128, 128, 0.5)', height: 70, width: 300,
            alignSelf: 'center', borderRadius: 10, padding: 10
          }}
          placeholder='Ketik Disini'
          value={lainnya}
          onChangeText={(props) => {
            set_lainnya(props)
            set_color(['white', 'white', 'white', 'white', 'white', 'white'])
            set_hasil(props)
          }}
        />
      </View>
      <View style={{
        alignSelf: 'center',
        width: 320, height: 110, marginLeft: 15, borderRadius: 10,
      }}></View>
    </ScrollView>
  );
}

function Menstruasi() {
  const [Btn, set_btn] = React.useState([
    '1 hari', '2 hari', '3 hari', '4 hari', '5 hari', '6 hari', '7 hari', 'Tidak Tau'
  ])

  const isFocused = useIsFocused();
  const [color, set_color] = React.useState(['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white',])

  const [hasil, set_hasil] = React.useState(['', ''])
  const [lainnya, set_lainnya] = React.useState('')
  const [dot, set_dot] = React.useState(['dot', 'dot', 'dot'])

  React.useEffect(() => {
    if (!isFocused) {
    }
    return () => {
      _store_data('Menstruasi', hasil)
    }
  }, [isFocused, hasil]);



  const sumbit = (i) => {
    set_lainnya('')
    let newColor = [...color]
    if (color[i] != 'white') {
      const newHasil = [...hasil]
      newHasil[0] = ''
      set_hasil(newHasil)
      newColor[i] = 'white'
    } else {
      newColor = ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white',]
      newColor[i] = 'green'
    }
    set_color(newColor)
  }



  return (
    <ScrollView>
      <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: '15%' }}>
        <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>Berapa Hari Menstruasi Terjadi?</Text>
        {Btn.map((result, index) => (
          <View key={index} style={{
            alignSelf: 'center', backgroundColor: color[index], width: 150, flexBasis: '40%', height: 74, margin: '5%', borderRadius: 10,
            shadowColor: 'black',
            shadowOffset: {
              width: 4,
              height: 4
            },
            shadowOpacity: 0.5,
            shadowRadius: 15,
            elevation: 5,
          }} >
            <TouchableOpacity style={{ height: 74, width: 150, alignSelf: 'center' }}
              onPress={() => {
                const newHasil = [...hasil]
                newHasil[0] = result
                set_hasil(newHasil)
                sumbit(index)
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 18, alignSelf: 'center', paddingTop: '15%' }}>
                {result}
              </Text>
            </TouchableOpacity>
          </View>
        ))}

      </ScrollView>
      <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>Apakah Perut Terasa Sakit?</Text>
      <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', }}>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <View style={{ margin: '10%', marginTop: '1%', alignSelf: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                const newHasil = [...hasil]
                const newDot = ['dot', 'dot', 'dot']
                newDot[0] = 'dot-fill'
                newHasil[1] = 'Tidak'
                set_hasil(newHasil)
                set_dot(newDot)
              }}>
              <Octicons name={dot[0]} size={50} color="yellow" />
            </TouchableOpacity>
            <Text>
              Tidak
            </Text>
          </View>
          <View style={{ margin: '10%', marginTop: '1%', alignSelf: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                const newHasil = [...hasil]
                const newDot = ['dot', 'dot', 'dot']
                newDot[1] = 'dot-fill'
                newHasil[1] = 'Sakit'
                set_hasil(newHasil)
                set_dot(newDot)
              }} >
              <Octicons name={dot[1]} size={50} color="orange" />
            </TouchableOpacity>
            <Text>
              Sakit
            </Text>
          </View>
          <View style={{ margin: '10%', marginTop: '1%', alignSelf: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                const newHasil = [...hasil]
                const newDot = ['dot', 'dot', 'dot']
                newDot[2] = 'dot-fill'
                newHasil[1] = 'Sangat Sakit'
                set_hasil(newHasil)
                set_dot(newDot)
              }}
            >
              <Octicons name={dot[2]} size={50} color="red" />
            </TouchableOpacity>
            <Text>
              Sangat Sakit
            </Text>
          </View>


        </View>

      </ScrollView>

    </ScrollView>

  );
}

function Riwayat() {
  const [Btn, set_btn] = React.useState([
    'Ya', 'Tidak'
  ])

  const [color, set_color] = React.useState(['white', 'white'])

  const [hasil, set_hasil] = React.useState('')

  const sumbit = (i) => {
    const newColor = ['white', 'white']
    if (color[i] != 'white') {
      set_hasil('')
    } else {
      newColor[i] = 'green'
    }
    set_color(newColor)
  }

  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (!isFocused) {
    }
    return () => {
      _store_data('Riwayat', hasil)
    }
  }, [isFocused, hasil]);


  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: '50%' }}>
      {Btn.map((result, index) => (
        <View key={index} style={{
          alignSelf: 'center', backgroundColor: color[index], width: 150, flexBasis: '40%', height: 74, margin: '5%', borderRadius: 10,
          shadowColor: 'black',
          shadowOffset: {
            width: 4,
            height: 4
          },
          shadowOpacity: 0.5,
          shadowRadius: 15,
          elevation: 5,
        }} >
          <TouchableOpacity style={{ height: 74, width: 150, alignSelf: 'center' }}
            onPress={() => {
              set_hasil(result)
              sumbit(index)
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 18, alignSelf: 'center', paddingTop: '15%' }}>
              {result}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}


function Hasil() {

  const [hasil, set_hasil] = React.useState(null)
  const [user, set_user] = React.useState(null)
  React.useState(() => {
    const fetchData = async () => {
      const Regio = await _retrieve_data('Regio')
      let Gejala = await _retrieve_data('Gejala')
      let Konsumsi = await _retrieve_data('Konsumsi')
      const Sakit = await _retrieve_data('Sakit')
      let Menstruasi = await _retrieve_data('Menstruasi')
      const Riwayat = await _retrieve_data('Riwayat')
      const Aktivitas = await _retrieve_data('Aktivitas')
      const data = await _retrieve_data('user')

      if (Konsumsi == null) {
        Konsumsi = ['', '', '', '']
      }


      if (Gejala != null) {
        Gejala = Gejala.filter(Boolean)
        Gejala = Gejala.join(' , ')
      }

      if (Menstruasi != null) {
        Menstruasi = Menstruasi.filter(Boolean)
        Menstruasi = Menstruasi.join(' , ')
      }

      if (Aktivitas == null) {
        Aktivitas = ['', '']
      }

      set_hasil({
        'Regio': Regio,
        'Gejala': Gejala,
        'Konsumsi': Konsumsi,
        'Sakit': Sakit,
        'Menstruasi': Menstruasi,
        'Riwayat': Riwayat,
        'Aktivitas': Aktivitas
      })

      set_user(data)
    }

    fetchData()
  }, [])

  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };



  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ margin: '5%', marginLeft: '8%', flexDirection: 'row' }}>
        <View>
          <View>
            <Text style={styles.txt}>Sakit Yang Dirasakan</Text>
            <Text style={styles.txt}>Gejala</Text>
          </View>
          <View style={{}}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 80
            }}>Yang Dikonsumsi</Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 10
            }}>Pagi</Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 25
            }}>Siang</Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 25
            }}>Sore</Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 25
            }}>Malam</Text>

          </View>
          <View style={{}}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 80
            }}>Aktivitas</Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 10
            }}>Kemarin</Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 25
            }}>Hari Ini</Text>
          </View>
          <View style={{}}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 25
            }}>Berapa Lama Sakit</Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 25
            }}>Riwayat Pengobatan</Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 25
            }}>{hasil != null ? (hasil.Menstruasi == null ? ('') : ('Menstruasi')) : ('')}</Text>
          </View>


        </View>
        <View>
          <View>
            <Text style={styles.txt}>  </Text>
            <Text style={styles.txt}> : </Text>
          </View>
          <View style={{}}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 80
            }}>  </Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 10
            }}> : </Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 25
            }}> : </Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 25
            }}> : </Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 25
            }}> : </Text>

          </View>
          <View style={{}}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 80
            }}>  </Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 10
            }}> : </Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 25
            }}> : </Text>
          </View>
          <View style={{}}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 25
            }}> : </Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 25
            }}> : </Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 25
            }}>{hasil != null ? (hasil.Menstruasi == null ? ('') : (' : ')) : ('')}</Text>
          </View>
        </View>
        {user != null && hasil != null ?
          (
            <View>
              <View style={{ position: 'absolute' }}>
                <Text style={styles.txt}></Text>
                <TextInput
                  onPress={toggleModal}
                  editable={false}
                  multiline={true}
                  value={hasil.Gejala}
                  style={{ width: 150, fontWeight: 'bold', fontSize: 15, padding: 10, color: 'black' }}
                />
              </View>
              <View style={{}}>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginTop: 132
                }}>  </Text>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginTop: 10
                }}>{hasil.Konsumsi[0]}</Text>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginTop: 25
                }}>{hasil.Konsumsi[1]}</Text>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginTop: 25
                }}>{hasil.Konsumsi[2]}</Text>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginTop: 25
                }}>{hasil.Konsumsi[3]}</Text>
              </View>
              <View style={{}}>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginTop: 79
                }}>  </Text>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginTop: 10
                }}>{hasil.Aktivitas[0]}</Text>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginTop: 25
                }}>{hasil.Aktivitas[1]}</Text>
              </View>
              <View style={{}}>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginTop: 25
                }}>{hasil.Sakit}</Text>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginTop: 25
                }}>{hasil.Riwayat}</Text>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginTop: 25
                }}>{hasil.Menstruasi}</Text>
              </View>

            </View>) :
          (<ActivityIndicator />)}
      </View>
    </ScrollView>

  )
}
function HasilRegio() {
  const [region, set_regio] = React.useState(0)
  const [dotDepan, setDotDepan] = React.useState([]);
  const [dotBelakang, setDotBelakang] = React.useState([]);

  const isFocused = useIsFocused();

  React.useEffect(() => {
    const fetchData = async () => {
      let Regio = await _retrieve_data('Regio')
      if (Regio == null) {
        Regio = [[], []]
      }
      setDotDepan(Regio[0])
      setDotBelakang(Regio[1])
    }
    fetchData()
  }, []);


  const addDotDepan = (event) => {
  };
  const addDotBelakang = (event) => {
  };
  return (
    <View style={{ alignSelf: 'center' }}>
      <Image style={{ width: 225, height: 500, alignSelf: 'center' }} source={region === 0 ? require('../assets/img/Regio/depan.png') : require('../assets/img/Regio/belakang.png')} />
      {region === 0 ? (
        dotDepan.map((dot, index) => (
          <View
            key={index}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 0, 0, 0.4)',
              width: 25,
              height: 25,
              borderRadius: 100,
              top: dot.y,
              left: dot.x,
            }}
          />
        ))
      ) : (
        dotBelakang.map((dot, index) => (
          <View
            key={index}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 0, 0, 0.4)',
              width: 25,
              height: 25,
              borderRadius: 100,
              top: dot.y,
              left: dot.x,
            }}
          />
        ))
      )}

      <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: '2%' }}>
        <TouchableOpacity style={{ marginRight: 10 }}
          onPress={() => { set_regio(0) }}
        >
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>

        <Octicons style={{ marginRight: 2.5 }} name={region == 0 ? ('dot-fill') : ('dot')} size={30} color="black" />
        <Octicons style={{ marginLeft: 2.5 }} name={region == 1 ? ('dot-fill') : ('dot')} size={30} color="black" />

        <TouchableOpacity style={{ marginLeft: 10 }}
          onPress={() => { set_regio(1) }}
        >
          <AntDesign name="right" size={30} color="black" />
        </TouchableOpacity>

      </View>
    </View>
  )
}

function Aktivitas() {

  const isFocused = useIsFocused();

  const [hasil, set_hasil] = React.useState(['', ''])

  React.useEffect(() => {
    if (!isFocused) {
    }
    return () => {
      _store_data('Aktivitas', hasil)
    }
  }, [isFocused, hasil]);

  return (
    <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{
        backgroundColor: 'white',
        margin: '5%',
        borderWidth: 1,
        borderColor: 'gray'
      }}>
        <Text style={{ backgroundColor: '#62CFCB', padding: '2%' }}>Aktivitas Kemarin</Text>
        <TextInput
          multiline={true}
          style={{ width: 250, height: 200, color: 'black', padding: 10 }}
          onChangeText={text => set_hasil(prevState => [text, prevState[1]])}
          value={hasil[0]}
        />
      </View>
      <View style={{
        backgroundColor: 'white',
        margin: '5%',
        borderWidth: 1,
        borderColor: 'gray'
      }}>
        <Text style={{ backgroundColor: '#62CFCB', padding: '2%' }}>Aktivitas Hari Ini</Text>
        <TextInput
          multiline={true}
          style={{ width: 250, height: 200, color: 'black', padding: 10 }}
          onChangeText={text => set_hasil(prevState => [prevState[0], text])}
          value={hasil[1]}
        />
      </View>
    </ScrollView>
  )
}


export default function MainHome() {

  const form = [<Comunication />, <Regio />, <Gejala />, <Konsumsi />, <Sakit />, <Riwayat />, <Menstruasi />, <Aktivitas />, <Hasil />, <HasilRegio />]
  const [index, set_index] = React.useState(0)
  const [user, set_user] = React.useState(null)
  const formText = ['Percakapan', 'Bagian Tubuh Yang Sakit', 'Apa Yang Dirasakan', 'Apa Yang Dikonsumsi',
    'Kurun Waktu Sakit Yang Dirasakan', 'Riwayat Pengobatan', 'Siklus Menstruasi', 'Aktvitas Yang Dilakukan', 'Hasil ', 'Hasil Regio']
  const icon = [<Entypo style={{ alignSelf: 'center' }} name="mic" size={25} color="gray" />,
  <Ionicons style={{ alignSelf: 'center' }} name="body" size={25} color="gray" />, <Entypo name="emoji-sad" style={{ alignSelf: 'center' }} size={25} color="gray" />,
  <Entypo style={{ alignSelf: 'center' }} name="bowl" size={25} color="gray" />, <Entypo style={{ alignSelf: 'center' }} name="squared-plus" size={25} color="gray" />,
  <FontAwesome5 style={{ alignSelf: 'center' }} name="pills" size={25} color="gray" />, <Entypo name="drop" style={{ alignSelf: 'center' }} size={25} color="gray" />,
  <Feather style={{ alignSelf: 'center' }} name="activity" size={25} color="gray" />
    ,
  <FontAwesome5 style={{ alignSelf: 'center' }} name="notes-medical" size={25} color="gray" />, <Ionicons style={{ alignSelf: 'center' }} name="md-body-outline" size={25} color="gray" />, 
  ]
  const iconName = ['Percakapan', 'Regio', 'Gejala', 'Konsumsi', 'Kesehatan', 'Pengobatan', 'Menstruasi', 'Aktivitas', 'Hasil', 'Hasil Regio']
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await _retrieve_data('user')
      set_user(data)
    }
    fetchData()


  }, [])



  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={{ flex: 1, marginTop: '5%' }}>
        <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 22 }}>
          {formText[index]}
        </Text>
      </View>

      <LinearGradient
        colors={['#A5E5E3', '#62CFCB']}
        style={{
          flex: 8, margin: '5%', marginTop: '-10%', borderRadius: 10, shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowOpacity: 0.5,
          shadowRadius: 15,
          elevation: 5,
        }}
      >
        {form[index]}

      </LinearGradient>
      <ScrollView horizontal style={{ backgroundColor: '#62CFCB', flexDirection: 'row', height: 5 }}>
        {icon.map((result, index) => (
          <View key={index} style={{ alignSelf: 'center', justifyContent: 'center', margin: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 100,
                width: 50,
                height: 50,
                justifyContent: 'center',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                margin: 1,
                alignSelf: 'center',
                marginBottom: 1,
                shadowRadius: 2,
                elevation: 2,
              }}
              onPress={() => {
                set_index(index)
              }}
            >
              {icon[index]}
            </TouchableOpacity>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              {iconName[index]}
            </Text>
          </View>
        ))}
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  txt: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5
  },

})
