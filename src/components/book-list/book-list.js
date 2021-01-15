import React,  {Component} from "react";
import { ref } from "../../services/firebase";

    export default class BookList extends Component {
        state = {}

        componentDidMount() {
            // const {getData, snapshot};
            ref.on("value", (snapshot) => {
                    snapshot.forEach(bookSnapshot => this.setState({id: bookSnapshot.val().id}))
                    
            })
            // .catch(err => new Error(err))
    }
        render() {
            const { id } = this.state;
            return (
                    <h1>{id} hello</h1>
            )
        }
    };