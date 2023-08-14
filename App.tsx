

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { colors } from './source/assets/colors';
import { Theme } from './source/assets/theme';
import { StackScreens } from './source/navigations/stack';


function App(): JSX.Element {


  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <StatusBar
          translucent={true}
          backgroundColor={colors.white}
          barStyle={Platform.OS === 'ios' ? 'default' : 'dark-content'}
        />
        <StackScreens />
      </NavigationContainer>
    </ThemeProvider>
  );
}


export default App;
