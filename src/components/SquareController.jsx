function SquareController({ fn, title }) {
    return (
        <button onClick={fn}>
            {title}
        </button>
    )
}

export default SquareController