import { css } from "styled-components";
import "./font.css";

// Thin 100, ExtraLight 200, Light 300, Regular 400, Medium 500
// SemiBold 600, Bold 700, ExtraBold 800, Black 900
export const Theme = {
  fonts: {
    mainTitle: css`
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 600;
      font-size: 54px;
    `,
    heading: css`
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 600;
      font-size: 28px;
    `,
    default: css`
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 500;
      font-size: 20px;
    `,
    helperText: css`
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 500;
      font-size: 16px;
    `,
    button: css`
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 600;
      font-size: 36px;
    `,
    subTitle: css`
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 600;
      font-size: 20px;
    `,
    subText: css`
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 500;
      font-size: 20px;
    `,
    subBoldText: css`
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 600;
      font-size: 21px;
    `,
  },

  colors: {
    gray: "#717171",
    red: "#D72F2F",
    green: "#2BCD3B",
    lightBlue: "#99CEFF",
    blue: "#59A4FB",
  },
};