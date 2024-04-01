import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Theme } from './source/assets/theme';
import { StackScreens } from './source/navigations/stack';
import { colors } from './source/assets/colors';


function App() {

  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <StatusBar
          translucent={true}
          backgroundColor={colors.white}
          barStyle={Platform.OS === 'ios' ? 'default' : "light-content"}
        />
        <StackScreens />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
