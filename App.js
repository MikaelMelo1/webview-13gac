import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Linking, Text, View, Image, TouchableOpacity } from 'react-native';
import { WebView } from "react-native-webview"
import { ActivityIndicator } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (

    <View style={styles.container}>
      {isLoading && <ActivityIndicator size={'large'} color={'black'} />}
      <WebView allowsFullscreenVideo={true} source={{ uri: 'https://13gac.eb.mil.br/' }}
        onLoad={() => setIsLoading(false)}
      />
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30

  },
  cotainerFlutuante: {
    display: 'flex',
    fontSize: 20,
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 50,
    top: -170,
    left: 420
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
