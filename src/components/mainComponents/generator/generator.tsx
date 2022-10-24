import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Slider from "@mui/material/Slider";
import s from "./generator.module.css";
import classNames from "classnames";
import { IGenerate } from "../../../test";
import { Checkitem } from "../checkitem/checkitem";

interface IGenerator {
    handleCopy: () => void;
    handleGenerate: (obj: IGenerate) => void;
    handleChange: (e: Event, value: number | number[]) => void;
    password: string;
    value: number;
}

export const Generator: React.FC<IGenerator> = ({
    handleChange,
    handleCopy,
    handleGenerate,
    password,
    value,
}) => {
    const [upper, setChecked1] = useState<boolean>(true);
    const [lower, setChecked3] = useState<boolean>(true);
    const handleupper = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked1(event.target.checked);


    };
    const handlelower = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked3(event.target.checked)
    }
    const obj = { upper, lower }
    const passwordStatus = () => {
        if (password.length >= 10 && obj.upper && obj.lower) {
            return 'Strong password'
        } else if (password.length >= 10) {
            return 'Normal password'
        } else {
            return 'Moderate'
        }
    }
    return (
        <>
            <div className={s.content}>
                <div className={s.generatorContent}>
                    <h1 className={s.password}>{password}</h1>
                    <div style={{ display: "flex" }}>
                        <span className={s.update}>
                            <ArrowForwardIcon
                                onClick={() => handleGenerate(obj)}
                                sx={{ fontSize: "50px", cursor: "pointer" }}
                                fontSize="large"
                            />
                        </span>
                        <button className={s.copy} onClick={() => handleCopy()}>
                            Copy
                        </button>
                    </div>
                </div>
                <div className={s.othercont}>
                    <p className={s.passStatus}>
                        Password strenght: <span className={classNames(s.status, password.length < 10 ? s.bad : s.success)}>{passwordStatus()}</span>
                    </p>
                    <hr />
                    <div className={s.sliderdiv}>
                        <p className={s.passStatus1}>Password length:</p>
                        <Slider
                            value={value}
                            onChange={(e, value) => handleChange(e, value)}
                            defaultValue={10}
                            valueLabelDisplay="auto"
                            min={3}
                            sx={{
                                color: "rgb(0, 212, 141)",
                                maxWidth: "550px",
                                marginTop: "12px",
                                marginRight: "25px",
                            }}
                            step={1}
                            max={25}
                        />
                    </div>
                    <hr style={{ marginBottom: '0' }} />
                    <div className={s.checkboxes}>
                        <Checkitem value={lower} handle={handlelower} text={'Use lower'}/>
                        <Checkitem value={upper} handle={handleupper} text={'Use upper'}/>
                    </div>
                </div>
            </div>
        </>
    );
};
