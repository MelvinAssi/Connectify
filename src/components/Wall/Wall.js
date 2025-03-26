import React, { useState } from "react";
import "./Wall.css";
import Message from "../Message/Message";

function Wall() {
    const [message, setMessage] = useState(""); 
    const [messages, setMessages] = useState([]); 
    const [file, setFile] = useState(null);

  
    const handleSendMessage = () => {
        if (message.trim() !== "") {
            const currentDate = new Date().toLocaleString();
            setMessages([...messages, { text: message, date: currentDate ,file: file }]);
            setMessage("");
            setFile(null);
        }
    };
    const handleAddFile = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <div className="wall_container">
            <div className="messages_container">
                {messages.map((msgObj, index) => (
                    <div key={index} className="message">
                        <Message msg={msgObj.text} date={msgObj.date} file={msgObj.file} />
                    </div>
                ))}
            </div>

            <div className="input_container">
                <input
                    type="text"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Ecrivez un message..."
                />
                <button onClick={handleSendMessage}>Envoyer</button>
                <label htmlFor="file-upload" className="file-upload-label">Joindre</label>
                <input
                    type="file"
                    id="file-upload"
                    style={{ display: "none" }}
                    onChange={handleAddFile}
                />
            </div>
        </div>
    );
}

export default Wall;
