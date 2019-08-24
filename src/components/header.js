import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
							<span className="fas fa-bars" />
						</button>
						<a href="#." className="navbar-brand"><span className="fab fa-bootstrap" /></a>
					</div>
					<div className="collapse navbar-collapse" id="navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
							<li className="dropdown">
								<a href="#." className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
									<span className="fas fa-user-alt"/> Account
								</a>
								<ul className="dropdown-menu">
									<li><a href="#.">Login</a></li>
									<li><a href="#.">Sign up</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Header;