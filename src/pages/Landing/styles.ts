import { StyleSheet } from 'react-native'
import { Poppins_400Regular } from '@expo-google-fonts/poppins'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#8257e5",
    justifyContent: "center",
    padding: 40,
  },
  
  banner: {
    // Image ocupies the whole width
    width: "100%",
    // On resize, Image does not distort, nor loose borders, but diminishes
    resizeMode: "contain",
  },

  // Have to import expo-google-fonts to use google fonts on react native
  // expo install expo-font @expo-google-fonts/fontname
  title: {
    fontFamily: "Poppins_400Regular",
    color: "#FFF",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 40,
  },
  
  titleBold: {
    fontFamily: "Poppins_600SemiBold"
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between"
  },

  button: {
    height: 150,
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between"
  },

  buttonPrimary: {
    backgroundColor: "#9871F5"
  },

  buttonSecondary: {
    backgroundColor: "#04D361"
  },

  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 20
  },

  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: "#d4c2FF",
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  }
})

export default styles