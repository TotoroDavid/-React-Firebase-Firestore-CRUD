import React, {useState} from 'react'

const LinkForm = (props) => {

    const initialStateValues = {
        url : '',
        name : '',
        description : ''
    }

    const [values, setValues] = useState(initialStateValues)

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values,[name]:value})        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addOrEditLink(values)
    }

    return (
        <form className='card card-body' onSubmit={handleSubmit}>
            <div className='form-group input-group'>
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input 
                    type="text"
                    className='form-control'
                    placeholder='https://example.com'
                    name='url'
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-text bg-light'>
                    <i className="material-icons">create</i>
                </div>
                <input 
                    type="text" 
                    className='form-control'
                    name='name'
                    placeholder='webSiteName'
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <textarea 
                name="" 
                rows="3"
                className='form-control'
                placeholder='write a description'
                onChange={handleInputChange}
                >
                </textarea>
            </div>
            <button className='btn btn-primary btn-block'>
                save
            </button>
        </form>
    )
}

export default LinkForm
