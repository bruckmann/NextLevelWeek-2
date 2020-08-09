import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
        style={styles.avatar}
        source={{ uri: 'https://avatars2.githubusercontent.com/u/13594618?s=460&u=afbd54a9945bc5d061edbe307d0c993de3c9813e&v=4'}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Felipe Bruckmann</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <Text style={styles.bio}>Insusiasta das melhores tecnologias de química avançada.
      {'\n'}{'\n'}
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiencias incriveis.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
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