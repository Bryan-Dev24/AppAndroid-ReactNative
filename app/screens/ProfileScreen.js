import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '@/app/styles/globalStyles';
import { Colors } from '@/constants/Colors';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={[globalStyles.container, { padding: 0 }]}>
            <View style={styles.header}>
                <Image 
                    source={require('@/assets/icon.png')}
                    style={styles.avatar}
                />
                <Text style={styles.name}>Usuário</Text>
                <Text style={styles.email}>usuario@exemplo.com</Text>
            </View>
            
            <View style={styles.content}>
                <Text style={[globalStyles.title, { fontSize: 22, textAlign: 'left', marginBottom: 20 }]}>
                    Informações do Perfil
                </Text>
                
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Nome Completo</Text>
                    <Text style={styles.infoValue}>Fulano de Tal</Text>
                </View>
                
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Telefone</Text>
                    <Text style={styles.infoValue}>(00) 00000-0000</Text>
                </View>
                
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Localização</Text>
                    <Text style={styles.infoValue}>Cidade, Estado</Text>
                </View>
                
                <TouchableOpacity 
                    style={[globalStyles.button, { marginTop: 30 }]}
                    onPress={() => navigation.navigate('(tabs)')}
                >
                    <Text style={globalStyles.buttonText}>Voltar para Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = {
    header: {
        backgroundColor: Colors.light.primary,
        padding: 30,
        paddingTop: 50,
        alignItems: 'center',
        width: '100%',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'white',
        marginBottom: 15,
    },
    name: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    email: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 14,
    },
    content: {
        flex: 1,
        padding: 20,
        width: '100%',
    },
    infoItem: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.light.border,
        paddingBottom: 10,
    },
    infoLabel: {
        fontSize: 12,
        color: Colors.light.placeholder,
        marginBottom: 5,
    },
    infoValue: {
        fontSize: 16,
        color: Colors.light.text,
    },
};