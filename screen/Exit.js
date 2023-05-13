import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Foundation, MaterialIcons, Entypo, Fontisto } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { _remove_data } from '../handler/handler_storage';


export default function Exit({ navigation }) {
    return (
        <View styles={{ flex: 1 }}>
            <LinearGradient
                colors={['#A5E5E3', '#62CFCB']}
                style={{
                    height: 430, width: 320, alignSelf: 'center', margin: '5%', marginTop: '40%', shadowColor: 'black',
                    borderRadius: 15,
                    shadowOffset: {
                        width: 0,
                        height: 4
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 15,
                    elevation: 5,
                }}
            >
                <View style={{ alignSelf: 'center', marginTop: '30%' }}>
                    <Entypo style={{ alignSelf: 'center' }} name="log-out" size={95} color={'black'} />
                    <Text style={{ alignSelf: 'center', marginTop: '5%', fontWeight: 'bold', fontSize: 16 }}>Apa Anda Yakin Ingin Keluar?</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: '10%', alignSelf: 'center' }}>
                    <View style={{ width: 100, height: 43, marginRight: '5%' }}>
                        <TouchableOpacity style={{
                            height: 43, backgroundColor: 'white', borderRadius: 15, shadowOffset: {
                                width: 0,
                                height: 4
                            },
                            shadowOpacity: 0.5,
                            shadowRadius: 15,
                            elevation: 5,
                        }}  
                            onPress={async() => {
                                await _remove_data('user').then(() => {
                                    navigation.navigate('Home')
                                })
                            }}
                        >
                            <Text style={{ alignSelf: 'center', padding: 10, fontWeight: 'bold', fontSize: 16 }}>Ya</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: 100, height: 43, marginLeft: '5%', }}>
                        <TouchableOpacity style={{
                            height: 43, backgroundColor: 'white', borderRadius: 15, shadowOffset: {
                                width: 0,
                                height: 4
                            },
                            shadowOpacity: 0.5,
                            shadowRadius: 15,
                            elevation: 5,
                        }}  
                            onPress={() => {
                                navigation.jumpTo('HomeTabs')
                            }}
                        >
                            <Text style={{ alignSelf: 'center', padding: 10, fontWeight: 'bold', fontSize: 16 }}>Tidak</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({})