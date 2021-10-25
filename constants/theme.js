import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

export const Hosturl = {
api:'https://webtechnomind.in/project/cygal/vendor/api/'

}
export const Imgurl = {
    path:"https://webtechnomind.in/project/cygal/vendor/public/uploads/"
    
    }
export const COLORS = {
    primary: "",
    secondary: "",

    black: "#000000",
    white: "#ffffff",

    cyan: "#11bcc3",
    blue: "#0A4AA2",
    cilver: "#CECCCC",
    gray: "#979292",
    gray1: "#6A6A6A",
    yellow: "#EBAE1F",
    red: "#EE1010",
    green: "#75D10C",
    deepteal: "#0D2826"
}

export const SIZES = {
    // global size
    base: 8,
    front: 14,
    radius: 12,
    padding: 10,
    padding2: 12,
    margin: 10,
    margin2: 12,

    large: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    width,
    height,
    light:'300',
    regular:'400',
    medium:'500',
    semibold:'600',
    bold:'700',
    thik:'900'
};

export const FONTS = {
    large: { fontSize: SIZES.large },
    h1: { fontSize: SIZES.h1 },
    h2: { fontSize: SIZES.h2, color: COLORS.cyan },
    h3: { fontSize: SIZES.h3 },
    h4: { fontSize: SIZES.h4 },
    h5: { fontSize: SIZES.h5, color: COLORS.cyan },
    h6: { fontSize: SIZES.h6 },
    body1: { fontSize: SIZES.body1 },
    body2: { fontSize: SIZES.body2 },
    body3: { fontSize: SIZES.body3 },
    body4: { fontSize: SIZES.body4 },
    body5: { fontSize: SIZES.body5 }
}

const appTheme = {COLORS, SIZES, FONTS,Hosturl};

export default appTheme;
