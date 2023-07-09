import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

const SignUp = props => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [showSnack, setShowSnack] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    setShowSnack(false);
    if (showSnack) {
      Snackbar.show({
        text: msg,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [showSnack]);

  const handleSignUp = () => {
    if (
      username.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      cpassword.trim().length === 0
    ) {
      setMsg('Please fill in all fields');
      setShowSnack(true);
    } else if (password !== cpassword) {
      setMsg('Passwords do not match');
      setShowSnack(true);
    } else {
      setMsg('Sign Up Successful');
      setShowSnack(true);
      props.navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../Images/f_t_p/png1.png')}
          style={styles.png1}
        />
        <Image
          source={require('../Images/f_t_p/png2.png')}
          style={styles.png2}
        />
      </View>
      <View style={styles.SignUpW}>
        <View style={styles.SignUpPng}>
          <Image source={require('../Images/f_t_p/SignUp.png')} />
        </View>
        <Text style={styles.text}>Create an Account</Text>
      </View>
      <View>
        <View style={styles.input}>
          <Image source={require('../Images/f_t_p/UserIcon.png')} />
          <TextInput
            placeholderTextColor="#4F3252"
            placeholder="Enter Username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={styles.input}>
          <Image source={require('../Images/f_t_p/Mail.png')} />
          <TextInput
            placeholderTextColor="#4F3252"
            placeholder="Enter Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.input}>
          <Image source={require('../Images/f_t_p/Unlock.png')} />
          <TextInput
            placeholderTextColor="#4F3252"
            placeholder="Set Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.input}>
          <Image source={require('../Images/f_t_p/LockIcon.png')} />
          <TextInput
            placeholderTextColor="#4F3252"
            placeholder="Confirm Password"
            secureTextEntry
            value={cpassword}
            onChangeText={text => setCPassword(text)}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.Loginbutton} onPress={handleSignUp}>
          <Text style={{fontSize: 24}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.d_h_a}>
        <Text>Already have an Account</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('LogIn')}>
          <Text style={{fontWeight: 'bold'}}> Log In</Text>
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
  png1: {
    height: 122,
    width: 130,
    position: 'absolute',
    marginTop: 12,
    marginLeft: 12,
  },
  SignUpPng: {
    alignSelf: 'center',
    marginTop: 119,
    elevation: 10,
  },
  png2: {
    height: 122,
    width: 130,
    position: 'absolute',
    marginLeft: 223,
    marginTop: 110,
  },
  SignUpW: {
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    marginBottom: 60,
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

export default SignUp;
