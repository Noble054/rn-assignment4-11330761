import * as React from "react";
import { Text, StyleSheet, View, } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Homepage = () => {
  return (
    <View style={styles.homepage}>
      <View style={styles.headlineParent}>
        <Text style={[styles.headline, styles.headlineTypo]}>
          eric@gmail.com
        </Text>
        <Text style={[styles.headline1, styles.yClr]}>Eric Atsu</Text>
      </View>
      <Text style={styles.featuredJobs}>Featured Jobs</Text>
      <Text style={[styles.seeAll, styles.yearTypo]}>See all</Text>
      <View style={[styles.greenBg, styles.greenBgPosition]} />
      <Image
        style={[styles.maskGroupIcon, styles.greenBgPosition]}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      
      <View style={styles.groupParent}>
        <View style={styles.accraGhanaParent}>
          <Text style={[styles.accraGhana, styles.textTypo]}>Accra, Ghana</Text>
          <Text style={[styles.text, styles.textTypo]}>$180,00</Text>
        </View>
        <View style={styles.softwareEngineerParent}>
          <Text style={[styles.softwareEngineer, styles.facebookPosition]}>
            Software Engineer
          </Text>
          <Text style={[styles.facebook, styles.googleTypo]}>Facebook</Text>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <View style={styles.bookmark5} />
      </View>
      <Text style={styles.popularJobs}>Popular Jobs</Text>
      <Text style={styles.seeAll1}>See all</Text>
      <View style={styles.statusBarIphoneXOrNewe}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch1.png")}
        />
        <View style={[styles.rightSide, styles.iconLayout]}>
          <Image
            style={[styles.batteryIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/battery2.png")}
          />
      
        </View>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.rectangleParent, styles.searchPosition1]}>
        <View style={[styles.groupItem, styles.componentLayout]} />
        <Text style={[styles.jrExecutive, styles.burgerKingPosition1]}>
          Jr Executive
        </Text>
        <Text style={[styles.burgerKing, styles.burgerKingPosition]}>
          Burger King
        </Text>
        <Text style={[styles.losAngelsUs, styles.burgerKingPosition]}>
          Los Angels, US
        </Text>
        <Text style={[styles.y, styles.yTypo]}>$96,000/y</Text>
        <View style={[styles.component1, styles.componentLayout]}>
          <View style={styles.childShadowBox} />
          <Text style={[styles.productManager, styles.beatsPosition1]}>
            Product Manager
          </Text>
          <Text style={[styles.beats, styles.beatsPosition]}>Beats</Text>
          <Text style={[styles.floridaUs, styles.beatsPosition]}>
            Florida, US
          </Text>
          <Text style={[styles.y1, styles.y1Position]}>$84,000/y</Text>
          <Image
            style={[styles.image8Icon, styles.image8IconPosition]}
            contentFit="cover"
            source={require("../assets/image-8.png")}
          />
        </View>
        <Image
          style={[styles.burgerKing41Icon, styles.yPosition]}
          contentFit="cover"
          source={require("../assets/burgerking4-1.png")}
        />
      </View>
      <View style={[styles.search, styles.searchPosition1]}>
        <View style={[styles.searchChild, styles.searchPosition]} />
        <View style={[styles.searchItem, styles.searchPosition]} />
        <Text style={[styles.searchAJob, styles.headlineTypo]}>
          Search a job or position
        </Text>
        <Image
          style={[styles.search11Icon, styles.image8IconPosition]}
          contentFit="cover"
          source={require("../assets/search1-1.png")}
        />
        <Image
          style={[styles.filter5Icon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/filter51.png")}
        />
      </View>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse.png")}
      />
      <Image
        style={[styles.homepageChild, styles.homepageChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-798.png")}
      />
      <Image
        style={styles.homepageItem}
        contentFit="cover"
        source={require("../assets/ellipse-767.png")}
      />
      <View style={[styles.homepageInner, styles.homepageInnerPosition]} />
      <Image
        style={styles.homepageInnerPosition}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
      <View style={[styles.groupContainer, styles.homepageChildPosition]}>
        <View style={styles.texasParent}>
          <Text style={[styles.texas, styles.textTypo]}>Texas</Text>
          <Text style={[styles.year, styles.textTypo]}>$160,00/year</Text>
        </View>
        <View
          style={[styles.fullStackDeveloperParent, styles.groupChildPosition]}
        >
          <Text style={[styles.fullStackDeveloper, styles.googlePosition]}>
            Full-Stack Developer
          </Text>
          <Text style={[styles.google, styles.googlePosition]}>Google</Text>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <View style={[styles.fullTimeWrapper, styles.wrapperSpaceBlock]}>
          <Text style={[styles.fullTime, styles.textTypo1]}>Full-Time</Text>
        </View>
        <View style={[styles.juniorWrapper, styles.wrapperSpaceBlock]}>
          <Text style={[styles.fullTime, styles.textTypo1]}>Junior</Text>
        </View>
        <Image
          style={styles.grommetIconsgoogle}
          contentFit="cover"
          source={require("../assets/grommeticonsgoogle.png")}
        />
        <Image
          style={styles.bookmark5}
          contentFit="cover"
          source={require("../assets/bookmark5.png")}
        />
      </View>
      <View style={[styles.component2Wrapper, styles.componentLayout]}>
        <View style={[styles.component2, styles.componentLayout]}>
          <View style={styles.childShadowBox} />
          <Text style={[styles.productManager, styles.beatsPosition1]}>
            Product Manager
          </Text>
          <Text style={[styles.beats, styles.beatsPosition]}>Facebook</Text>
          <Text style={[styles.floridaUs, styles.beatsPosition]}>
            Florida, US
          </Text>
          <Text style={[styles.y1, styles.y1Position]}>$86,000/y</Text>
          <Image
            style={[styles.image8Icon1, styles.image8IconPosition]}
            contentFit="cover"
            source={require("../assets/image-8.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  headlineTypo: {
    color: Color.grey60,
    textAlign: "left",
    fontFamily: FontFamily.medium14,
    position: "absolute",
  },
  yClr: {
    color: Color.black,
    fontFamily: FontFamily.medium14,
  },
  yearTypo: {
    fontFamily: FontFamily.circularStd,
    lineHeight: 17,
    fontSize: FontSize.medium14_size,
  },
  greenBgPosition: {
    height: 186,
    width: 280,
    top: 292,
    left: 24,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "500",
    color: Color.pureWhite,
    position: "absolute",
  },
  facebookPosition: {
    left: 62,
    color: Color.pureWhite,
    lineHeight: 21,
    textAlign: "left",
    fontFamily: FontFamily.medium14,
    position: "absolute",
  },
  googleTypo: {
    opacity: 0.75,
    top: 26,
    fontWeight: "500",
    fontSize: FontSize.medium14_size,
  },
  groupChildPosition: {
    height: 46,
    top: 0,
    left: 0,
    position: "absolute",
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
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  searchPosition1: {
    width: 327,
    left: 24,
    position: "absolute",
  },
  componentLayout: {
    height: 74,
    width: 327,
    position: "absolute",
  },
  burgerKingPosition1: {
    left: 83,
    textAlign: "left",
  },
  burgerKingPosition: {
    opacity: 0.5,
    top: 38,
    fontSize: FontSize.regular13_size,
    letterSpacing: -0.1,
    lineHeight: 21,
    color: Color.black,
    fontFamily: FontFamily.medium14,
    position: "absolute",
  },
  yTypo: {
    lineHeight: 19,
    fontSize: FontSize.medium12_size,
    textAlign: "right",
    fontWeight: "500",
  },
  beatsPosition1: {
    left: "25.38%",
    textAlign: "left",
  },
  beatsPosition: {
    top: "51.35%",
    opacity: 0.5,
    fontSize: FontSize.regular13_size,
    letterSpacing: -0.1,
    lineHeight: 21,
    color: Color.black,
    fontFamily: FontFamily.medium14,
    position: "absolute",
  },
  y1Position: {
    top: "21.62%",
    letterSpacing: -0.1,
    color: Color.black,
    fontFamily: FontFamily.medium14,
    position: "absolute",
  },
  image8IconPosition: {
    left: "7.34%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  yPosition: {
    top: 16,
    position: "absolute",
  },
  searchPosition: {
    backgroundColor: Color.grey95,
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  homepageChildPosition: {
    left: 338,
    position: "absolute",
  },
  homepageInnerPosition: {
    left: 314,
    height: 186,
    width: 280,
    top: 292,
    position: "absolute",
  },
  googlePosition: {
    left: 64,
    color: Color.pureWhite,
    fontFamily: FontFamily.circularStd,
    textAlign: "left",
    position: "absolute",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_46xl,
    top: 71,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.medium14,
    letterSpacing: -0.1,
  },
  headline: {
    top: 31,
    fontSize: 20,
    letterSpacing: -0.3,
    textAlign: "left",
    lineHeight: 24,
    left: 0,
    width: 254,
  },
  headline1: {
    fontSize: FontSize.semibold24_size,
    lineHeight: 36,
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    letterSpacing: -0.2,
    color: Color.black,
    top: 0,
    textAlign: "left",
    left: 0,
    width: 254,
    position: "absolute",
  },
  headlineParent: {
    top: 64,
    height: 55,
    width: 254,
    left: 24,
    position: "absolute",
  },
  featuredJobs: {
    fontWeight: "600",
    lineHeight: 21,
    fontSize: FontSize.medium16_size,
    top: 251,
    color: Color.black,
    letterSpacing: -0.2,
    textAlign: "left",
    fontFamily: FontFamily.medium14,
    left: 24,
    position: "absolute",
  },
  seeAll: {
    left: 309,
    top: 251,
    fontFamily: FontFamily.circularStd,
    textAlign: "left",
    color: Color.grey60,
    position: "absolute",
  },
  greenBg: {
    shadowColor: "rgba(83, 134, 228, 0.09)",
    shadowRadius: 35.09,
    elevation: 35.09,
    backgroundColor: Color.blue,
    borderRadius: Border.br_5xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 17.128820419311523,
    },
    height: 186,
    width: 280,
    top: 292,
  },
  maskGroupIcon: {
    height: 186,
    width: 280,
    top: 292,
  },
  accraGhana: {
    left: 134,
    color: Color.pureWhite,
    letterSpacing: -0.1,
    fontSize: FontSize.defaultBoldSubheadline_size,
    top: 2,
    textAlign: "left",
    fontFamily: FontFamily.medium14,
    lineHeight: 24,
  },
  text: {
    textAlign: "right",
    color: Color.pureWhite,
    letterSpacing: -0.1,
    fontSize: FontSize.defaultBoldSubheadline_size,
    top: 0,
    fontFamily: FontFamily.medium14,
    lineHeight: 24,
    left: 0,
  },
  accraGhanaParent: {
    top: 119,
    left: 3,
    width: 236,
    height: 26,
    position: "absolute",
  },
  softwareEngineer: {
    top: 2,
    fontWeight: "600",
    fontSize: FontSize.medium16_size,
    left: 62,
    letterSpacing: -0.2,
  },
  facebook: {
    left: 62,
    color: Color.pureWhite,
    lineHeight: 21,
    textAlign: "left",
    fontFamily: FontFamily.medium14,
    position: "absolute",
    letterSpacing: -0.1,
  },
  groupChild: {
    width: 46,
    backgroundColor: Color.pureWhite,
    borderRadius: Border.br_xs,
    height: 46,
  },
  softwareEngineerParent: {
    width: 207,
    height: 47,
    top: 0,
    left: 0,
    position: "absolute",
  },
  bookmark5: {
    top: 4,
    left: 215,
    width: 19,
    height: 19,
    opacity: 0.2,
    position: "absolute",
    overflow: "hidden",
  },
  groupParent: {
    left: 48,
    width: 239,
    height: 145,
    top: 316,
    position: "absolute",
  },
  popularJobs: {
    left: 26,
    top: 520,
    fontWeight: "600",
    lineHeight: 21,
    fontSize: FontSize.medium16_size,
    color: Color.black,
    letterSpacing: -0.2,
    textAlign: "left",
    fontFamily: FontFamily.medium14,
    position: "absolute",
  },
  seeAll1: {
    left: 291,
    fontSize: FontSize.regular13_size,
    top: 520,
    letterSpacing: -0.1,
    lineHeight: 21,
    textAlign: "left",
    color: Color.grey60,
    fontFamily: FontFamily.medium14,
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    width: 0,
    height: 0,
    left: 78,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    top: 0,
  },
  wifiIcon: {
    right: 29,
    width: 15,
    top: 0,
  },
  mobileSignalIcon: {
    right: 50,
    width: 17,
    top: 0,
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
  },
  text1: {
    top: 1,
    left: 7,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.defaultBoldSubheadline,
    color: Color.labelColorLightPrimary,
    width: 40,
    textAlign: "center",
    fontSize: FontSize.defaultBoldSubheadline_size,
    fontWeight: "600",
    position: "absolute",
  },
  time: {
    borderRadius: Border.br_5xl,
    top: 0,
    left: 0,
  },
  leftSide: {
    top: 12,
    left: 24,
  },
  statusBarIphoneXOrNewe: {
    width: 375,
    height: 44,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "2.71%",
    width: "5.87%",
    top: "37.47%",
    right: "78.67%",
    bottom: "59.82%",
    left: "15.47%",
  },
  groupItem: {
    borderRadius: Border.br_xl,
    height: 74,
    backgroundColor: Color.pureWhite,
    top: 0,
    left: 0,
  },
  jrExecutive: {
    lineHeight: 18,
    top: 16,
    position: "absolute",
    letterSpacing: -0.1,
    fontSize: FontSize.medium14_size,
    fontWeight: "600",
    color: Color.black,
    fontFamily: FontFamily.medium14,
  },
  burgerKing: {
    left: 83,
    textAlign: "left",
  },
  losAngelsUs: {
    left: 214,
    textAlign: "right",
  },
  y: {
    left: 241,
    top: 16,
    position: "absolute",
    letterSpacing: -0.1,
    color: Color.black,
    fontFamily: FontFamily.medium14,
  },
  childShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.pureWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 17.128820419311523,
    },
    position: "absolute",
    width: "100%",
  },
  productManager: {
    top: "21.62%",
    letterSpacing: -0.1,
    color: Color.black,
    fontFamily: FontFamily.medium14,
    position: "absolute",
    lineHeight: 18,
    fontSize: FontSize.medium14_size,
    fontWeight: "600",
  },
  beats: {
    left: "25.38%",
    textAlign: "left",
  },
  floridaUs: {
    left: "72.78%",
    textAlign: "right",
  },
  y1: {
    left: "73.7%",
    lineHeight: 19,
    fontSize: FontSize.medium12_size,
    textAlign: "right",
    fontWeight: "500",
  },
  image8Icon: {
    bottom: "20.27%",
    right: "79.51%",
    width: "13.15%",
    height: "58.11%",
    left: "7.34%",
    top: "21.62%",
  },
  component1: {
    top: 91,
    left: 0,
  },
  burgerKing41Icon: {
    left: 25,
    width: 41,
    height: 43,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 561,
    height: 165,
  },
  searchChild: {
    width: "14.68%",
    left: "85.32%",
    backgroundColor: Color.grey95,
    right: "0%",
  },
  searchItem: {
    width: "80.43%",
    right: "19.57%",
    left: "0%",
    backgroundColor: Color.grey95,
  },
  searchAJob: {
    top: "27.08%",
    left: "16.51%",
    lineHeight: 23,
    letterSpacing: -0.1,
    fontSize: FontSize.defaultBoldSubheadline_size,
    textAlign: "left",
  },
  search11Icon: {
    height: "41.67%",
    width: "6.12%",
    top: "29.17%",
    right: "86.54%",
    bottom: "29.17%",
    opacity: 0.4,
  },
  filter5Icon: {
    height: "54.17%",
    width: "7.95%",
    top: "22.92%",
    right: "3.36%",
    bottom: "22.92%",
    left: "88.69%",
  },
  search: {
    top: 163,
    height: 48,
  },
  ellipseIcon: {
    top: 72,
    left: 300,
    height: 54,
    width: 54,
    position: "absolute",
  },
  homepageChild: {
    top: 76,
    width: 16,
    height: 16,
  },
  homepageItem: {
    top: 80,
    left: 342,
    width: 8,
    height: 8,
    position: "absolute",
  },
  homepageInner: {
    backgroundColor: "#04284a",
    borderRadius: Border.br_5xl,
  },
  texas: {
    left: 196,
    color: Color.pureWhite,
    fontFamily: FontFamily.circularStd,
    lineHeight: 17,
    fontSize: FontSize.medium14_size,
    top: 0,
    textAlign: "left",
  },
  year: {
    textAlign: "right",
    color: Color.pureWhite,
    fontFamily: FontFamily.circularStd,
    lineHeight: 17,
    fontSize: FontSize.medium14_size,
    top: 0,
    left: 0,
  },
  texasParent: {
    top: 121,
    width: 232,
    height: 17,
    left: 0,
    position: "absolute",
  },
  fullStackDeveloper: {
    fontSize: 17,
    lineHeight: 20,
    top: 2,
    fontWeight: "700",
  },
  google: {
    opacity: 0.75,
    top: 26,
    fontWeight: "500",
    fontSize: FontSize.medium14_size,
    lineHeight: 17,
    left: 64,
  },
  fullStackDeveloperParent: {
    width: 229,
  },
  fullTime: {
    fontSize: FontSize.regular11_size,
    lineHeight: 18,
    textAlign: "center",
    color: Color.pureWhite,
    letterSpacing: -0.1,
  },
  fullTimeWrapper: {
    left: 78,
  },
  juniorWrapper: {
    left: 167,
  },
  grommetIconsgoogle: {
    left: 12,
    width: 22,
    height: 22,
    top: 12,
    position: "absolute",
    overflow: "hidden",
  },
  groupContainer: {
    width: 234,
    height: 138,
    top: 316,
  },
  image8Icon1: {
    display: "none",
    bottom: "20.27%",
    right: "79.51%",
    width: "13.15%",
    height: "58.11%",
    left: "7.34%",
    top: "21.62%",
  },
  component2: {
    top: 0,
    left: 0,
  },
  component2Wrapper: {
    top: 746,
    left: 23,
  },
  vectorIcon1: {
    height: "4.57%",
    width: "10.67%",
    top: "87.7%",
    right: "74.93%",
    bottom: "7.72%",
    left: "14.4%",
  },
  homepage: {
    backgroundColor: Color.bG,
    flex: 1,
    height: 870,
    overflow: "hidden",
    width: "100%",
  },
});

export default Homepage;
