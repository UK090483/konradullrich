// import useHover from "@hooks/useHover";
// import * as React from "react";
// import roundPathCorners from "./PathRounding";

// interface ISVGProps extends React.SVGProps<SVGSVGElement> {}

// const SVG: React.FunctionComponent<ISVGProps> = (props) => {
//   const { className, ...rest } = props;

//   const path = React.useMemo(() => getForm({ corners: 3, rotation: 0 }), []);

//   console.log(path);

//   return (
//     <svg
//       {...rest}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 100 100"
//       className={`inline-block w-60 h-60 stroke-current fill-none  border-red border-2 ${className}`}
//       fill="none"
//     >
//       <path
//         style={{ transition: "all 1s" }}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d={path}
//       />
//     </svg>
//   );
// };

// export default SVG;

// type Position = [number, number];

// const getForm = ({
//   corners = 20,
//   rotation = 0,
// }: {
//   corners?: number;
//   rotation?: number;
// }) => {
//   const center: Position = [50, 50];
//   const size = 30;

//   let currentPosition: Position = [0, 0];

//   const makeLine = (pos: Position) => {
//     currentPosition = pos;
//     return `L${pos[0]},${pos[1]} `;
//   };
//   const makeArc = (pos: Position) => {
//     currentPosition = pos;
//     return `A${pos[0]},${pos[1]} `;
//   };
//   const moveTo = (pos: Position) => {
//     currentPosition = pos;
//     return `M${pos[0]},${pos[1]} `;
//   };

//   const getCirclePoint = (a: number) => {
//     const prepared = (a % 100) / 50 + (1.5 + rotation);
//     const radius = Math.PI * prepared;
//     const x = Math.cos(radius) * size + center[0];
//     const y = Math.sin(radius) * size + center[1];
//     return [x, y] as Position;
//   };

//   let res = moveTo(getCirclePoint(0));

//   for (let index = 0; index < corners; index++) {
//     const r = (100 / corners) * (index + 1);
//     res += makeLine(getCirclePoint(r));
//   }

//   return res + " Z";
// };
export {};
