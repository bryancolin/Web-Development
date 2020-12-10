import React from "react";

const customStyle = {
    fontWeight: "bold"
};

function Note() {
    return (
        <div className="note">
            <h1 style={customStyle}>This is the note title</h1>
            <p>Thie is the note content</p>
        </div>
    )
}

export default Note;