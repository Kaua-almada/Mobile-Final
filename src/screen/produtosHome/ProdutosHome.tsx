import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

interface Produto {
  title: string;
  value: string;
  image: string;
  description: string;
}

const produtos: Produto[] = [
    {
        title: '100 Salgado Especiais',
        value: '20,00',
        image: 'https://panificadorabonanza.com.br/wp-content/uploads/2022/07/IMG_8225-1024x683.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        title: 'Promoção Especial',
        value: ' ̶1̶0̶0̶.̶0̶0̶  $70,00',
        image: 'https://www.mimoscestasepresentes.com.br/image/cache/data/cesta-com-chocolates/10110---mini-salgados-c-6-und-01-2023-07-22-13-53-55-926x926.jpg',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Cesta de Mini Salgados',
        value: ' ̶1̶0̶,̶0̶0̶  $10,00',
        image: 'https://img77.uenicdn.com/image/upload/v1620674715/business/c4c5a21d-0e22-48f2-95a1-66eedc1ff3ac.jpg',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
];

async function AdicionarCarrinho(produto: Produto) {
  var produtoUri = "http://localhost:8081/api/produtos";

  console.log(`Produto adicionado ao carrinho: ${produto.title}`);

  var titulo = produto.title;
  var value = produto.value;
  var image = produto.image;
  var description = produto.description;

  var produtorDataJson = {
    title: produto.title,
    value: produto.value,
    image: produto.image,
    description: produto.description,
  };

  console.log(produtorDataJson);

  const response = await axios.post(produtoUri, produtorDataJson, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
    maxRedirects: 0,
  });

  if (response.status === 200) {
    console.log("Produto adicionado com sucesso!");
  } else {
    console.error("Erro ao adicionar produto ao carrinho.");
  }
}


function ProdutosHome(){
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  return (
    <ScrollView>
      <View style={styles.papai}>
        <Text style={styles.promotionsText}>Confira nossas promoções de salgados</Text>
        <View style={styles.cardsContainer}>
          {produtos.map((produto, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => AdicionarCarrinho(produto)}
            >
              <Image
                source={{ uri: produto.image }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>{produto.title}</Text>
              <Text style={styles.cardValue}>{produto.value}</Text>
              <Text>{produto.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text>Confira também nossos doces</Text>
      </View>
    </ScrollView>
  )
};


const styles = StyleSheet.create({
    papai: {
      textAlign: 'center',
      padding: 20,
      backgroundColor: '#f2f2f2',
    },
    promotionsText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10, // Adicione margem inferior para separar do restante do conteúdo
      },
    cardsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
      flexWrap: 'wrap',
      transition: 'scale(1.05)'
    },
    
    card: {
      width: 300,
      margin: 10,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 8,
      borderRadius: 8,
      overflow: 'hidden',
      elevation: 2, // Adiciona elevação para sombra no Android
      transition: { transform: { duration: 0.3, easing: 'ease-in-out' } },
      backgroundColor: '#fff', // Adiciona um background branco aos cards
    },
    cardImage: {
      width: '100%',
      height: 150,
      borderRadius: 8,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
        textAlign: 'center',
      },
      cardValue: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 4,
        textAlign: 'center',
      },
  });
  
  // ...
  

export default ProdutosHome;
