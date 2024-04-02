import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './telas/Home/index';
import Estoque from './telas/Estoque/index';
import Compras from './telas/Compras/index';
import ComecePorAqui from './telas/ComecePorAqui/index';


const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Estoque,
    Compras,
    ComecePorAqui,
  })
);

export default function App() {
  return (
    <Routes/>
  );
}