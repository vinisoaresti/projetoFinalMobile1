import React, { useState } from 'react';
import {
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Details from './src/pages/Details';
import Home from './src/pages/Home';

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('Home');
    const [selectedPlace, setSelectedPlace] = useState(null);

    const navigation = {
        navigate: (screenName, params) => {
            if (screenName === 'Details' && params?.place) {
                setSelectedPlace(params.place);
                setCurrentScreen('Details');
            } else if (screenName === 'Home') {
                setCurrentScreen('Home');
            }
        },
        goBack: () => {
            setCurrentScreen('Home');
        }
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <SafeAreaView style={styles.safeArea}>
                    <StatusBar backgroundColor="#174d38" barStyle="light-content" />

                    {/* Header */}
                    <View style={styles.header}>
                        {currentScreen === 'Details' ? (
                            <Pressable
                                style={styles.backButton}
                                onPress={() => setCurrentScreen('Home')}
                            >
                                <Text style={styles.backButtonText}>← Voltar</Text>
                            </Pressable>
                        ) : (
                            <View style={styles.placeholder} />
                        )}
                        <Text style={styles.headerTitle}>
                            {currentScreen === 'Home' ? 'Conheça Garanhuns' : 'Detalhes do local'}
                        </Text>
                        <View style={styles.placeholder} />
                    </View>

                    {/* Content */}
                    <View style={styles.content}>
                        {currentScreen === 'Home' ? (
                            <Home navigation={navigation} />
                        ) : (
                            <Details
                                navigation={navigation}
                                route={{ params: { place: selectedPlace } }}
                            />
                        )}
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffffff'
    },
    header: {
        height: 56,
        backgroundColor: '#50035aff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    backButton: {
        paddingVertical: 6,
        paddingHorizontal: 8
    },
    backButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600'
    },
    placeholder: {
        width: 70
    },
    content: {
        flex: 1,
        backgroundColor: '#f1f4f2'
    }
});