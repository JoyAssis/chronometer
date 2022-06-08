import React from "react"

export default class Change extends React.Component{
    state = {
        message:"Hello!",
        msg: "Your Chronometer",
        oi: "Hi"
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({message:"Let's Count!"})
        }, 3000)
        document.title = this.state.oi
    }

    componentDidUpdate(){
        document.title=this.state.msg
    }
    
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>            
            </>
        )
    }
}