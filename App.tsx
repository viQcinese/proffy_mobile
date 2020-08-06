import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './src/pages/Landing'
// Componente de carregamento
import { AppLoading } from 'expo'

import { Archivo_400Regular, Archivo_700Bold, useFonts } from "@expo-google-fonts/archivo"
import { Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins"

import AppStack from './src/routes/AppStack';

export default function App() {

  // Load Fonts to APP
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  // While Fonts are not loaded, show Loading Screen
  if(!fontsLoaded) {
    return <AppLoading />

  } else {

    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}