import AdminSession from "@/components/context-components/AdminSession"
import { StyleSheet, Text, View } from "react-native"

export default function AdminHome() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>My Sessions</Text>
        <AdminSession />
        <AdminSession />
        <AdminSession />
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexWrap: "wrap",
    width: '100%',
    flexDirection: 'row',
  },
  heading: {
    textAlign: 'center',
    fontSize: 42,
    color: 'grey',
    backgroundColor: 'green',
    width: '100%'
  }

})

