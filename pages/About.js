import React from 'react';

import { Text, View, SafeAreaView } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(SafeAreaView);
const StyledText = styled(Text);

const About = () => {
    return (
        <>
        
            <StyledView className="items-center justify-between flex-1">

                <StyledView className="flex items-center justify-center mt-10 border-b-[1px] border-gray-400 w-[80%]">
                    <StyledText className="pb-2 text-lg font-bold">참여 멤버</StyledText>
                </StyledView>


                
                


            </StyledView>

            
        </>
    );
};

export default About;