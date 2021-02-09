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
                    <div>
                        {this.state.itemList.map(data => {
                            const {id, title, author_name, author_surname, publisher, age, pages, description, start_data, start_price, cover} = data;
                            return (
                                <div key={id}>
                                    <div><img src={cover} alt="cover"></img></div>
                                    <div>
                                    <h2>{title}</h2> 
                                    <p>{author_name}, {author_surname} </p>
                                    <span>Издательство {publisher}, {age} год</span>
                                    <span>Количество страниц: {pages}</span>
                                    <p>{description}</p>
                                    <span>{start_data}</span>
                                    <span>{start_price}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )
        }
    };