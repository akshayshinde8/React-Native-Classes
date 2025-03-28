import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { ErrorBoundary } from 'react-error-boundary';


const ErrorFallback = ({ error }) => (
    <View style={styles.container}>
        <Text style={styles.title}>⚠️ Crash</Text>
        <Text style={styles.error}>{error.message}</Text>
    </View>
);

const RiskyComponent = () => {
    // throw new Error('get all products is undefined!');
    let x;
    return <Text>This won’t render {x.length}.</Text>;
};

const App = () => (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <View style={{ height: 250 }}>
            <StatusBar />
            <Text>Hello World</Text>
            <RiskyComponent />
        </View>
    </ErrorBoundary>
);

export default App

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffebee',
    },
    title: {
        fontSize: 24,
        color: '#d32f2f',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    error: {
        color: '#d32f2f',
        marginBottom: 20,
    },
    advice: {
        color: '#555',
    },
});