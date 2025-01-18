import React from 'react';

interface IframePageProps {
    src: string;
}

export const IframePage: React.FC<IframePageProps> = ({ src }) => {
    return (
        <div className="iframe-container">
            <iframe src={src} className="w-full h-full  bg-red-600	" title="Iframe Content"></iframe>
        </div>
    );
};