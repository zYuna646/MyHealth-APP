import { StyleSheet, Text, Button, View, TouchableOpacity, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import Voice from '@react-native-voice/voice';
import { Foundation, MaterialIcons, Entypo, Fontisto, AntDesign } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';



export default function Comunication() {
  let [started, setStarted] = useState(false);
  let [results, setResults] = useState([]);
  const [hasil, setHasil] = useState('')
  const [sound, setSound] = useState('')

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  }, []);

  const startSpeechToText = async () => {
    await Voice.start("id-ID");
    setStarted(true);
  };

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
  };

  const onSpeechResults = (result) => {
    result.value.map((result, index) => {
      if (index == 0) {
        setHasil(result)
      }
    })
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={{ backgroundColor: '#62CFCB', padding: '2%' }}>Rekam Suara Disini</Text>
        <TextInput
          editable={false}
          multiline={true}
          style={{ width: 250, height: 200, color: 'black', padding: '5%' }}
          onChangeText={setHasil}
          value={results[0]}
        />
        <View style={{ alignSelf: 'center', marginBottom: '2%' }}>
          <TouchableOpacity
            onPress={() => {
              if (started == false) {
                startSpeechToText()
              } else if (started == true) {
                stopSpeechToText()
              }
            }}
          >
            <Fontisto name="mic" size={30} color={'black'} />
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.box}>
        <Text style={{ backgroundColor: '#62CFCB', padding: '2%' }}>Ketik Disini</Text>
        <TextInput
          multiline={true}
          style={{ width: 250, height: 200, color: 'black', padding: '5%' }}
          onChangeText={setSound}
          value={sound}
        />
        <View style={{ alignSelf: 'center', marginBottom: '2%' }}>
          <TouchableOpacity
            onPress={() => {
              Speech.speak(sound)
            }}
          >
            <AntDesign style={{ }} name="sound" size={30} color="black" />
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  box: {
    backgroundColor: 'white',
    margin: '10%',
    marginBottom: '0.5%',
    borderWidth: 1,
    borderColor: 'gray'
  }
});
