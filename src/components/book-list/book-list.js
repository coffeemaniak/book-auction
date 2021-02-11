import React,  {Component} from "react";
import { ref } from "../../services/firebase";
import "./book-list.css"

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
                <div>
                    <div className="book_list">
                        {this.state.itemList.map(data => {
                            const {id, title, author_name, author_surname, publisher, age, pages, description, start_data, start_price, cover} = data;
                            return (
                                <div key={id} className="book_item">
                                    <div className="book_item-left"><img src={cover} alt="cover" className="book_item-img"></img></div>
                                    <div className="book_item-right">
                                    <h2 className="book_item-title">{title}</h2> 
                                    <p>{author_name}, {author_surname} </p>
                                    <div>Издательство {publisher}, {age} год</div>
                                    <div>Количество страниц: {pages}</div>
                                    <p>Аннотация: {description}</p>
                                    <div>Начало торгов: {start_data}</div>
                                    <div>Стартовая цена: {start_price}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )
        }
    };