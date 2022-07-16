// A modal form with 2 input boxes and a submit button.
// The form is controlled by react and the form data is sent to the server.
// Style with tailwindcss.
// The form is styled with tailwindcss.

import React from "react";

class DesireModalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const { name, description } = this.state;
        this.setState({ name: "", description: "" });
    }

    render() {
        const { name, description } = this.state;
        return (
            // Modal form with basic login form elements.
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-center text-2xl font-bold mb-4">
                            Thêm ý nguyện
                        </h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="flex flex-col items-center justify-center">
                                <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Tên
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                    Mô tả
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="description"
                                    name="description"
                                    value={description}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center my-4">
                            <button 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Add Relic
                            </button>
                            </div>

                            </form>
                        </div>
                    </div>
                </div>
                            
        );
    }
}

export default DesireModalForm;