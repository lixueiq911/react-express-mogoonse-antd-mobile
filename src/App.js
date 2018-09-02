import React from 'react'
import {Button,List} from 'antd-mobile'
//import 'antd-mobile/dist/antd-mobile.css'  
// 安装 babel-plugin-import后 在package.json配置了 
/* "plugins": [
    ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
   ]

*/
//就不需要引入CSS了，babel-plugin-import会按需加载

class Hello extends React.Component{
	constructor(props){
		super( props )
		this.state = {
			slides:[ ' 胡子','柱子','二狗']
		}
		this.addslider = this.addslider.bind(this);
	}
	addslider(){
		this.setState({
				slides:[...this.state.slides,'旺财'+Math.random()]
				
			})
		
	}
	render(){
	
		return  (
			<div>
				<p> 一营 营长  {this.props.name }  打架好  </p>
				<Button type='primary' onClick={this.addslider}>addSlide</Button>
				
				<List renderHeader={ ()=>'List士兵列表'}>
					{ this.state.slides.map( (v) =>{
						//一定加上key 属性
							return <List.Item key='v'> {v}</List.Item>
						}
					)
					}
					
				</List>	
					
				
			
			</div>
		)
			
	}
	
}
//函数式
// function Hello(props){
// 	
// 	return  <p> 一营 营长  {props.name }  打架好  </p>
// 	
// }
class App extends React.Component{
	
	render(){
		const boss = '千寻'
		return (
			<div>
				<h2> 独立团  团长 { boss }</h2>
				<Hello name='阿飞'> </Hello>
			</div>
		)
		
	}
	
}





export default App;
