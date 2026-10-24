import { StyleSheet } from "react-native";

export const UNIT = 4;

export function u(value: number) {
  return value * UNIT;
}

export const s = StyleSheet.create({
  // Font — body (Figtree)
  fontNormal: {
    fontFamily: "Figtree-Regular",
  },
  fontMedium: {
    fontFamily: "Figtree-Medium",
  },
  fontSemibold: {
    fontFamily: "Figtree-SemiBold",
  },
  fontBold: {
    fontFamily: "Figtree-Bold",
  },

  // Font — display (Bricolage Grotesque)
  displayNormal: {
    fontFamily: "BricolageGrotesque-Regular",
  },
  displayMedium: {
    fontFamily: "BricolageGrotesque-Medium",
  },
  displaySemibold: {
    fontFamily: "BricolageGrotesque-SemiBold",
  },
  displayBold: {
    fontFamily: "BricolageGrotesque-Bold",
  },

  // Layout

  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexCol: {
    flexDirection: "column",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  flexGrow: {
    flexGrow: 1,
  },

  // Alignment
  itemsStart: {
    alignItems: "flex-start",
  },
  itemsCenter: {
    alignItems: "center",
  },
  itemsEnd: {
    alignItems: "flex-end",
  },
  itemsStretch: {
    alignItems: "stretch",
  },

  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyAround: {
    justifyContent: "space-around",
  },
  justifyEvenly: {
    justifyContent: "space-evenly",
  },

  selfStart: {
    alignSelf: "flex-start",
  },
  selfCenter: {
    alignSelf: "center",
  },
  selfEnd: {
    alignSelf: "flex-end",
  },
  selfStretch: {
    alignSelf: "stretch",
  },

  // Padding
  p0: {
    padding: 0,
  },
  p1: {
    padding: u(1),
  },
  p2: {
    padding: u(2),
  },
  p3: {
    padding: u(3),
  },
  p4: {
    padding: u(4),
  },
  p5: {
    padding: u(5),
  },
  p6: {
    padding: u(6),
  },
  p8: {
    padding: u(8),
  },

  px0: {
    paddingHorizontal: 0,
  },
  px1: {
    paddingHorizontal: u(1),
  },
  px2: {
    paddingHorizontal: u(2),
  },
  px3: {
    paddingHorizontal: u(3),
  },
  px4: {
    paddingHorizontal: u(4),
  },
  px5: {
    paddingHorizontal: u(5),
  },
  px6: {
    paddingHorizontal: u(6),
  },
  px8: {
    paddingHorizontal: u(8),
  },

  py0: {
    paddingVertical: 0,
  },
  py1: {
    paddingVertical: u(1),
  },
  py2: {
    paddingVertical: u(2),
  },
  py3: {
    paddingVertical: u(3),
  },
  py4: {
    paddingVertical: u(4),
  },
  py5: {
    paddingVertical: u(5),
  },
  py6: {
    paddingVertical: u(6),
  },
  py8: {
    paddingVertical: u(8),
  },

  pt1: {
    paddingTop: u(1),
  },
  pt2: {
    paddingTop: u(2),
  },
  pt3: {
    paddingTop: u(3),
  },
  pt4: {
    paddingTop: u(4),
  },
  pt5: {
    paddingTop: u(5),
  },
  pt6: {
    paddingTop: u(6),
  },
  pt7: {
    paddingTop: u(7),
  },
  pt8: {
    paddingTop: u(8),
  },

  pb1: {
    paddingBottom: u(1),
  },
  pb2: {
    paddingBottom: u(2),
  },
  pb3: {
    paddingBottom: u(3),
  },
  pb4: {
    paddingBottom: u(4),
  },
  pb5: {
    paddingBottom: u(5),
  },
  pb6: {
    paddingBottom: u(6),
  },
  pb7: {
    paddingBottom: u(7),
  },
  pb8: {
    paddingBottom: u(8),
  },

  pl0: {
    paddingLeft: 0,
  },
  pl1: {
    paddingLeft: u(1),
  },
  pl2: {
    paddingLeft: u(2),
  },
  pl3: {
    paddingLeft: u(3),
  },
  pl4: {
    paddingLeft: u(4),
  },
  pl5: {
    paddingLeft: u(5),
  },
  pl6: {
    paddingLeft: u(6),
  },
  pl7: {
    paddingLeft: u(7),
  },
  pl8: {
    paddingLeft: u(8),
  },

  pr0: {
    paddingRight: 0,
  },
  pr1: {
    paddingRight: u(1),
  },
  pr2: {
    paddingRight: u(2),
  },
  pr3: {
    paddingRight: u(3),
  },
  pr4: {
    paddingRight: u(4),
  },
  pr5: {
    paddingRight: u(5),
  },
  pr6: {
    paddingRight: u(6),
  },
  pr7: {
    paddingRight: u(7),
  },
  pr8: {
    paddingRight: u(8),
  },

  // Margin
  m0: {
    margin: 0,
  },
  m1: {
    margin: u(1),
  },
  m2: {
    margin: u(2),
  },
  m3: {
    margin: u(3),
  },
  m4: {
    margin: u(4),
  },
  m6: {
    margin: u(6),
  },
  m8: {
    margin: u(8),
  },

  mt1: {
    marginTop: u(1),
  },
  mt2: {
    marginTop: u(2),
  },
  mt3: {
    marginTop: u(3),
  },
  mt4: {
    marginTop: u(4),
  },
  mt5: {
    marginTop: u(5),
  },
  mt6: {
    marginTop: u(6),
  },
  mt7: {
    marginTop: u(7),
  },
  mt8: {
    marginTop: u(8),
  },

  mb1: {
    marginBottom: u(1),
  },
  mb2: {
    marginBottom: u(2),
  },
  mb3: {
    marginBottom: u(3),
  },
  mb4: {
    marginBottom: u(4),
  },
  mb5: {
    marginBottom: u(5),
  },
  mb6: {
    marginBottom: u(6),
  },
  mb7: {
    marginBottom: u(7),
  },
  mb8: {
    marginBottom: u(8),
  },

  ml0: {
    marginLeft: 0,
  },
  ml1: {
    marginLeft: u(1),
  },
  ml2: {
    marginLeft: u(2),
  },
  ml3: {
    marginLeft: u(3),
  },
  ml4: {
    marginLeft: u(4),
  },
  ml5: {
    marginLeft: u(5),
  },
  ml6: {
    marginLeft: u(6),
  },
  ml7: {
    marginLeft: u(7),
  },
  ml8: {
    marginLeft: u(8),
  },

  mr0: {
    marginRight: 0,
  },
  mr1: {
    marginRight: u(1),
  },
  mr2: {
    marginRight: u(2),
  },
  mr3: {
    marginRight: u(3),
  },
  mr4: {
    marginRight: u(4),
  },
  mr5: {
    marginRight: u(5),
  },
  mr6: {
    marginRight: u(6),
  },
  mr7: {
    marginRight: u(7),
  },
  mr8: {
    marginRight: u(8),
  },

  mxAuto: {
    marginHorizontal: "auto",
  },

  // Gap
  gap1: {
    gap: u(1),
  },
  gap2: {
    gap: u(2),
  },
  gap3: {
    gap: u(3),
  },
  gap4: {
    gap: u(4),
  },
  gap5: {
    gap: u(5),
  },
  gap6: {
    gap: u(6),
  },
  gap7: {
    gap: u(7),
  },
  gap8: {
    gap: u(8),
  },

  // Border radius
  roundedNone: {
    borderRadius: 0,
  },
  roundedSm: {
    borderRadius: u(2),
  },
  rounded: {
    borderRadius: u(3),
  },
  roundedMd: {
    borderRadius: u(4),
  },
  roundedLg: {
    borderRadius: u(5),
  },
  roundedXl: {
    borderRadius: u(6),
  },
  rounded2xl: {
    borderRadius: u(7),
  },
  rounded3xl: {
    borderRadius: u(8),
  },
  roundedFull: {
    borderRadius: 999,
  },

  // Border width
  border0: {
    borderWidth: 0,
  },
  border1: {
    borderWidth: StyleSheet.hairlineWidth,
  },
  border2: {
    borderWidth: 2,
  },
  borderT0: {
    borderTopWidth: 0,
  },
  borderT1: {
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  borderT2: {
    borderTopWidth: 2,
  },
  borderB0: {
    borderBottomWidth: 0,
  },
  borderB1: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  borderB2: {
    borderBottomWidth: 2,
  },

  // Typography
  textXs: {
    fontSize: 12,
    lineHeight: 16,
  },
  textSm: {
    fontSize: 14,
    lineHeight: 20,
  },
  textBase: {
    fontSize: 16,
    lineHeight: 24,
  },
  textLg: {
    fontSize: 18,
    lineHeight: 28,
  },
  textXl: {
    fontSize: 20,
    lineHeight: 28,
  },
  text2xl: {
    fontSize: 24,
    lineHeight: 32,
  },
  text3xl: {
    fontSize: 30,
    lineHeight: 36,
  },

  textLeft: {
    textAlign: "left",
  },
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },

  // Size
  wAuto: {
    width: "auto",
  },
  wFull: {
    width: "100%",
  },
  hAuto: {
    width: "auto",
  },
  hFull: {
    height: "100%",
  },

  // Position
  relative: {
    position: "relative",
  },
  absolute: {
    position: "absolute",
  },

  // Effects
  overflowHidden: {
    overflow: "hidden",
  },
  opacity50: {
    opacity: 0.5,
  },
  opacity75: {
    opacity: 0.75,
  },

  // Shadows
  shadowNone: {
    shadowColor: "transparent",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  shadowSm: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  shadowMd: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  shadowLg: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.14,
    shadowRadius: 16,
    elevation: 8,
  },
  shadowXl: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 12,
  },

  // Common presets
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minHeight: u(12),
    paddingHorizontal: u(6),
    paddingVertical: u(3),
    borderRadius: u(4),
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    minHeight: u(12),
    paddingHorizontal: u(4),
    paddingVertical: u(3),
    borderRadius: u(4),
    borderWidth: StyleSheet.hairlineWidth,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    width: "100%",
  },
});
