// InputScreen.tsx

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

function InputScreenProdutos() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = async function () {
    const productUri = 'http://localhost:8081/api/venda';

    const productDataJson = {
      Title: title,
      Value: value,
      Image: image,
      Description: description,
    };

    console.log(productDataJson);

    try {
      const response = await axios.post(productUri, productDataJson, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        maxRedirects: 0,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Value"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Image"
        value={image}
        onChangeText={(text) => setImage(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button title="Salvar" onPress={handleSave} color="#ffe600" />
    </View>
  );
}

const styles = {
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
};

export default InputScreenProdutos;
