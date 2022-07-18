// import * as React from "react";

// type El = keyof JSX.IntrinsicElements;

// type EleProps<T extends El = "div"> = {
//   [Property in keyof JSX.IntrinsicElements[T]]: JSX.IntrinsicElements[T][Property];
// };

// type IBoxProps<T extends El = "div"> = {
//   as?: T;
// } & EleProps<T>;

// function Box<T extends El = "div">(props: IBoxProps<T>) {
//   const { as, children } = props;

//   const Component = as || "div";
//   //@ts-ignore
//   return <Component {...props}>{children}</Component>;
// }

// export default Box;

export {};
