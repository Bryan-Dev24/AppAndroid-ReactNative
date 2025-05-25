import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '@/app/styles/globalStyles';

export default function HomeScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Bem-vindo</Text>
            <Text style={globalStyles.subtitle}>Você está na tela inicial</Text>
            
            <TouchableOpacity 
                style={[globalStyles.button, { marginTop: 20 }]}
                onPress={() => navigation.navigate('profile')}
            >
                <Text style={globalStyles.buttonText}>Ver Perfil</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={[globalStyles.button, globalStyles.buttonSecondary]}
                onPress={() => navigation.navigate('index')}
            >
                <Text style={globalStyles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

// Estilos específicos do componente podem ser adicionados aqui
const styles = {};
