 import { ChatEngine } from 'react-chat-engine';

 import  ChatFeed  from './components/ChatFeed';

 import './App.css';

 const App = () => {
     return(
         <ChatEngine
         height="100vh"
         projectID="1215fbbf-6470-4f30-9f4d-170f93c8377b"
         userName="nisal.97"
         userSecret="Nisal123@"
         renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps}/> }
         />
     );
 }

 export default App;