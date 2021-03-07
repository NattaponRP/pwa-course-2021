import {Link} from 'react-router-dom'
import './App.css';
import './AppMat.css'

function HomePage({children}) {
  return(
    

     <div className = "HomePageInfo">
         
        <div className = "HomePageInfo-topBar"/>
        
        <div className = "HomePageInfo-search"/>
                
        <div className = "HomePageInfo-backgroun">
            <div className =".ToolBar-Botchat">
             {children}
            </div>
        </div>
           

            
            <div className = "ToolBar">

            <div className = "pandding">
            <Link to = "/Chatroom">
                <img src = "ChatBoxBar.Png" alt = "" />

            </Link>
        </div>
        <div className = "pandding">
            <Link to = "/GroupChatBox">
                <img src = "GroupChat.Png" alt = "" />
                
            </Link>
        </div>
        <div className = "HomePageButton">
           
            <Link to = "/HomePage">
            <img src = "Home.png" alt = "" />
            </Link> 
        </div>
        <div className = "pandding">
            <Link to = "/PrivateChatBox">
                <img src = "Private.Png" alt = "" />
                
            </Link>
        </div>
        <div className = "pandding">
            <Link to = "/SettingPage">
                <img src = "SettingBar.Png" alt = "" />

            </Link>
        </div>
        
         </div>

    </div>    
    
    
        

    
  ) 
}
export default HomePage;