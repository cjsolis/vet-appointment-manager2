import { FC } from "react";

export interface IErrorProps {
  message: string;
}

const Error: FC<IErrorProps> = ({ message }) => {
  return (
    <div className="mb-5 bg-red-600 text-center font-bold text-white py-3 rounded-lg">
      {message}
    </div>
  );
};

export default Error;
