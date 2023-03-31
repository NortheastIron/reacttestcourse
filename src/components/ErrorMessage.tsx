import React from "react";

type ErrorMessageProps = {
    error: string;
}

export function ErrorMessage({error}: ErrorMessageProps) {
    return (
        <p>{error}</p>
    )
}
