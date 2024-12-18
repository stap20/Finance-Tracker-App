import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Test from '@screens/Test';
import {ThemeProvider} from '@theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ThemeProvider>
        <Test />
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
