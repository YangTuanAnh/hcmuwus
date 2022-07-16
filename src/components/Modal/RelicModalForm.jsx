// A modal form with a file input and text input with submit button.
// The form is controlled by react and the form data is sent to the server.
// Style with tailwindcss.

import React from "react";

class RelicModalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
        };
        this.fileInput = React.createRef();
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
        const { description } = this.state;
        const file = this.fileInput.current.files[0];
        this.props.onSubmit({description, file} );
        this.setState({ description: "" });
    }

    render() {
        const { description } = this.state;
        return (
            // Modal form with basic login form elements.
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-center text-2xl font-bold mb-4">
                            Thêm di sản
                        </h1>
                        <form onSubmit={this.handleSubmit}>                  
                            <div class="flex justify-center items-center w-full">
                                <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-42 bg-white-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer">
                                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                        <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p class="mb-2 text-sm text-white-500 dark:text-gray-400">Tải file lên</p>
                                    </div>
                                    <input ref={this.fileInput} id="dropzone-file" type="file" class="hidden"/>
                                </label>
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
                                    type="submit"
                                >
                                    Thêm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RelicModalForm;