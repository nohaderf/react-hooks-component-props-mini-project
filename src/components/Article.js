import React from "react"

function minutesToRead(minutes){
    const readTime = minutes < 30 ? 5 : 10
    const readTimeEmoji = minutes < 30 ? "☕️" : "🍱"
    let indicator = ""
    for (let i = 0; i < minutes; i += readTime){
        indicator += readTimeEmoji
    }
    return indicator
}

function Article({ title, date =  "January 1, 1970", preview, minutes }){
    const emojiIndicator = minutesToRead(minutes)
    return(
        <article>
            <h3>{title}</h3>
            <small>{date} • {emojiIndicator} {minutes} minutes read </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article