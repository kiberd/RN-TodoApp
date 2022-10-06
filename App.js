import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Text, View } from 'react-native';
import { styled } from 'nativewind';

import About from './pages/About';

const StyledView = styled(View)
const StyledText = styled(Text)

const App = () => {
  return (
    // <StyledView className="items-center justify-center flex-1">
    //   <StyledText className="text-slate-800">
    //     Try editing me! 🎉
    //   </StyledText>
    // </StyledView>

    // <View className="flex items-center justify-center bg-black">
    //   <Text className="text-lg text-slate-800 ">Styling just works! 🎉</Text>
    // </View>

    // <View className="items-center justify-center flex-1">
    //   <Text className="text-lg text-red-500">Open up App.js to start working on your app!</Text>
    //   {/* <StatusBar style="auto" /> */}
    // </View>
    <About/>
    
  );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);
