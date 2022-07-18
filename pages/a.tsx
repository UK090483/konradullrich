import Button from "@components/Button/Button";
import Typo from "@components/Typography/Typography";
import Link from "next/link";

const Page = () => {
  return (
    <div className=" w-screen h-screen  b-red grid justify-center items-center">
      <Typo variant="h1">A</Typo>
      <Button href={"/b"}>B</Button>
    </div>
  );
};

export default Page;
