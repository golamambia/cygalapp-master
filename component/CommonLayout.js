import React from 'react';
import { ImageBackground, StatusBar, SafeAreaView } from "react-native";

const CommonLayout = ({ children }) => {
    return (
        <>
            <ImageBackground style={{ width: "100%", height: "100%", backgroundColor: "#fff" }} source={require('../assets/images/backimagelogin.png')} >
            {/* <StatusBar barStyle="dark-content" /> */}
                {children}
            </ImageBackground>
        </>
    );
};

export default CommonLayout;