import React from 'react';
import { BackHandler,
     Image,
      ImageBackground,
       StyleSheet,
        View,
         Text,
          Button,
           Alert,
            TouchableOpacity } from 'react-native';

function WelcomScreen(props) {
    console.log('App online')
    return (
        <ImageBackground style={styles.background}
        source={require('../assets/Wallpaper.jpg')}>
            <Image style={styles.profile} source={require('../assets/me.jpg')}/>
            <Text style={styles.about}>Hi my name is Dithira!</Text>
            <Button color={'#000'} title='Login'onPress={()=>alert('You have Already logged in')}/>

            <Button color={'#000'} title='Register' onPress={()=>Alert.prompt('Register','Accounts',
            [{text:'Register new Account', onPress:()=>console.log("Account created")},
            {text:'Cancel', onPress:()=>console.log('Action Canceled')}])}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        fadeDuration:300,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
    },
    profile: {
        
        width: 100,
        height:100,
        position: "absolute",
        top: 70,
    },
    about: {
        position: "absolute",
        top: 180,
    }

})

export default WelcomScreen;