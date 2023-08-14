import { animated } from "@react-spring/web";
import { styled } from "@utils/stitches.config";

export const IconContainer = styled(animated.div, {
  width: "60px",
  borderRadius: "50%",
  bottom: "300px",
  right: "10px",
  border: "none",
  position: "absolute",
  backgroundClip: "content-box",
  display: "grid",
  placeItems: "center",
  zIndex: 10,
  touchAction: "none",
  padding: "12px 0 12px 0",
  gap: 8,
  // backdropFilter: "blur(8px)",
  alignItems: "center",
});
