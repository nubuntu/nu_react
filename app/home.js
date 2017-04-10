import React, { Component } from 'react';
import {
    AppRegistry,View,Text
} from 'react-native'
import './app'

nu.extend(true,nu.nubuntu.react.prototype,{
    pages : {
        home : {
            render : function(){
                return (
                    <View style={styles.home}>
                        <Text style={styles.title}>This Is Home</Text>
                    </View>
                )
            }
        }
    }
});