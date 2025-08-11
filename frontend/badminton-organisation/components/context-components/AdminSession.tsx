import { StyleSheet, Text, View } from "react-native"
export default function AdminSession() {
  return (
    <View style={styles.container}>
      <Text style={styles.sessionInfo}>Badminton Session</Text>
      <Text style={styles.sessionInfo}>20 March 2025</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '2%',
    height: 80,
    width: '90%',
    display: 'flex',

    borderWidth: 2,
    borderColor: 'yellow',
    borderStyle: 'solid',
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'


  },
  sessionInfo: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,

  }
})