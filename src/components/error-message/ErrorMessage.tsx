import React from 'react';

interface IErrorMessageProps {
    error: string;
}

export function ErrorMessage({error}: IErrorMessageProps) {
    return (
        <p>{error}</p>
    )
}
