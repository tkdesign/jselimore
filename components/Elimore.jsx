import {useState} from "react";

function Elimore({text, maxLength = 130, moreText = "..."}) {
    const [expanded, setExpanded] = useState(false);

    if (!text || text.length <= maxLength) {
        return <span>{text}</span>;
    }

    const preview = text.slice(0, maxLength);

    return (
        <div className="elimore">
            {!expanded ? (
                <>
                    <span className="elimore_preview">{preview}</span>
                    <a className="elimore_show" onClick={() => setExpanded(true)}
                       style={{cursor: "pointer"}}>{moreText}</a>
                </>
            ) : (
                <span className="elimore_trim">{text}</span>
            )}
        </div>
    );
}

export default Elimore;