import { animated } from "@react-spring/web";
import { styled } from "@utils/stitches.config";

export const FloatingButton = styled(animated.div, {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    bottom: "10px",
    right: "10px",
    border: "none",
    position: "fixed",
    backgroundClip: "content-box",
    display: "grid",
    placeItems: "center",
    zIndex: 10,
    touchAction: "none",
    backdropFilter: "blur(4px)",
  
    "&:focus-visible": {
      outlineOffset: 2,
      outline: "#569AFF99 auto 6px",
    },
  
    "& > span": {
      borderRadius: "inherit",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      backgroundColor: "#1E1E1E",
    },
  });