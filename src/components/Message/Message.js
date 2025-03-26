import React from "react";
import "./Message.css"


const Message=({ msg, date, file})=>{
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    return(
        <>
        <div className="message_container">
        {file && file.type.startsWith("image/") && (
                <div className="message_file">
                    <img src={URL.createObjectURL(file)} alt="file" className="message_image" />
                </div>
            )}
            <div className="message">{msg}</div>
            <div className="message_date">{date}</div>
        </div>
        </>
    );
}
export default Message;