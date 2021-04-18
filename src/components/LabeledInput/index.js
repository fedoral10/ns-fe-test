import React from 'react'

const LabeledInput = ({label, ...props}) => {
    return (<div style={{display:'flex',flexDirection:'column'}}>
        <label>{label}</label>
        <input {...props?.register} {...props} />
    </div>)
}

export default React.memo(LabeledInput)