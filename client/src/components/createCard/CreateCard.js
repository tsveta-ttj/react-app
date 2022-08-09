export const CreateCard =() => {
    return (
        <form id="create">
            <div className="form-container">
                <h1>Create Card</h1>
                
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="title"
                />

                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="description"
                />

                <label htmlFor="pass">Imgage:</label>
                <input 
                    type="img" 
                    name="img" 
                    id="img" />
         
                <button type="submit" >Create</button>

            </div>
        </form>
    );
};