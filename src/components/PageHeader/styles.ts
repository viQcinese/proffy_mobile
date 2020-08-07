import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    // paddingTop: 25,
    paddingVertical: 40,
    backgroundColor: "#8257e5"
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    // marginBottom: 40,
    // marginTop: 20,
    marginVertical: 40,

  }

})

export default styles