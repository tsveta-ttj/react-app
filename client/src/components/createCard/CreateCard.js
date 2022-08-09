import { useState } from "react";

export const CreateCard = ({
    onCardCreate,
}) => {


    const [values, setValues] = useState({
        title: '',
        img: '',
        description: '',

    });

    const changeHandler = (e) => {
        setValues(previousValues => ({
            ...previousValues,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        onCardCreate(values);
    };

    return (
        <form id="create" onSubmit={submitHandler}>
            <div className="form-container">
                <h1>Create Card</h1>

                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="title"
                    value={values.title}
                    onChange={changeHandler}
                />

                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="description"
                    value={values.description}
                    onChange={changeHandler}
                />

                <label htmlFor="pass">Image:</label>
                <input
                    type="img"
                    name="img"
                    id="img"
                    value={values.img}
                    onChange={changeHandler}
                />

                <button type="submit" >Create</button>

            </div>
        </form>
    );
};