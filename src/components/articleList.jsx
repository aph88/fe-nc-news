import React from 'react'
import ArticleBody from './article'
import axios from 'axios'

class ArticleList extends React.Component {
    state = {
        articles: [],
    }

    componentDidMount () {
        axios.get('https://aph88-nc-news.herokuapp.com/api/articles').then((res) => {
            console.log(res.data.articles)
            this.setState({
                articles: [...res.data.articles]
            })
        })
    }

    render () {
        return (<section>
            <h3>Listing Articles:</h3>
        {this.state.articles.map(art => {
                        return (
                            <div key={art.article_id}>
                                <h2>{art.title}</h2>
                                <ArticleBody class="app-articlelist-article" />
                            </div>
            
            )
        })}
        </section>)
    }

}

export default ArticleList