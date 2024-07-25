import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import Typewriter from "typewriter-effect";
import { AiOutlineDown } from "react-icons/ai";

const Loop = () => {
  // codeText for Css
  const curlystart = ` {`;
  const curlyend = ` }`;
  const parenthesisStart = `(`;
  const parenthesisEnd = `)`;

  // codeText for JS
  const forloop = `for`;
  const cdcmp = `cdcmp`;
  const semicolon = `;`;
  const cnsl = `console`;
  const log = `log`;
  console.log("tapu");

  return (
    <>
      <div className=" h-96 bg-gray-700">
        <div className="w-full ">
          {/* <div className="flex justify-around text-white gap-14">
            <div className=" flex justify-start items-center gap-x-4 text-white">
              <SettingsOutlinedIcon className="w-4 h-4 bg-gray-600 bg-clip-text" />
              <h3 className="text-white font-semibold">Js</h3>
            </div>
            <AiOutlineDown className="w-4 h-4 bg-slate-50 bg-clip-text" />
          </div> */}
         &nbsp;&nbsp; <span className="text-yellow-600">{forloop}</span>{" "}
          <span className="text-green-300 font-semibold">
            {parenthesisStart}
          </span>{" "}
          <span className="text-white font-semibold">initialization</span>{" "}
          <span className="text-yellow-400 font-semibold">{semicolon}</span>{" "}
          <span className="text-white font-semibold">condition</span>{" "}
          <span className="text-yellow-400 font-semibold">{semicolon}</span>{" "}
          <span className="text-white font-semibold">incre/decre</span>{" "}
          <span className="text-green-300 font-semibold">{parenthesisEnd}</span>
          &nbsp;&nbsp;
          <span className="text-white font-semibold">{curlystart}</span>
          <br />
          &nbsp;&nbsp; <span className="text-violet-300 font-semibold">{cnsl}</span>
          <span className="text-white font-semibold">{"."}</span>
          <span className="text-green-700 font-semibold">{log}</span>
          <span className="text-white font-semibold">{parenthesisStart}</span>
          <span className="text-yellow-600 font-semibold">{`"`}</span>
          <span className="text-cyan-900 font-semibold">`//statement</span>
          <span className="text-yellow-600 font-semibold">{`"`}</span>
          <span className="text-white font-semibold">{parenthesisEnd}</span>
          <span className="text-white font-semibold">{";"}</span>
          <br/>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-white font-semibold ">{curlyend}</span>
        </div>
      </div>
    </>
  );
};

export default Loop;
