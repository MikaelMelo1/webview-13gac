import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from "react-native-webview"
import { ActivityIndicator } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator />}
      <WebView source={{ uri: 'https://13gac.eb.mil.br/' }}
        onLoad={() => setIsLoading(false)}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  ActivityIndicator: {
    flex: 1,
    top: 200,
    justifyContent: 'center',
    alignContent: 'center',
    height: 200,
    width: 200,
  }
});
