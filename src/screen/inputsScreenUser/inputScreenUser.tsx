// InputScreenUser.tsx

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

function InputScreenUser() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSave = async function () {
    const userUri = 'http://localhost:8081/api/users';

    const userDataJson = {
      Name: name,
      LastName: lastName,
      Email: email,
      Password: password,
      CPF: cpf,
    };

    console.log(userDataJson);

    try {
      const response = await axios.post(userUri, userDataJson, {
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
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
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

export default InputScreenUser;
