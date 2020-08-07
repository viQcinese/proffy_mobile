import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'

import styles from './styles'

const TeacherItem = () => {
  return (
    <View style={styles.container}>

      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/viQcinese.png'}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Vitor Senise</Text>
          <Text style={styles.subject}>Filosofia</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore amet natus odit nemo iste nam ex! Reprehenderit ab delectus repudiandae quaerat saepe. Cumque perspiciatis exercitationem consectetur sapiente delectus fugiat quibusdam.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$80</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>

      </View>
    </View>
  )
}

export default TeacherItem