import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Input from './src/components/Input';

const App = () => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  const [inputs, setInputs] = useState(initialState);

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const submitHandler = () => {
    console.log(inputs);
  };

  return (
    <View style={styles.main}>
      <Input
        onChangeText={text => handleOnchange(text, 'name')}
        placeholder="Enter your name"
      />
      <Input
        onChangeText={text => handleOnchange(text, 'email')}
        placeholder="Enter your email address"
      />
      <Input
        onChangeText={text => handleOnchange(text, 'phone')}
        placeholder="Enter your phone number"
      />
      <Input
        onChangeText={text => handleOnchange(text, 'password')}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => submitHandler()}>
        <Text style={{}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd082',
  },
  textContainer: {
    marginVertical: 5,
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#f5a623',
  },
  text: {
    color: 'black',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#f5a623',
    height: 60,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
