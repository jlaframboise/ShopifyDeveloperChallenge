/*
A component which will make up the majority of the frontend, 
displaying all of the images (or a filtered set). 
It will also render a section to add images at the top. 
*/

import React, { Component } from 'react';
import axios from 'axios';
import AddImage from './add-image.component';


const SingleImage = props => (
    // a small functional component to render image and metadata
    <tr>
        <td>{props.image.title}</td>
        <td>{props.image.tags}</td>
        <td>{props.image.img}<img src={props.image.img} alt="Image not found" width="200px" height="200px"></img></td>
    </tr>
)



export default class ImageDisplay extends Component {
    /*
    A class to display images and meta data in a table. 
    */

    constructor(props){
        super(props);

        this.onChangeKeywords = this.onChangeKeywords.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            images: [],
            keywords: ""
        };
    }

    // load all images
    componentDidMount(){
        axios.get('http://localhost:5000/images')
            .then(res => {
                console.log(res.data)
                this.setState({
                    images: res.data
                })

                console.log(this.state)
            })
            .catch((err) => { console.log(err)})
    }

    
    onChangeKeywords(e){
        this.setState({
            keywords: e.target.value
        })
    }

    imageList(){
        return this.state.images.map(image => {
            return <SingleImage image={image} key={image._id}/>;
        })
    }

    // image_contains_keywords(im, keywords){
    //     keywords = keywords.toLowerCase().replace(" ", "").split(",")
    //     var im_keywords;
    //     im_keywords = im.title.toLowerCase().replace(" ", "").split(",").concat(im.tags.toLowerCase().replace(" ", "").split(","))
    //     // console.log(im_keywords)
    //     // console.log(keywords)
    //     var i;
    //     for (i in keywords){
    //         // console.log(i)
    //         if (im_keywords.includes(keywords[i])){
    //             // console.log("TRUE")
    //             return true;
    //         }
    //     }
    //     return false
    // }
        

    onSubmit(e){

        e.preventDefault()

        console.log(this.state.keywords)
        

        if (this.state.keywords !==""){
            axios.get('http://localhost:5000/images/search/'+this.state.keywords)
                .then(res => {
                    console.log("Got search results:")
                    console.log(res.data)
                    this.setState({
                        images: res.data
                    })

                    console.log(this.state)
                })
                .catch((err) => { console.log(err)})
        }; 
    }

    render(){
        return (
            <div>
                <AddImage></AddImage>
                <btn className="btn btn-secondary" onClick={()=>this.componentDidMount()}>Refresh</btn>
                <h3>Image Repository</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Search by keyword: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.keywords}
                            onChange={this.onChangeKeywords}/>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Filter"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Title</th>
                            <th>Tags</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.imageList()}
                    </tbody>
                </table>
            </div>
        )
    }

}