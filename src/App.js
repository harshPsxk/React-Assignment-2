import './App.css';
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MenuIcon from '@material-ui/icons/Menu'
import NavContents from "./NavContents";
import AppsIcon from '@material-ui/icons/Apps'
function App() {
  return (
    <div className="nav_container">

      <div className="nav_lef">
        <div className='menu'>
        <NavContents Icon={MenuIcon} title="" className="menu"/>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WdtWKYIx09KC9jN3L87mgntqtQwN1lMf0Q&usqp=CAU" alt="ggwp" className="img_first" />

        <div className="search_box">
          <SearchIcon/>
          <input type="text" placeholder=""/>
        </div>
      </div>
      <div className='nav_right'>
        <NavContents Icon={AppsIcon} title=""/>
        <NavContents Icon={NotificationsIcon} title="" />
        <NavContents avatar title="" />
      </div>
      
    </div>
  );
}

export default App;
