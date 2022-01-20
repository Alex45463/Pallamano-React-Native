import { Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TestComponent from '../components/TestComponent';

export default function DetailsScreen({navigation}: {navigation: any}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <View>
                <Text>Open up App.tsx to start working on your app!</Text>
                <StatusBar style="auto" />
                <TestComponent />
            </View>
        </View>
    );
}

    