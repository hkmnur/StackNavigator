import React, {Component} from "react";
import {Button, StyleSheet, Text, View} from "react-native";

export default class DetailScreen extends Component {
	render() {
		const { navigate ,push,goBack} = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>Detail</Text>
				<Button
					title="go to home page"
					onPress={() => push('Home')}
				/>
				<Button
				 title="go back"
				 onPress={() => goBack()}
				/>
			</View>
		);
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF',
  }
});