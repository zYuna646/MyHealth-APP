import { StyleSheet, Text, View, Image, KeyboardAvoidingView, ScrollView, TouchableHighlight } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, Octicons } from '@expo/vector-icons';


function Regio() {
  const [region, set_regio] = React.useState(0)
  const [dotDepan, setDotDepan] = React.useState([]);
  const [dotBelakang, setDotBelakang] = React.useState([]);

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

      <View style={{ flexDirection: 'row', alignSelf: 'center',marginTop:'2%' }}>
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
      <TouchableOpacity style={{alignSelf:'center', backgroundColor:'white', padding:3, borderRadius:10, marginTop:'5%'}}
        onPress={() => {
          if(region == 0){
            setDotDepan([])
          }else{
            setDotBelakang([])
          }
        }}
      >
        <Text style={{fontWeight:'bold', fontSize:15}}>Hapus Tanda</Text>
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
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginLeft: '5%', marginTop: '10%' }}>
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

    </View>
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
    'Ya', 'Tidak', 'Sakit', 'Tidak'
  ])

  const [color, set_color] = React.useState(['white', 'white', 'white', 'white'])

  const [hasil, set_hasil] = React.useState(['', '', ''])
  const [lainnya, set_lainnya] = React.useState('')

  const sumbit = (i) => {
    set_lainnya('')
    const newColor = ['white', 'white', 'white', 'white', 'white', 'white']
    if (color[i] != 'white') {
      const newHasil = [...hasil]
      newHasil[(i < 2 ? (0) : (1))] = ''
      set_hasil(newHasil)
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
              const newHasil = [...hasil]
              newHasil[index < 2 ? (0) : (1)] = result
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
      <Text style={{ fontWeight: 'bold', marginLeft: '5%', fontSize: 18 }}>Berapa Lama Menstruasi</Text>
      <View style={{
        alignSelf: 'center', backgroundColor: 'white',
        width: 320, height: 100, marginLeft: 15, borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 15,
        elevation: 5,
      }}>
        <TextInput
          style={{
            backgroundColor: 'rgba(128, 128, 128, 0.5)', height: 80, width: 300,
            marginTop: '2.5  %',
            alignSelf: 'center', borderRadius: 10, padding: 10
          }}
          placeholder='Ketik Disini'
          value={lainnya}
          onChangeText={(props) => {
            set_lainnya(props)
            set_color(['white', 'white', 'white', 'white', 'white', 'white'])
            const newHasil = [...hasil]
            newHasil[2] = props
            set_hasil(newHasil)
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
  return (
    <View>

    </View>
  )
}


export default function MainHome() {

  const form = [<Regio />, <Gejala />, <Konsumsi />, <Sakit />, <Riwayat />, <Menstruasi />, <Hasil />]
  const [index, set_index] = React.useState(0)

  const formText = ['Sakit Yang Dirasakan', 'Gejala Yang Dirasakan', 'Apa Yang Dikonsumsi',
    'Berapa Lama Sakit', 'Riwayat Pengobatan', 'Menstruasi', 'Hasil ']

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <Text style={{ alignSelf: 'center', marginTop: '10%', fontWeight: 'bold', fontSize: 22 }}>
          {formText[index]}
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

        {form[index]}

      </LinearGradient>

      <View style={{ flex: 1 }}>
        <View style={{ alignSelf: 'center', width: 131, height: 46 }}>
          <TouchableOpacity style={{ alignSelf: 'center' }}
            onPress={() => {
              set_index(index + 1)
            }}
          >
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

const styles = StyleSheet.create({




})