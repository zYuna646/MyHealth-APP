import { StyleSheet, Text, Button, View, TouchableOpacity, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import Voice from '@react-native-voice/voice';
import { Foundation, MaterialIcons, Entypo, Fontisto, AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
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
      if(index == 0){
        setHasil(result)
      }
    })
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row', margin: '10%', marginTop: '20%' }}>

        <TouchableOpacity 
          onPress={() => {
            if(started == false){
              startSpeechToText()
            }else if(started == true){
              stopSpeechToText()
            }
          }}
        >
          <Fontisto name="mic" size={45} color={'black'} />
        </TouchableOpacity>
        <TextInput
          editable={false}
          multiline={true}
          style={{ width: 300, height: 200, borderWidth: 1, borderRadius: 5, marginLeft: 10, padding: 10, color: 'black' }}
          onChangeText={setHasil}
          value={results[0]}
        />
      </View>
      <View style={{ flex: 3, flexDirection: 'row', margin: '10%', marginTop: 150 }}>
        <TextInput
          multiline={true}
          style={{ width: 300, height: 200, borderWidth: 1, borderRadius: 5, padding: 10, color: 'black' }}
          onChangeText={setSound}
          value={sound}
        />
        <TouchableOpacity
          onPress={() => {
            Speech.speak(sound)
          }}
        >
          <AntDesign style={{ marginRight: 15, marginLeft: 5 }} name="sound" size={45} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
