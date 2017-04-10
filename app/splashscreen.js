import React, { Component } from 'react';
import {
    View,Text
} from 'react-native'
import './home'

const splashscreen = require('../img/splashscreen.png');


nu.extend(true,nu.nubuntu.react.prototype,{
    pages : {
        splashscreen : {
            will_mount : function () {
                var self = this;
                setTimeout(function(){
                    self.go_to('home');
                },3000);
            },
            render : function () {
                return (
                    <View style={styles.splash}>
                        <Text style={styles.title}>Please Wait....</Text>
                    </View>
                )
            }
        }
    },
});
