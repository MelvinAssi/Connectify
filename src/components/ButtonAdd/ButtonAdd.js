import React, { useRef } from "react";
import styled from "styled-components";


const AddButton = styled.button`
    border: none;
    border-radius: 20px;
    background-color: var(--color7);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 30px;
    font-weight: 700;
    color: var(--color5);
    height: 70px;
    width: 50vw;
    cursor: pointer;

    @media (max-width: 768px) {
        font-size: 20px;
        height: 60px;
    }
`;

const HiddenFileInput = styled.input`
    display: none;
`;

const ButtonAdd = ({ text, onClick, filetype }) => {
    const fileInputRef = useRef();

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <AddButton onClick={triggerFileInput}>
                {text || "add ..."}
            </AddButton>
            <HiddenFileInput
                ref={fileInputRef}
                type="file"
                accept={filetype}
                onChange={onClick}
            />
        </>
    );
};

export default ButtonAdd;