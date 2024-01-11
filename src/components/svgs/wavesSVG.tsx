import * as React from "react"
const WavesSVG = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={184}
    fill="none"
    {...props}
  >
    <g strokeLinecap="round" strokeWidth={3}>
      <path
        stroke="#FF0046"
        d="M2 21 19.818 3l17.818 18L55.455 3l17.818 18L91.09 3l17.818 18 17.818-18 17.818 18 17.819-18 17.818 18L198 3"
      />
      <path
        stroke="#3BFF18"
        d="m2 48 17.818-18 17.818 18 17.819-18 17.818 18L91.09 30l17.818 18 17.818-18 17.818 18 17.819-18 17.818 18L198 30"
      />
      <path
        stroke="#FF0046"
        d="m2 74 17.818-18 17.818 18 17.819-18 17.818 18L91.09 56l17.818 18 17.818-18 17.818 18 17.819-18 17.818 18L198 56"
      />
      <path
        stroke="#3BFF18"
        d="m2 101 17.818-18 17.818 18 17.819-18 17.818 18L91.09 83l17.818 18 17.818-18 17.818 18 17.819-18 17.818 18L198 83"
      />
      <path
        stroke="#FF0046"
        d="m2 128 17.818-18 17.818 18 17.819-18 17.818 18 17.818-18 17.818 18 17.818-18 17.818 18 17.819-18 17.818 18L198 110"
      />
      <path
        stroke="#3BFF18"
        d="m2 154 17.818-17 17.818 17 17.819-17 17.818 17 17.818-17 17.818 17 17.818-17 17.818 17 17.819-17 17.818 17L198 137"
      />
      <path
        stroke="#FF0046"
        d="m2 181 17.818-18 17.818 18 17.819-18 17.818 18 17.818-18 17.818 18 17.818-18 17.818 18 17.819-18 17.818 18L198 163"
      />
    </g>
  </svg>
)
export default WavesSVG
