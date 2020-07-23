import React from "react";

export default class Calculator extends React.Component{
  constructor(props){
     super(props)
     this.state={
     firstValue:null,
     secondValue:'',
     operator:'',
     result:'0',


    } 

  }

  _handleInputChange = (e)=>{
    this.setState({result: e.target.value})

  }
  onButtonClick = (value) => {
   console.log("im in function")
    if(!!this.state.firstValue){
      this.setState({secondValue:value})
      //this.calculatorResult();
   }
   else {
      this.setState({firstValue:value})
   }
   
 }
 onOperatorClick= (operator) => {
   this.setState({operator: operator})
 }
 calculatorResult = () => {
   if(this.state.operator==='+'){
    let result = this.state.firstValue+this.state.secondValue
    this.setState({result:result})
   }
   else if (this.state.operator==='-') {
    let result = this.state.firstValue-this.state.secondValue
    this.setState({result:result})
   }
   else if (this.state.operator==='*'){
    let result = this.state.firstValue*this.state.secondValue
    this.setState({result:result})
   }
   else if (this.state.operator==='/'){
    let result = this.state.firstValue/this.state.secondValue
    this.setState({result:result})
   }
  
 }
 clearDisplay() {
    this.setState({
      result: '0'
    })
  }
  
  
  render(){
    console.log(this.state.firstValue)
   return (
<div style={{padding:"20%"}}>
    <div style= {{height: "85px",width:"340px",backgroundColor:"black",color:"white",textAlign:"right"}}> 
      {this.state.result} 
    </div>
  
     <div >
     <button onClick={()=> this.clearDisplay()} style= {{height: "85px",width: "170px" ,backgroundColor:"white", fontColor:"white"}}> Clear</button>
     <button onClick={()=> this.calculatorResult()} style= {{height: "85px",width: "85px", backgroundColor:"red", fontColor:"white"}}>= </button>
     <button onClick={()=> this.onOperatorClick("+")} style= {{height: "85px",width: "85px", backgroundColor:"red", fontColor:"white"}}> +</button>
     </div>
    <div>  
     <button onClick={()=> this.onButtonClick(7)} style= {{height: "85px",width: "85px", backgroundColor:"red", fontColor:"white"}}> 7 </button>
     <button onClick={()=> this.onButtonClick(8)} style= {{height: "85px",width: "85px", backgroundColor:"red", fontColor:"white"}}> 8 </button>
     <button onClick={()=> this.onButtonClick(9)} style= {{height: "85px",width: "85px", backgroundColor:"red", fontColor:"white"}}> 9 </button>
     <button onClick={()=> this.onOperatorClick("-")} style= {{height: "85px",width: "85px", backgroundColor:"red", fontColor:"white"}}> - </button>

    </div>
    <div>  
     <button onClick={()=> this.onButtonClick(4)} style= {{height: "85px",width: "85px", backgroundColor:"red", fontColor:"white"}}> 4 </button>
     <button onClick={()=> this.onButtonClick(5)} style= {{height: "85px",width: "85px", backgroundColor:"red", fontColor:"white"}}> 5 </button>
     <button onClick={()=> this.onButtonClick(6)} style= {{height: "85px",width: "85px", backgroundColor:"red", fontColor:"white"}}> 6 </button>
     <button onClick={()=> this.onOperatorClick("*")} style= {{height: "85px",width: "85px", backgroundColor:"red", fontColor:"white"}}> * </button>
    </div>
    <div>  
     <button onClick={()=> this.onButtonClick(1)}  style= {{height: "85px",width: "85px", backgroundColor:"red", fontColor:"white"}}> 1 </button>
     <button onClick={()=> this.onButtonClick(2)} style= {{height: "85px",width: "85px", backgroundColor:"red", fontColor:"white"}}> 2 </button>
     <button onClick={()=> this.onButtonClick(3)} style= {{height: "85px",width: "85px", backgroundColor:"red", fontColor:"white"}}> 3 </button>
     <button onClick={()=> this.onOperatorClick("/")} style= {{height: "85px",width: "85px", backgroundColor:"red", fontColor:"white"}}>/ </button>
    </div>
</div>
    );

    

   

  }

} 
