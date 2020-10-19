import React from 'react'
import ArticleBody from './article'

class ArticleList extends React.Component {
    state = {
        articles: [1, 2, 3],
    }

    render () {
        return (<section>
            <h3>Listing Articles:</h3>
        {this.state.articles.map(art => {
            return <ArticleBody class="app-articlelist-article" key={art}/ >
        })}
        </section>)
    }

}

export default ArticleList