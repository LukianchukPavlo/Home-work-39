import type { FC } from "react";

interface StatelessProps {
    text: string;
    onClick: () => void;
}

const Stateless: FC<StatelessProps> = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
};

export default Stateless;