import Header from "../assets/components/Header"

import Card from "../assets/components/Card"

import TodoContainer from "../assets/components/TodoContainer"

import {useLocation} from 'react-router-dom'

function Landing() {
    const data= useLocation()
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        
        {/* Header */}
        <Header name={data.state.user}/>
        <div className="flex justify-between gap-7 my-5 flex-wrap">
        
        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>
        <Card bgcolor={"#FD6663"} title={"December 20"} subtitle={"14:23:08"}></Card>
        <Card bgcolor={"#FCA201"} title={"Bulit Using"} subtitle={"React"}></Card>
        </div>
        {/* Todocontainer*/}
        <TodoContainer/>
        
        
      </div>
    </div>
  );
}

export default Landing; 