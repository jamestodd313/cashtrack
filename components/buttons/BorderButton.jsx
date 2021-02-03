export const BorderButton = ({text, click}) => {
    return (
        <button className="button-text border-button" onClick={click}>
            {text}
        </button>
    )
}
