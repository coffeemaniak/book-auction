import React from "react";
import { ref } from "../../services/firebase";

    const BookList = () => {
        ref.once("value", getData);
        function getData(snapshot) {
            snapshot.forEach(bookSnapshot => {
                    const id = bookSnapshot.val().id;
                    console.log(id);
                    // return(
                    //     <div>
                    //         <h1>{id}</h1>
                            
                    //     </div>
                    // )
                })
            }

        return(
            <div>hi</div>
        )
    };


export default BookList;
