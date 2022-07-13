import * as React from "react";
import { useMetronomeContext } from "../MetronomeContext";
import Select from "../Ui/Inputs/Select";

interface ISignatureProps {}

const beat = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sub = [2, 4, 8];

const Signature: React.FunctionComponent<ISignatureProps> = (props) => {
  const { signature, setSignature } = useMetronomeContext();

  return (
    <div>
      <Select
        value={signature[0]}
        onChange={(v) => setSignature((s) => [v, s[1]])}
        options={beat.map((b) => ({ label: b, value: b }))}
      />
      <Select
        value={signature[1]}
        onChange={(v) => setSignature((s) => [s[0], v])}
        options={sub.map((b) => ({ label: b, value: b }))}
      />
    </div>
  );
};

export default Signature;
