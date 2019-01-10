import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import codePush from "react-native-code-push";
const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
  componentDidMount(){

      codePush.sync({
        updateDialog: {
          appendReleaseDescription: true,
          descriptionPrefix:"1.0.1",
          optionalIgnoreButtonLabel:"忽略",
          optionalInstallButtonLabel:"下载",
          optionalUpdateMessage:"有新版本,bug修复",
          title:"版本跟新",
      },
      codePushOptions:codePushOptions,
     
        //deploymentKey为刚才生成的,打包哪个平台的App就使用哪个Key,这里用IOS的打包测试
        deploymentKey: '4uw4ipWoJUqDxxRS_PPYoKwbwYMn8b915a85-7902-475b-9cbe-f5e9301d7285',
        });
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
  },
});
export default codePush(App)