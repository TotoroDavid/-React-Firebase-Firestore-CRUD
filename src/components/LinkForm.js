import React from 'react'

const LinkForm = () => {
    return (
        <form className='card card-body'>
            <div className='form-group input-group'>
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input 
                    type="text"
                    className='form-control'
                    placeholder='https://example.com'
                    name='url'
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
                />
            </div>
        </form>
    )
}

export default LinkForm
