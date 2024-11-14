import { FC } from "react";

type ChevronUpProps = {
    onClickHandler: React.MouseEventHandler<SVGSVGElement>;
}

const ChevronUp: FC<ChevronUpProps> = ({onClickHandler}) => {
    return (
        <svg onClick={onClickHandler} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <polygon fill="#E6E6E6" points="12 6.586 3.293 15.293 4.707 16.707 12 9.414 19.293 16.707 20.707 15.293 12 6.586"/>
        </svg>
    )
}

export default ChevronUp;