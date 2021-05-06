import React, { Component } from 'react';
import axios from 'axios';

export default class AddImage extends Component {

    constructor(props){
        super(props);

        // make sure that 'this' is bound to this class when
        // used in methods
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeTags = this.onChangeTags.bind(this)
        this.onChangeImg = this.onChangeImg.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            title: '',
            tags: '',
            img: 0,
            users: []
        }
    }


    // text box is target, event is e, value is whats in the target
    onChangeTitle(e){
        this.setState({
            title: e.target.value
        });
    }

    onChangeTags(e){
        this.setState({
            tags: e.target.value
        });
    }

    onChangeImg(e){
        this.setState({
            img: e.target.value
        });
    }

    onSubmit(e){
        // prevent default html form submission from happening
        e.preventDefault()

        const image = {
            title: this.state.title,
            tags: this.state.tags,
            img: this.state.img,
        }
        
        // just print for now, will connect to backend later
        console.log(image);

        axios.post('http://localhost:5000/images/add', image)
            .then(res => console.log(res.data))

        // window.location = '/';
    }

    render(){
        return (
            <div>
                <h3>Add Image</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Title: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Tags: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.tags}
                            onChange={this.onChangeTags}/>
                    </div>
                    <div className="form-group">
                        <label>Image: </label>
                        <input type="text"
                            required
                            className="form-control"
                            
                            // value={this.state.img}
                            onChange={this.onChangeImg}/>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Add Image Now"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

