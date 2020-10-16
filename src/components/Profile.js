import React, { Component } from 'react';

class Profile extends Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return(
            <div>
                <img src={this.props.user.profileImg} alt="User Image" />
                <p>{this.props.user.username}</p>
                {this.props.user.posts && this.props.user.posts.map((post,id) => (
                    <div className="post" key={id}>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        )
    }
}


export default Profile;