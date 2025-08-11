import { Image } from 'expo-image';
import { View, Text, Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <>
  
    <View style={styles.container}>
      <Collapsible title={'Donkey Kong'}/>

      <Text style={styles.text}>Hello</Text>
    </View>
    </>
    
  
  )}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    text: {
      color: "white",
      textAlign: "center"
    }
  })



