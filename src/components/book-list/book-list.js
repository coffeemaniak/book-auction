import React,  {Component} from "react";
import { ref } from "../../services/firebase";

    export default class BookList extends Component {
        state = {
            itemList: []
        }

        componentDidMount() {
            ref.on("value", (snapshot) => {
                let itemList = [];
                snapshot.forEach(bookSnapshot => {
                    itemList.push(bookSnapshot.val());
                });
                this.setState({itemList: itemList});
            })
    }

        render() {
            return (
                <div className="book_list">
                    <ul>
                        {this.state.itemList.map(data => {
                            return (
                                <li key={data.id}>{data.title} {data.author_name}</li>
                            );
                        })}
                    </ul>
                </div>
            )
        }
    };