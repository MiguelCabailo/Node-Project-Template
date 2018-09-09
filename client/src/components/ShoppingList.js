import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//allows to get state from redux to react
//connect wraps around this component
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';

// prop types: when we have component properties we should put them in prop types for validation
import propTypes from 'prop-types';

class ShoppingList extends Component {
    
    componentDidMount(){
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        console.log(this.props);
        this.props.deleteItem(id);
    }
    render() {
        console.log(this.props);
        const { items } = this.props.item;

        const itemList = items.length ? (
            // destructure the item.id. grab the id and store it in id
            items.map(( {id, name} ) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                    <ListGroupItem>
                        <Button
                            className="remove-btn"
                            color="danger"
                            size="sm"
                            onClick={()=>this.onDeleteClick(id)}
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
                <ListGroup>
                    <TransitionGroup>
                        {itemList}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }

}

ShoppingList.propTypes = {
    // when you bring an action in redux it is stored as a prop
    getItems : propTypes.func.isRequired,
    item: propTypes.object.isRequired
}

// mapping the state to the props to be able to get it
// method from react-redux
// mapping the redux state from the item reducer to this components item prop
const mapStateToProps = (state) => ({
    //item is what we called it in our root reducer
    /*
        export default combineReducers({
            item: itemReducer
        })
    */
    item: state.item
});

// any action you bring in you want in this object
// we are mapping 3 props here: item/ getItems / deleteItem
// we are destructuring getItems and saving it to a variable getItems which just returns a STRING
export default connect(mapStateToProps,{ getItems,deleteItem })(ShoppingList);