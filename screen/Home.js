import { Alert, Button, StyleSheet, Text, View, Image, Modal } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home() {
    const [menu, set_menu] = React.useState(false)
    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={menu}
                onRequestClose={() => {
                    set_menu(!menu)
                }}>
                <View style={{ alignItems: 'center', alignSelf: 'center', width:'100%', backgroundColor: 'rgba(0, 0, 0, 0.5)'  }}>
                    <LinearGradient
                        colors={['#A5E5E3', '#62CFCB']}
                        style={{margin: '25%', width:'70%', height:'70%', borderRadius: 15}  }
                    >
                        <Text>Petunjuk</Text>
                    </LinearGradient>
                </View>
            </Modal>

            <View style={styles.header}>
                <Image
                    style={{ width: 146, height: 53, marginTop: '10%' }}
                    source={require('../assets/img/Home/home.png')}
                    resizeMode='cover'
                />
                <Image
                    style={{ width: 350, height: 350, position: 'absolute', marginTop: '9.9%' }}
                    source={require('../assets/img/Home/medis.png')}
                    resizeMode='cover'
                    borderRadius={100}
                />
            </View>
            <View style={styles.main}>
                <Text style={styles.TextTitle}>Selamat Datang</Text>
                <Text style={styles.TextTitle}>My Health</Text>
                <Text style={styles.TextParagraf}>
                    Aplikasi my health digunakan sebagai
                    alat bantu komunikasi
                    teman tuli Saat melakukan konsultasi dan pemeriksaan kesehatan kepada dokter
                </Text>
            </View>
            <View style={styles.footer}>
                <View style={{ margin: '5%' }}>
                    <TouchableOpacity style={{
                        borderRadius: 15,
                        shadowColor: 'black',
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 15,
                        elevation: 5
                    }}
                        onPress={() => {
                            set_menu(!menu)
                        }}
                    >
                        <LinearGradient
                            colors={['#A5E5E3', '#62CFCB']}
                            style={styles.button}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.buttonText}>Petunjuk</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{ margin: '5%', }}>
                    <TouchableOpacity style={{
                        borderRadius: 15,
                        shadowColor: 'black',
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 15,
                        elevation: 5
                    }}
                        onPress={() => {
                            Alert.alert('Login', 'Sabar Masih Sementara Bikin')
                        }}
                    >
                        <LinearGradient
                            colors={['#A5E5E3', '#62CFCB']}
                            style={styles.button}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        height: '50%',
        backgroundColor: '#BCEEFF',
        borderBottomEndRadius: 200,
        borderBottomStartRadius: 200,
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
        marginRight: -40,
        marginLeft: -40,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 15,
        elevation: 5,
        alignItems: 'center'
    },

    main: {
        marginTop: '10%',
    },


    footer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '5%'
    },

    TextTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
    },

    TextParagraf: {
        textAlign: 'center',
        fontSize: 16,
        color: 'gray',
        margin: '5%'
    },
    button: {
        width: 130,
        height: 50,
        alignItems: 'center',
        borderRadius: 15,
    },

    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '5%'
    }

})