import React from "react"
import Change from "./components/Change"
import Styled from "styled-components"
import img from "./imagens/pixel-city-thumb.jpg"
import imgmedia from "./imagens/phone.png"


const Content = Styled.div`
background-image: url(${img});
color: white;
margin:0;
paddin:0;
border:1px solid #000;
width:99.8vw;
height:99.7vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
h1{
  font-size: 2.5em;
}

@media (max-width: 600px){
  background-image: url(${imgmedia});
}
`
const Btn = Styled.button`
height: 100px;
width: 100px;
margin:0 0.5em;
cursor: pointer;
border-radius: 5px;
background: transparent;
font-size: 20px;
font-weight: bold;
color: darkslateblue;
transition: 0.5s all ease-out;
&:hover{
  background-color: palevioletred;
}
`

export default class App extends React.Component{

  state = {
    num: 0
  }

  go = ()=>{
    const cleanI = setInterval(()=>{
      this.setState({num: this.state.num + 1})
    }, 1000)
    this.stop=()=>{
      clearInterval(cleanI)
    }
  }

  reset=()=>{
    this.setState({num:0})
  }

  render(){
    return(
      <Content>
      <div>
        <Change/>
      </div>
      <div>
        <h1>{this.state.num}</h1>
        <Btn onClick={this.go}>Start</Btn>
        <Btn onClick={this.stop}>Stop</Btn>
        <Btn onClick={this.reset}>Reset</Btn>
      </div>
      
      </Content>
    )
  }
}