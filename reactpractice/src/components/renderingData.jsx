import React, { Component } from 'react';
import http from './services/httpServices.js';
import config from './services/config.json';
class RenderData extends Component {
    state = { 
        input:{id:0,title:'',body:''},
        posts:[],
        id:101,
     }
     handleChange = (e)=>{
        const input = {...this.state.input};
        input[e.currentTarget.name] = e.currentTarget.value;
        this.setState({input});
    };
     async componentDidMount(){
         const { data:posts } = await http.get(config.apiEndPoint);
         this.setState({posts});
        }
        handleDelete = async (id) =>{
           // original posts
           const originalPosts = this.state.posts;
            // v dom 
           const posts = this.state.posts.filter(post=>post.id!==id);
           this.setState({posts});

            //server call
            try {
                await http.delete(config.apiEndPoint+'/'+id);
            } catch(ex){
                if(ex.response.status===404)
                    alert('The Post has already been deleted.');
                this.setState({post:originalPosts});
            }
            
        };
        handleUpdate = (post) =>{
            const input = {...this.state.input};
            const data = this.state.posts.filter(item=>item.id===post.id);
            input.id = data[0].id;
            input.title = data[0].title;
            input.body = data[0].body;
            this.setState({input});

            //button code
            let add = document.getElementById('form');
            let addnew = document.getElementById('addnew');
            add.style.display='block';
            addnew.style.display='none';
        };
        handleSubmitUpdate = async (e) =>{
           e.preventDefault();
           const originalPosts = this.state.posts;
           const post = this.state.input;
           
            //button code
            let add = document.getElementById('form');
            let addnew = document.getElementById('addnew');
            add.style.display='none';
            addnew.style.display='block';

           
           const posts = [...this.state.posts];
           let index = this.state.posts.findIndex(x=>x.id===post.id);
           //const index = posts.indexOf(post);
           //console.log(index);
           posts[index] = {...post};
           const input={id:0,title:"",body:""};
           this.setState({posts,input});

           //server
           try{
            await http.put(config.apiEndPoint+'/'+post.id,post);
           }
           catch(e){
               alert(e);
               this.setState({posts:originalPosts,input});
           }
           

        };
        handleAdd = async (e) =>{
            e.preventDefault();
            const originalPosts = this.state.posts;
            const id = this.state.id;
            const {title,body} = this.state.input;
            const obj = {id,title,body};

            //button code
            let add = document.getElementById('form');
            let addnew = document.getElementById('addnew');
            add.style.display='none';
            addnew.style.display='block';
            //state
            if(title!==''&&body!==''){
            const posts = [obj,...this.state.posts];
            const input={id:0,title:"",body:""};
            this.setState({posts,id:id+1,input});
            
            // REST API
            
                try{
                   /* const {data:post}=*/ await http.post(config.apiEndPoint,obj);
                }
                catch(e){
                    alert(e);
                    this.setState({posts:originalPosts,id:id-1,input});
                }
            
            //console.log(post,obj);
            
            }
        };
        handleAddNew= ()=>{
            let add = document.getElementById('form');
            let addnew = document.getElementById('addnew');
            add.style.display='block';
            addnew.style.display='none';
        };
    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                    <div id="form" className="row" style={{display:'none',}}>
                        <div className="col-sm-12">
                        <h3 className="text text-info">Add New Post</h3>
                        <form onSubmit={this.state.input.id===0?this.handleAdd:this.handleSubmitUpdate}>
                            <input
                            onChange={this.handleChange}
                            value={this.state.input.id} 
                            type="number" 
                            name="id" 
                            className="form-control"
                            hidden={true}
                            />
                            <div className="form-group">
                                <label>Title</label>
                                <input 
                                onChange={this.handleChange}
                                value={this.state.input.title} 
                                type="text" 
                                name="title" 
                                className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Body</label>
                                <input 
                                onChange={this.handleChange}
                                value={this.state.input.body} 
                                type="text" 
                                name="body" 
                                className="form-control" />
                            </div>
                            <button id="add" className="btn btn-success">{(this.state.input.id)>0?'Update':'Add'}</button>
                        </form>
                        <hr/>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-9"><h2 className="text text-info">Posts</h2></div>
                            <div className="col-sm-3"><button id="addnew" className="btn btn-success" onClick={this.handleAddNew}>Add New Post</button></div>
                        </div>
                        <table className="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>TITLE</th>
                                    <th>BODY</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.posts.map(post=>(
                                    <tr key={post.id}>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                        <td>
                                            <button 
                                            className="btn btn-primary"
                                            onClick={()=>this.handleUpdate(post)}
                                            >Update</button><hr/>
                                            <button 
                                            className="btn btn-danger"
                                            onClick={()=>this.handleDelete(post.id)}
                                            >Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default RenderData;