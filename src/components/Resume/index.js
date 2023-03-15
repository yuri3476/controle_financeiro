import React from "react";
import ResumeIntem from "../ResumeItem";
import * as C from "./styles";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = ( {income, expense, total} ) => {
    return(
        <C.Container>
            <ResumeIntem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
            <ResumeIntem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}/>
            <ResumeIntem title="Total" Icon={FaDollarSign} value={total}/>
        </C.Container>
    );
};

export default Resume;

