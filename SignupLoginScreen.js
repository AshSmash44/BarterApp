import React,{Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SignupLoginScreen extends Component{
    constructor(){
        super();
        this.state={
            userName : '',
            password : '',
        };
    }

    userSignUp = (emailId, password,confirmPassword) =>{
        if(password !== confirmPassword){
            return Alert.alert("password doesn't match\nCheck your password.")
        }else{
          firebase.auth().createUserWithEmailAndPassword(emailId, password).then((response)=>{
            return  Alert.alert(
                 'User Added Successfully'
             ).catch((error)=> {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
              })
          })
        }
    }
    userLogin = (userName,password) => {
        firebase.auth().signInWithEmailAndPassword(userName,password).then(()=>{
            Alert.alert('Succefully logged in')
        }).catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
    }
    render(){
        return(
            <View>
                <TextInput
                    style = {styles.inputBox}
                    placeholder = {'email'}
                    keyboardType = 'email-address'
                    maxLength = {12}
                    onChangeText= {(text)=>{
                        this.setState({
                            userName : text
                        })
                    }}
                ></TextInput>
                <TextInput
                    style = {styles.inputBox}
                    placeholder = {'password'}
                    secureTextEntry = {true}
                    maxLength = {14}
                    onChangeText= {(text)=>{
                        this.setState({
                            userName : text
                        })
                    }}
                ></TextInput>
                <TouchableOpacity
                   style={styles.button}
                   onPress = {()=>{
                     this.userLogin(this.state.emailId, this.state.password)
                   }}
                >
                   <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress = {()=>{
                        this.userSignUp(this.state.emailId, this.state.password)
                    }}
                >
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox : {
        width : 250,
        height : 30,
        fontSize : 30,
        alignItems : 'center',
        alignSelf : 'center',
        marginTop : 50,
    },
    button : {
        width : 150,
        height : 20,
        fontSize : 17,
        borderRadius : 3,
        alignItems : 'center',
        alignSelf : 'center',
        marginTop : 10,
        backgroundColor : '#bfff00'
    }
});