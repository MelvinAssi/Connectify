import React, { useState, useEffect, useContext } from "react";
import "./Wall.css";
import Message from "../Message/Message";
import { UserContext } from "../../contexts/userContext.js";

import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";
import { ReactComponent as AttachFileIcon } from "../../assets/icons/attach_file.svg";

function Wall() {
    const { currentUser, setUserData, getUserData } = useContext(UserContext);

    const [message, setMessage] = useState(""); 
    const [messages, setMessages] = useState([]); 
    const [file, setFile] = useState(null);

    useEffect(() => {
        const fetchUserWall = async () => {
            if (currentUser) {
                const wallData = await getUserData(currentUser.uid, "wall");
                if (wallData && Array.isArray(wallData)) {
                    setMessages(wallData); // Populate messages from wall data
                }
            }
        };
        fetchUserWall();
    }, [currentUser, getUserData]);

    // Handle sending a new message
    const handleSendMessage = () => {
        if (message.trim() !== "") {
            const currentDate = new Date().toLocaleString();
            const newMessage = {
                text: message,
                date: currentDate,
                file: file,
            };
            setUserData(currentUser.uid, "wall", newMessage);
            setMessages((prevMessages) => ([...prevMessages, newMessage]));
            setMessage("");
            setFile(null);
        }
    };

    // Handle file upload
    const handleAddFile = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    // Handle message text change
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
                
                <textarea
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Écrivez un message..."
                    rows="1" 
                />
                <button onClick={handleSendMessage}>
                    <SendIcon></SendIcon>
                </button>
                <label htmlFor="file-upload" className="file-upload-label">
                    <AttachFileIcon></AttachFileIcon>
                </label>
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
