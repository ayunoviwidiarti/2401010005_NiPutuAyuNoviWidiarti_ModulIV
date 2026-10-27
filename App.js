import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import About from './About';
import { BiodataProvider } from './BiodataContext';
import Home from './Home';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const icons = {
  Beranda: ['home', 'home-outline'],
  Profil: ['person-circle', 'person-circle-outline'],
  Tentang: ['book', 'book-outline'],
};

function App() {
  return (
    <BiodataProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Beranda"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={icons[route.name][focused ? 0 : 1]}
                size={size}
                color={color}
              />
            ),
            tabBarActiveTintColor: '#00897B',
            tabBarInactiveTintColor: '#90A4AE',
            tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
            headerStyle: { backgroundColor: '#00897B' },
            headerTintColor: '#fff',
          })}
        >
          <Tab.Screen name="Beranda" component={Home} />
          <Tab.Screen name="Profil" component={Profile} />
          <Tab.Screen name="Tentang" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    </BiodataProvider>
  );
}

export default App;
registerRootComponent(App);