import React, { Component } from 'react'
import firebase from 'firebase'

class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            animals: ''
        }
    }

    componentDidMount() {
        firebase.database().ref('animals').on('value', (snapshot)  => {
            var a = snapshot.val()

            this.setState({ animals: a})
        })
    }


    render() {
        return (
            <ul>
                <li>{this.state.animals}</li>
            </ul>
        )
    }
}

export default List
