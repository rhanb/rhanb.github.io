import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode[] | ReactNode;
  onClick?: () => void;
};

export default ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="z-10 flex items-center justify-center rounded-lg p-2 shadow focus:outline-none focus:shadow-pressed text-xs rhanb-background-secondary"
      onClick={(event) => {
        event.preventDefault();
        event.currentTarget.blur();
        onClick && onClick();
      }}
    >
      {children}
    </button>
  );
};
