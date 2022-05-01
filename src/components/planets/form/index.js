import Reac, {Fragment, useState} from 'react';


const Form = (props) => {
    const [name, setName] = useState('')
    const handleChange = event => setName(event.target.value);

    return (
        <Fragment>
            <form>
                <div>
                    <label htmlFor='name'>
                        Name
                    </label>
                    <input id='name' type='text' value={name} onChange={handleChange}/>

                </div>
                <hr />
                <input type='submit'/>
            </form>
        </Fragment>
    )
}

export default Form;