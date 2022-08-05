import Button from "@components/Button/Button";
import Typo from "@components/Typography/Typography";

const Page = () => {
  return (
    <div className=" w-screen h-screen  b-red grid justify-center items-center">
      <Typo variant="h1">B</Typo>
      <Button href={"/a"}>A</Button>
    </div>
  );
};

export default Page;
