import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

// TypeScript não entende a importação de PNG pro React Native. Isso precisa ser declarado
// Fazemos isso na pasta @types
import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import hearIcon from '../../assets/images/icons/heart.png'


function Landing() {

  const navigation = useNavigation()

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses')
  }

  function handleNavigateToStudyPages() {
    navigation.navigate('Study')
  }

  return (
    <View style={styles.container}>

      <Image style={styles.banner} source={landingImg} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'} 
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>

        <RectButton 
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToStudyPages}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton 
          style={[styles.button, styles.buttonSecondary]} 
          onPress={handleNavigateToGiveClassesPage}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>

      </View>

      <Text style={styles.totalConnections}>
        Total de 73 conexões já realizadas {' '}
        <Image source={hearIcon} />
      </Text>

    </View>
  )
}

export default Landing