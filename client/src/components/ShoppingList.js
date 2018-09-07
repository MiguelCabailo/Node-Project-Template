import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Eggs' },
            { id: uuid(), name: 'Milk' },
            { id: uuid(), name: 'Steak' },
            { id: uuid(), name: 'Water' },
        ]
    }

    displayPrompt = () => {
        const name = prompt('Enter name');
        if (name) {
            this.setState({
                items: [...this.state.items, { id: uuid(), name }]
            })
        }
        console.log(this.state.items);
    }

    deleteItem = (id) => {
        console.log(id);

        //delete what is returned as false
        let items = this.state.items.filter(item=>
            id !== item.id
        )

        this.setState({
            items
        })
        
    }
    render() {
        const { items } = this.state;

        const itemList = items.length ? (
            // destructure the item.id. grab the id and store it in id
            items.map(( {id, name} ) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                    <ListGroupItem>
                        <Button
                            className="remove-btn"
                            color="danger"
                            size="sm"
                            onClick={()=>this.deleteItem(id)}
                        >&times;</Button>
                        {name}
                    </ListGroupItem>
                </CSSTransition>
            ))
        ) : (
                <p>No items</p>
            )

        // rendering
        return (
            <Container>
                <Button className="margined"
                    color="dark"
                    onClick={(this.displayPrompt)}
                >Add Item</Button>

                <ListGroup>
                    <TransitionGroup>
                        {itemList}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }

}

export default ShoppingList