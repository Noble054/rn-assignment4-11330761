// screens/LogIn.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Image } from 'expo-image';
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login validation here
    const validEmail = "user@al.com";
    const validPassword = "123";

    if (email === validEmail && password === validPassword) {
      navigation.navigate('Homepage');
    } else {
      // Show an alert if the credentials are invalid
      Alert.alert("Invalid Credentials", "Please check your email and password.");
    }
  };

  return (
    <View style={styles.logIn}>
      <View style={[styles.homeIndicator, styles.frame8Position]}>
        <View style={styles.homeIndicator1} />
      </View>
      <View style={styles.frame}>
        <Text style={[styles.haventAnAccountContainer, styles.orContinueWithTypo]}>
          <Text style={styles.haventAnAccount}>{`Haven’t an account? `}</Text>
          <Text style={styles.register}>Register</Text>
        </Text>
      </View>
      <View style={[styles.frame1, styles.frame1Layout]}>
        <View style={[styles.headlineParent, styles.frame1Layout]}>
          <Text style={styles.headline}>Welcome Back 👋</Text>
          <Text style={[styles.headline1, styles.nameTypo]}>
            Let’s log in. Apply to jobs!
          </Text>
        </View>
      </View>
      <View style={styles.frame4}>
        <View style={styles.frameParent}>
          <View style={styles.frame6}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={[styles.inputWrapper, styles.inputMarginTop]}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
          </View>
          <View style={styles.frame5}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.next}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[styles.orContinueWithParent, styles.frame1Layout1]}>
        <Text style={[styles.orContinueWith, styles.nameClr]}>
          Or continue with
        </Text>
        <View style={[styles.frameChild, styles.frameLayout4]} />
        <View style={[styles.frameItem, styles.frameLayout4]} />
      </View>
      <View style={[styles.frame2, styles.frameLayout3]}>
        <View style={[styles.groupParent, styles.frameLayout3]}>
          <Image
            style={[styles.frameInner, styles.frameLayout2]}
            contentFit="cover"
            source={require("../assets/group-55.png")}
          />
          <Image
            style={[styles.groupIcon, styles.frameLayout2]}
            contentFit="cover"
            source={require("../assets/group-56.png")}
          />
          <Image
            style={[styles.frameChild1, styles.frameLayout2]}
            contentFit="cover"
            source={require("../assets/group-54.png")}
          />
        </View>
      </View>
      <View style={styles.frame3}>
        <Text style={[styles.jobizz, styles.jobizzPosition]}>Jobizz</Text>
      </View>
      <View style={[styles.frame8, styles.frame8Position]}>
        <View style={[styles.frame8, styles.frame8Position]}>
          <Image
            style={styles.notchIcon}
            contentFit="cover"
            source={require("../assets/notch1.png")}
          />
          <View style={[styles.rightSide, styles.iconLayout]}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/battery1.png")}
            />
            <Image
              style={[styles.wifiIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/wifi1.png")}
            />
            <Image
              style={[styles.mobileSignalIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/mobile-signal1.png")}
            />
          </View>
          <View style={[styles.leftSide, styles.timeLayout]}>
            <View style={[styles.time, styles.timeLayout]}>
              <Text style={[styles.text, styles.textTypo]}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  frame8Position: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  orContinueWithTypo: {
    fontFamily: FontFamily.circularStd,
    textAlign: "center",
    top: 0,
  },
  frame1Layout: {
    height: 63,
    position: "absolute",
  },
  nameTypo: {
    letterSpacing: -0.1,
    textAlign: "left",
    fontSize: FontSize.medium14_size,
  },
  frame1Layout1: {
    width: 327,
    left: 24,
  },
  nameClr: {
    color: Color.grey70,
    position: "absolute",
  },
  frameLayout4: {
    height: 1,
    width: 99,
    borderTopWidth: 0.5,
    borderColor: Color.grey70,
    borderStyle: "solid",
    top: 8,
    position: "absolute",
  },
  frameLayout3: {
    height: 56,
    position: "absolute",
  },
  frameLayout2: {
    width: 56,
    height: 56,
    top: 0,
    position: "absolute",
  },
  jobizzPosition: {
    fontFamily: FontFamily.medium14,
    left: 0,
    position: "absolute",
  },
  frameLayout1: {
    height: 208,
    position: "absolute",
  },
  frameLayout: {
    width: 328,
    left: 0,
  },
  nextTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.medium14,
  },
  wrapperLayout: {
    height: 52,
    position: "relative", // changed from absolute
    width: '100%',
    marginTop: 16,
  },
  input: {
    height: '100%',
    width: '100%',
    fontSize: FontSize.medium14_size,
    paddingHorizontal: 10,
  },
  inputMarginTop: {
    marginTop: 16, // spacing between input fields
  },
  iconLayout: {
    height: 11,
    position: "absolute",
  },
  timeLayout: {
    height: 21,
    width: 54,
    position: "absolute",
  },
  textTypo: {
    width: 40,
    fontFamily: FontFamily.defaultBoldSubheadline,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldSubheadline_size,
    left: 7,
    top: 1,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
    display: "none",
    position: "absolute",
  },
  homeIndicator: {
    top: 778,
    height: 34,
  },
  haventAnAccount: {
    color: "#bdbec2",
  },
  register: {
    color: Color.colorSteelblue,
  },
  haventAnAccountContainer: {
    left: 12,
    textAlign: "center",
    fontSize: FontSize.medium14_size,
    fontFamily: FontFamily.circularStd,
    position: "absolute",
  },
  frame: {
    top: 694,
    left: 90,
    width: 195,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  headline: {
    fontSize: FontSize.semibold24_size,
    lineHeight: 34,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.medium14,
    fontWeight: "600",
    letterSpacing: -0.4,
    left: 2,
    top: 0,
    position: "absolute",
  },
  headline1: {
    top: 41,
    lineHeight: 22,
    opacity: 0.4,
    color: Color.black,
    fontFamily: FontFamily.medium14,
    left: 0,
    position: "absolute",
  },
  headlineParent: {
    width: 207,
    top: 0,
    left:-1,
  },
  frame1: {
    top: 147,
    width: 327,
    left: 23,
    overflow: "hidden",
  },
  orContinueWith: {
    left: 138,
    fontSize: FontSize.regular13_size,
    lineHeight: 20,
    textAlign: "center",
    top: 0,
    fontFamily: FontFamily.circularStd,
  },
  frameChild: {
    left: 0,
  },
  frameItem: {
    left: 228,
  },
  orContinueWithParent: {
    top: 534,
    height: 16,
    position: "absolute",
  },
  frameInner: {
    left: 0,
  },
  groupIcon: {
    left: 136,
  },
  frameChild1: {
    left: 271,
  },
  groupParent: {
    width: 216,
    left: 7,
    top: 80,
  },
  frame2: {
    top: 526,
    width: 327,
    left: 24,
  },
  jobizz: {
    fontSize: 22,
    width: 150,
    fontWeight: "600",
    letterSpacing: -0.4,
    fontFamily: FontFamily.medium14,
    color: Color.colorSteelblue,
    textAlign: "center",
    top: 0,
    
  },
  frame3: {
    top: 106,
    width: 407,
    height: 33,
    left: -16,
    overflow: "hidden",
    position:"absolute"
  },
  button: {
    borderRadius:5,
    backgroundColor: Color.colorSteelblue,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  next: {
    fontSize: FontSize.medium14_size,
    lineHeight: 24,
    textAlign: "center",
    color: Color.white,
    letterSpacing: -0.2,
  },
  frame5: {
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems:"center",
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    borderColor: Color.grey70,
    borderStyle: "solid",
    marginTop: 10,
    paddingHorizontal: 10,
    height: 52,
  },
  frame6: {
    marginTop: 20,
  },
  frameParent: {
    top: 0,
  },
  frame4: {
    top: 247,
    width: "100%",
    paddingHorizontal: 24,

    overflow: "hidden",
  },
  notchIcon: {
    width: 219,
    height: 30,
    left: 78,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  batteryIcon: {
    top: 0,
    right: 0,
    width: 24,
  },
  wifiIcon: {
    right: 29,
    width: 15,
    top: 0,
  },
  mobileSignalIcon: {
    width: 17,
    right: 49,
    top: 0,
  },
  rightSide: {
    top: 17,
    right: 14,
    width: 67,
  },
  text: {
    color: Color.defaultBlack,
  },
  time: {
    left: 0,
    top: 0,
  },
  leftSide: {
    left: 21,
    top: 14,
  },
  frame8: {
    top: 0,
    height: 44,
    left: 0,
    overflow:"hidden",
  },
  logIn: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default LogIn;
