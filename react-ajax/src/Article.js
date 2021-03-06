import { Component } from "react";

class Article extends Component {
    render() {
        return(
            <article>
                <h3>{this.props.title}</h3>
                {this.props.desc}
            </article>
        );
    }
}

export default Article;