import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Navbar = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home' as never); // Utilizando 'as never' para evitar problemas de inferência de tipo
  };
  
  const navigateToInputScreenUser = () => {
    navigation.navigate('InputUser' as never);
  };
  
  const navigateToInputScreenProdutos = () => {
    navigation.navigate('InputProdutos' as never);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navigation}>
        <View style={styles.list}>
          {/* Botão para o Home */}
          <TouchableOpacity onPress={navigateToHome}>
            <Ionicons name="home-outline" size={24} color="white" />
          </TouchableOpacity>
          
          {/* Botão (ainda não programado) */}
          <AntDesign name="shoppingcart" size={24} color="white" />

          {/* Botão para InputScreenUser */}
          <TouchableOpacity onPress={navigateToInputScreenUser}>
            <Feather name="users" size={24} color="white" />
          </TouchableOpacity>

          {/* Botão para InputScreenProdutos */}
          <TouchableOpacity onPress={navigateToInputScreenProdutos}>
            <AntDesign name="pluscircleo" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  navigation: {
    width: '100%',
    height: 70,
    backgroundColor: '#ffe600',
    justifyContent: 'center',
    borderRadius: 10,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    height: '100%',
    padding: 10,
  },
});

export default Navbar;
