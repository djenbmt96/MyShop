import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'native-base';
import styles from '../../styles/Authentication/Authentication';

class Signup extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.bodyInput}>
                <Input style={styles.input} placeholder='Enter your name'/>
                <Input secureTextEntry style={styles.input} placeholder='Enter your email'/>
                <Input style={styles.input} placeholder='Enter your password'/>
                <Input secureTextEntry style={styles.input} placeholder='Re-enter your password'/>
                <Button full bordered rounded light>
                    <Text>Sign up</Text>
                </Button>
            </View>
        );
    }
}

export default Signup;