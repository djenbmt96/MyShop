import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'native-base';
import styles from '../../styles/Authentication/Authentication';

class Signin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.bodyInput}>
                <Input style={styles.input} placeholder='Enter your email'/>
                <Input secureTextEntry style={styles.input} placeholder='Enter your password'/>
                <Button full bordered rounded light>
                    <Text>Sign in</Text>
                </Button>
            </View>
        );
    }
}

export default Signin;