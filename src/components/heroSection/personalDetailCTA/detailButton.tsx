import User3DIcon from "@assets/webIcons/3dicons.svg";
import BlobUserIcon from "@assets/webIcons/3diconsBlob.svg";
import { useSpring, useSprings } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { FloatingButton } from "./FloatingButton";
import { IconContainer } from "./IconContainer";
import { SocialIcon } from "./socialIcon";

const Socials = ["#669EF2", "#F9DB6D", "#DC602E", "#83BB70"];
const SocialsI = [
  {
    Icon: "",
    Url: "",
  },
];

export default function DetailButton() {
  const buttonRef = React.useRef<HTMLDivElement>(null!);
  const socialIconRefs = React.useRef<HTMLDivElement[]>([]);
  const socialIconRefInitialPositions = React.useRef<number[]>([]);
  const containerRef = React.useRef<HTMLDivElement>(null!);

  const isVisible = React.useRef(false);

  const [{ x, y, opacity }, api] = useSpring(
    () => ({
      x: 0,
      y: 0,
      opacity: 0,
    }),
    []
  );

  const [socialIconSprings, socialIconApi] = useSprings(
    Socials.length,
    (i) => ({
      y: 0,
    }),
    []
  );

  useEffect(() => {
    if (socialIconRefInitialPositions.current.length === 0) {
      const { y: buttonY } = buttonRef.current.getBoundingClientRect();

      socialIconRefInitialPositions.current = socialIconRefs.current.map(
        (node) => buttonY - node.getBoundingClientRect().y
      );
    }

    socialIconApi.start((i) => ({
      y: socialIconRefInitialPositions.current[i],
      immediate: true,
    }));
  }, [socialIconApi]);

  const backgroundTimeoutRef = React.useRef<ReturnType<typeof setTimeout>>();
  const socialIconTimeoutRef = React.useRef<ReturnType<typeof setTimeout>>();

  const bindGestures = useGesture({
    onMouseDown: () => {
      if (backgroundTimeoutRef.current) {
        clearTimeout(backgroundTimeoutRef.current);
      }
      if (socialIconTimeoutRef.current) {
        clearTimeout(socialIconTimeoutRef.current);
      }

      isVisible.current = true;

      api.start({
        opacity: 1,
      });

      socialIconApi.start({
        y: 0,
      });
    },
    onMouseLeave: () => {
      backgroundTimeoutRef.current = setTimeout(() => {
        api.start({
          opacity: 0,
        });
      }, 400);

      socialIconTimeoutRef.current = setTimeout(() => {
        socialIconApi.start((i) => ({
          y: socialIconRefInitialPositions.current[i],
          onRest: () => {
            isVisible.current = false;
          },
        }));
      }, 600);
    },
  });

  const { onPointerEnter, onPointerLeave, onPointerDown, ...restGestures } =
    bindGestures();

  const handlePointerDown =
    (isBackground: boolean) => (e: React.PointerEvent<HTMLElement>) => {
      if (isBackground && !isVisible.current) {
        return;
      }

      if (onPointerDown) {
        onPointerDown(e);
      }
    };

  // Remember to Blur The Button
  return (
    <div className="fixed bottom-0 right-0">
      {/* @mucyoalexaxel Replace this with an animated popup Modal */}
      {/* <IconContainer
        ref={containerRef}
        onPointerLeave={onPointerLeave}
        onPointerDown={handlePointerDown(true)}
        {...restGestures}
        style={{
          x,
          y,
          // backgroundColor: opacity.to(
          //   (o: number) => `rgba(255,255,255,${0.3 * o})`
          // ),
        }}
      >
        {socialIconSprings.map((springs, index) => (
          <SocialIcon
            key={Socials[index]}
            ref={(ref: HTMLDivElement) =>
              (socialIconRefs.current[index] = ref!)
            }
            css={{
              backgroundColor: Socials[index],
            }}
            style={springs}
          />
        ))}
      </IconContainer> */}

      <FloatingButton
        ref={buttonRef}
        onPointerEnter={onPointerEnter}
        onPointerDown={handlePointerDown(false)}
        {...restGestures}
        style={{
          backgroundColor: "#1E1E1E",
          boxShadow: opacity.to(
            (o) => `0px 3px 8px 2px rgba(30,30,30,${0.4 * 1 - o})`
          ),
        }}
      >
        <User3DIcon className="relative z-10" />
      </FloatingButton>
      <BlobUserIcon className="fixed bottom-3 right-9 z-0 blur-md" />
    </div>
  );
}
