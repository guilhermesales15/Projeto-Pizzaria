import { NavigationContainer } from '@react-navigation/native';
import { View,StatusBar } from 'react-native';
import Routes from './src/routes';
import { AuthProvider } from './src/contents/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      
        <StatusBar 
        backgroundColor="#1d1d2e"
        barStyle="light-content"
        translucent={false}
        />
      
        <Routes/>
      
      </AuthProvider>
    </NavigationContainer>
  );
}


