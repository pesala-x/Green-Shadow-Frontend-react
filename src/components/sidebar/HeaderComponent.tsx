interface HeaderComponentProps {
    section?: string;
}

export const HeaderComponent = ({section}: HeaderComponentProps) => {
    return (
        <>
            <h1 className="mb-4 mt-2 py-5 text-left text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span
                    className="text-blue-900 text-5xl font-extrabold"
                    style={{
                        textShadow: '2px 2px 5px rgba(128, 128, 128, 0.5)',
                    }}
                >
                    {section}
                </span>
            </h1>
        </>
    );
};
