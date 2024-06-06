import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: '#376EDB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0c0c040',
    width: '100%',
    padding: 16,
  },
  textInput: {
    borderBottomWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: '80%',
    margin: 8,
  },
  image: {
    margin:-30,
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};
type LoginProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

function Login({navigation}: LoginProps): React.JSX.Element {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const btnIngresarOnPress = async function () {
    if (usuario && contrasena) {
      navigation.navigate('Home');
      return;
    }
    Alert.alert('Fallido', 'Datos incorrectos');
  };
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={{ fontSize: 30, textAlign: 'center', margin: 1, color: '#F1F1F1' }} >Iniciar sesión</Text>
      <Text>{"\n"}</Text>
      <Image source={require('../images/inventario.png')} style={styles.image}/>
      <Text>{"\n"}</Text>
      <View style={styles.container}>
        
        <TextInput
          style={styles.textInput}
          textAlign='center'
          placeholder="Usuario"
          placeholderTextColor="#828894"
          onChangeText={u => setUsuario(u)}
        />
        <TextInput
          style={styles.textInput}
          textAlign='center'
          placeholder="Contraseña"
          placeholderTextColor="#828894"
          secureTextEntry={true}
          onChangeText={p => setContrasena(p)}
        />
        <Text>{"\n"}</Text>
        <Button title="Ingresar" onPress={btnIngresarOnPress} />
      </View>
    </SafeAreaView>
  );
}

export default Login;
