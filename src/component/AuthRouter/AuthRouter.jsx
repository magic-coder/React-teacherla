import react from 'react'
import axios from 'axios'

class AuthRouter extends React.Component {
  render(){
    return null
  }
  componentDidMount() {
    axios.get('/user/info').
    then(res=>{
      if (res.status === 200) {
        console.log(res.data);
      }
    })
  }
}
