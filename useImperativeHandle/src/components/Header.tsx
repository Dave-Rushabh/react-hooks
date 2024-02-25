import { Flex } from "antd";

const Header = ({
  title,
  btnText,
  onClick,
}: {
  title: string;
  btnText: String;
  onClick: () => void;
}) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className="m-4 p-4 bg-slate-100 rounded-lg"
    >
      <p className="font-semibold">{title}</p>
      <button
        onClick={() => {
          onClick();
          console.log("Called through ref exposing");
        }}
        className="py-2 px-4 rounded-lg border-[1px] border-slate-400 text-sm hover:bg-slate-400 hover:text-white transition-all duration-300"
      >
        {btnText}
      </button>
    </Flex>
  );
};

export default Header;
