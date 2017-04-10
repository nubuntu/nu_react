import React, { Component } from 'react';
import {
    AppRegistry,View,Text
} from 'react-native'

import 'nu-widget'

nu.widget('nubuntu.react',{
    options : {
        default_page:'home'
    },
    _create:function(update){
        var self = this;
        this.current_page = this.current_page || this.options.default_page;
        class c extends Component{
            render(){
                self.component = this;
                if(self.pages[self.current_page].render)
                    return self.pages[self.current_page].render.apply(self);
            }
            componentWillMount(){
                self.component = this;
                if(self.pages[self.current_page].will_mount)
                    return self.pages[self.current_page].will_mount.apply(self);
            }
            componentDidMount(){
                self.component = this;
                if(self.pages[self.current_page].did_mount)
                    return self.pages[self.current_page].did_mount.apply(self);
            }
        }
        AppRegistry.registerComponent(this.options.app_name, () => c)
        if(update)
            this.component.forceUpdate();
    },
    pages : {
        home : {
            will_mount : function () {},
            did_mount : function () {},
            render:function(){
                return (
                    <View>
                        <Text>
                            Hello Nu
                        </Text>
                    </View>
                )
            }
        }
    },
    go_to : function (page,component) {
        this.current_page = page;
        this.component.forceUpdate();
    }
});






