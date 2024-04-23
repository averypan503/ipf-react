function Preview(props) {
    const form = props.form;
    return (
        <>
            <div><span>Id:</span><span>{form?.id}</span></div>
            <div><span>Name:</span><span>{form?.name}</span></div>
            <div><span>Text:</span><span>{form?.text}</span></div>
            <div><span>Layout:</span><span>{form?.layout}</span></div>
        </>
    )
}

export default Preview;