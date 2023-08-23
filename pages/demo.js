import i18next from '../services/i18next';
import { useTranslation } from 'react-i18next';

import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const demo = () => {
    const { t } = useTranslation();
    const [lng,setLng] = useState('zn');

    const changeLng = () => {
        if(lng == 'en'){
            setLng('zn')
        }
        else{
            setLng('en')
        }
        i18next.changeLanguage(lng);
        console.log(lng)
    }

  return (
    <View>
        <Text style={styles.sectionDescription}>{t('demo')}</Text>
        <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={changeLng}>
            <Text style={styles.buttonText}>Change Language</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    sectionDescription: {
      marginTop: 10,
      fontSize: 28,
      fontWeight: '400',
    },
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
  });

export default demo