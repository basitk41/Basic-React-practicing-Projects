import React from 'react'; 
function highOrder(Component){
return class HighOrder extends React.Component {
    state = {
        btn:'btn btn-success',
      }
    onMouseOver = () => this.setState({btn:'btn btn-danger'});
    onMouseOut = () => this.setState({btn:'btn btn-info'});
    render() { 
        return ( 
            <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                <Component {...this.props} btn={this.state.btn} />
            </div>
         );
    }
}
}
export default highOrder;