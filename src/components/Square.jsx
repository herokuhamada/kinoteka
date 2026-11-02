function Square({ side, backgroundColor, borderRadius, label }) {
    return (
        <div
            style={{
                width: side,
                height: side,
                backgroundColor,
                borderRadius,
                textAlign: "center",
                color: "white",
                lineHeight: side,
                fontSize: "24px"
            }}
        >
            {label}
        </div>
    )
}

export default Square