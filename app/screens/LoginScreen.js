import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '@/app/styles/globalStyles';

const LoginScreen = ({ navigation }) => {
  // Credenciais fixas
  const CORRECT_USERNAME = 'admin';
  const CORRECT_PASSWORD = '123456';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
      // Login bem-sucedido
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      // Navegar para a tela principal após o login
      navigation.navigate('(tabs)');
    } else {
      // Credenciais inválidas
      Alert.alert('Erro', 'Usuário ou senha incorretos');
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login</Text>
      
      <TextInput
        style={globalStyles.input}
        placeholder="Usuário"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      <TextInput
        style={globalStyles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <TouchableOpacity 
        style={globalStyles.button}
        onPress={handleLogin}
      >
        <Text style={globalStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos específicos do componente podem ser adicionados aqui
const styles = {};

export default LoginScreen;