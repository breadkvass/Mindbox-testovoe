import { FC } from "react";

type ChevronDownProps = {
    onClickHandler: React.MouseEventHandler<SVGSVGElement>;
}

const ChevronDown: FC<ChevronDownProps> = ({onClickHandler}) => {
    return (
        <svg onClick={onClickHandler} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <polygon fill="#E6E6E6" points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"/>
        </svg>
    )
}

export default ChevronDown;