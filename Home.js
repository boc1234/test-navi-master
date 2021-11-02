import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import md5 from 'blueimp-md5';
import axios from 'axios';
export default function Home({ navigation , route }) {
    
    React.useEffect(() => {
        console.log(md5('1591'))
        var date = new Date();
        date.setHours(date.getHours()+1)
    
        // const encrypt:string = btoa(datatest)
        console.log(date)
        axios.get("https://localhost:44336/GetPaySlip",{
            params:{
                id:'Y14112'
            }
        
        })
        
        .then(function (response) {
         console.log(response.data);
            console.log(response.data[0])
       
          
        })
        .catch(function (error) {
        console.log(error)
        console.log(123)
        }).then(function (res){
         
        })
        if (route.params?.post) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
        }
      }, [route.params?.post]);
    return (
        <View style={styles.container}>
            <Text>Home!</Text>
            <StatusBar style='auto' />
            <Button title='Go to Profile' onPress={() => navigation.navigate('Profile')} />
            <Text>{route.params?.post}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
