function Area({ backgroundColor, children }) {
    return (
        <div style={{
            backgroundColor,
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
        }}>
            {children}
        </div>
    )
}

export default Area