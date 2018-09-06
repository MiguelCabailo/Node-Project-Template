import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    // bind this to the parent
    toggle = () => {
        this.setState({
            // if it is open we want it to close, if it is closed we want it to open
            // this.state.isOpen = false. What it is not is true and vice versa.
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                {/*sm instantiates the hamburger for small screens mb-5(margin bottom 5)*/}
                <Navbar color="dark" dark expand="sm">
                    {/* to align a bit*/}
                    <Container>
                        {/*a logo you can click*/}
                        <NavbarBrand href="/">Shopping List</NavbarBrand>
                        {/*hamburger Menu button that appears based on the expand property of the NavBar*/}
                        <NavbarToggler onClick={this.toggle}/>
                        {/*if the isOpen state is true then do this*/}
                        <Collapse isOpen={this.state.isOpen} navbar>
                            {/*ml-auto = margin left auto*/}
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://www.google.com">Google.com</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;