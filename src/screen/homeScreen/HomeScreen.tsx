import React from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';

import imagensCarrosel1 from '../../../assets/R.png';
import imagemCarrosel2 from '../../../assets/shutterstock_1131390731.jpg';
import imageCarrosel3 from '../../../assets/testes-removebg-preview.png';
import imagemLogo from '../../../assets/logo_da_imagem-removebg-preview.png';
import Navbar from '../navBar/Navbar';
import ProdutosHome from '../produtosHome/ProdutosHome';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const images = [imagensCarrosel1, imagemCarrosel2, imageCarrosel3];

function HomeScreen(props: HomeScreenProps) {

  const renderCarouselItem = ({ item }: { item: any }) => (
    <Image source={item} style={styles.carouselImage} />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={imagemLogo} style={styles.logoImage} />
      </View>

      {/* Carrossel de imagens */}
      <View style={styles.carouselContainer}>
        <Carousel
          data={images}
          renderItem={renderCarouselItem}
          sliderWidth={300}
          itemWidth={200}
          layout="default"
        />
      </View>

      <ProdutosHome />
      <Navbar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'yellow',
    padding: 10,
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  carouselContainer: {
    alignItems: 'center', // Centraliza o Carousel
  },
  carouselImage: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 8,
  },
});

export default HomeScreen;
