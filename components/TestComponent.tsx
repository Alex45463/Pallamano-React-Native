import { useState } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function TestComponent() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
      <Image style={styles.logo} source={require('../assets/splash.png')} />
      <Text>You clicked {count} times</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Learn More"
        color="#000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
