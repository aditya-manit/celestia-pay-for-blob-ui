import React from "react";
import './css/ResultBox.css';

export function ResultBox({ id, suffix, text, color, large }) {
    const columnSize = large
        ? "is-12-tablet is-9-desktop is-9-widescreen"
        : "is-12-tablet is-3-desktop is-3-widescreen";

    return (
        <div className={`column ${columnSize}`}>
            <div className={`notification ${color} has-text`}>
                <p id={id} className="title is-1">

                </p>
                <p className="subtitle is-4">{suffix} {text}</p>
            </div>
        </div>
    );
}
