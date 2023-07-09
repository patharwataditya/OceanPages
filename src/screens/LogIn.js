import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Snackbar from 'react-native-snackbar';

const LogIn = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [showSnack, setShowSnack] = useState(false);

  useEffect(() => {
    setShowSnack(false);
    if (showSnack) {
      Snackbar.show({
        text: msg,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [showSnack]);

  const handleLogin = () => {
    if (username.trim().length === 0 || password.trim().length === 0) {
      setMsg('Please fill in all fields');
      setShowSnack(true);
    } else {
      setMsg('Login Successful');
      setShowSnack(true);
      props.navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.Ellipse}>
          <Image source={require('../Images/f_t_p/Ellipse.png')} />
        </View>
        <View style={styles.hello}>
          <Image source={require('../Images/f_t_p/Hello1.png')} />
        </View>
      </View>
      <View style={styles.welcomeb}>
        <Image source={require('../Images/f_t_p/WelcomeBack.png')} />
      </View>
      <View style={styles.Textc}>
        <Text style={{fontSize: 16}}>LogIn into your Account</Text>
      </View>
      <View>
        <View>
          <View style={styles.input}>
            <Image source={require('../Images/f_t_p/UserIcon.png')} />
            <TextInput
              placeholderTextColor="#4F3252"
              placeholder="Enter Username"
              value={username}
              onChangeText={Text => setUsername(Text)}
            />
          </View>
          <View style={styles.input}>
            <Image source={require('../Images/f_t_p/LockIcon.png')} />
            <TextInput
              placeholderTextColor="#4F3252"
              placeholder="Enter Password"
              secureTextEntry
              value={password}
              onChangeText={Text => setPassword(Text)}
            />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.Loginbutton} onPress={handleLogin}>
            <Text style={{fontSize: 24}}>LogIn</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.d_h_a}>
        <Text>Don't Have an Account?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={{fontWeight: 'bold'}}> SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7942A4',
  },
  Ellipse: {
    alignItems: 'center',
    marginTop: -275,
  },
  hello: {
    position: 'absolute',
    alignItems: 'center',
    marginLeft: 40,
  },
  welcomeb: {
    alignItems: 'center',
    marginTop: 14,
  },
  Textc: {
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#AD9DB8',
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    elevation: 15,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  Loginbutton: {
    backgroundColor: '#3B2747',
    width: 274,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    marginTop: 30,
  },
  d_h_a: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
});

export default LogIn;
