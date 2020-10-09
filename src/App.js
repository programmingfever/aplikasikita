/*
//Contoh Class Component
import React, { useState } from 'react';
class Formsnya extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        name: 'Abdul Rozak',
        currentName: ''
      }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      currentName: event.target.value
    })
  }

  handleSubmit(){
    this.setState({
      name: this.state.currentName
    })
  }

  render(){
   return <>
      <h1>Namaku {this.state.name}</h1>
      <input type="text" placeholder="Isi untuk mengubah" onChange={this.handleChange}/>
      <button onClick={this.handleSubmit}> Ubah</button>
    </>;
  }
}*/

/*
//Contoh Functional Component without props, with props, with state (hook state)
import React, { useState } from 'react';

const Formsnya = () => {

const [name, setName ] = useState('Joni');
const [currentName, setCurrentName ] = useState('');

const handleChange = event => {
  setCurrentName(event.target.value);
}

const handleSubmit = () => {
  setName(currentName);
}


  return <>
      <h1>Namaku {name}</h1>
      <input type="text" placeholder="Isi untuk mengubah" onChange={handleChange}/>
      <button onClick={handleSubmit}> Ubah</button>
    </>;

}
export default Formsnya;
*/

/*
//Contoh Class Component dan Mounting

import React, { useState } from 'react';

const ComponentWithoutProps = () => {
  return <div>Saya adalah component Mandiri</div>
  }
  
  const ComponentWithProps = ({color}) =>{
  if (color=== 'blue'){
    return <div style={{
    backgroundColor: 'blue',
    color: 'white'
    }}> Warna Biru </div>
  }else if(color==='red'){
    return <div style={{
    backgroundColor: 'red',
    color: 'white'
    }}> Warna Merah </div>
  }else if(color==='green'){
    return <div style={{
    backgroundColor: 'green',
    color: 'white'
    }}> Warna Hijau </div>
  }else{
    return <div>Tidak Berwarna</div>
  }
  
  }

  class ComponentWithState extends React.Component{
    constructor(props){
      super(props);
      this.state = {color:''}
    
      this.getRandomColor = this.getRandomColor.bind(this);  
     }

  getRandomColor(){
    var letters = '012345678ABCDEF';
    var color = '#';
    for(var i = 0; i<6 ; i++){
      color += letters[Math.floor(Math.random()*16)];
    }
    this.setState({
      color
    })
  }

  componentDidMount(){
    this.interval = setInterval(()=>this.getRandomColor(),1000);
  }

  componentWillUnmount(){
    clearImmediate.interval(this.interval)
  }

  render() {
    return <div style={{ backgroundColor: this.state.color }}> Warna Saya Berubah Ubah </div>
  }
}
const App = () =>{
  return <React.Fragment>
    <div style={{ padding: '10px', display: 'block' }}>
      <h1>Aplikasi Saya</h1>
      <ComponentWithoutProps />
      <ComponentWithProps color="green"/>
      <ComponentWithState/>
    </div>
  </React.Fragment>
}
  export default App;

  */
 
  /*
  // Menggunakan Framework UI material-ui/react Bootstrap
 import React, { useState } from 'react';
 import Button from '@material-ui/core/Button';
 import Box from '@material-ui/core/Box';

 const App = ()=>{

    return <> 
    <h1>Aplikasi Kita</h1>
    <button variant='contained'>Default</button>  
    <Box style={{border:'solid 1px red',backgroundColor:'green',color:'white'}}clone>
      
      <Button>Test Button in Box</Button>
    </Box>
    </>
 }

 export default App;
 */
import React from 'react';
import './App.css';

const Tampilan1 = ({warna}) => { 
    if(warna==="merah"){
      return <div style={{color: 'red'}}> Warna</div>
    }else if(warna==="hijau"){
      return <div style={{color: 'hijau'}}> Warna</div>
    }else{
      return <div style={{color: 'black'}}> Warna</div>
    } 
}
const Penguji = ({nilai}) => {
  if(nilai){
    return <div style={{color: 'blue'}}>Nilai Uji Benar</div>
  }else{
    return <div style={{color: 'red'}}>Nilai Uji Salah</div>
  }
} 

const App = () => {
  return <>
   <h1>Aplikasi Kita</h1>
   <div style={{color: 'blue'}}> Warna</div>
   <Tampilan1 warna='merah'/>
   <Penguji nilai={false} />
   <Penguji nilai />
   </>
}
export default App;