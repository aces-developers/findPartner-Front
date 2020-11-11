import React from 'react' 
import Login from './Login'
import useLocalStorage from '../../hooks/useLocalStorage';
import Dashboard from './Dashboard'
import { ContactsProvider } from '../../contexts/ContactsProvider'
import { ConversationsProvider } from '../../contexts/ConversationsProvider';
import { SocketProvider } from '../../contexts/SocketProvider';
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"

function Chat(props) {
    // console.log('chat',props.account.userid)
     
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider> 
    </SocketProvider>
  )

  return (
    id ? dashboard :  <Login onIdSubmit={setId}/>
  )
}

const mapStateToProps = (state) => ({
    details: state.projects.projectDetails,
    Modal:state.projects.Modal,
    projectData: state.projects.projectData,
    deleteModal:state.projects.deleteModal,
    account:state.users.account,
    check:state.projects.check
    

})



export default connect(mapStateToProps)(Chat)
