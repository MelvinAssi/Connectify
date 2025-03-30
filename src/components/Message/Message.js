import React from "react";
import styled from "styled-components"; // Importez styled-components

// Définir les composants stylisés
const MessageContainer = styled.div`
    position: relative;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f1f1f1;
    border-radius: 5px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const MessageText = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
    text-align: justify; /* Texte justifié */
`;

const MessageDate = styled.div`
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-size: 12px;
    color: gray;
`;

const MessageFile = styled.div`
    margin-bottom: 10px;
`;

const MessageImage = styled.img`
    max-width: 100%;
    height: auto;
`;

// Composant Message
const Message = ({ msg, date, file }) => {
    return (
        <MessageContainer>
            {file && file.type.startsWith("image/") && (
                <MessageFile>
                    <MessageImage src={URL.createObjectURL(file)} alt="file" />
                </MessageFile>
            )}
            <MessageText>{msg}</MessageText>
            <MessageDate>{date}</MessageDate>
        </MessageContainer>
    );
};

export default Message;