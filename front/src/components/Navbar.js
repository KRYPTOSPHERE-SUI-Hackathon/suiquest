const Navbar = () => {
    const logo = require('../images/SuiQuest_logo.png');
    return (<nav>
        <a href="index.html">
        <img className="navbar-logo" src={logo} alt="SuiQuest logo" />
        </a>
        <div className="navbar-right-side">
        <a className="forum" href="missions">Missions</a>
        <a className="forum" href="">Forum</a>
        <a className="navbar-button" href="quests">Start to learn</a>
        </div>
    </nav>);
}

export default Navbar;
