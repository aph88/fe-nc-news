import React from 'react'
import { Link } from '@reach/router'
import axios from 'axios'
import ArticleBody from './article'

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

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.location.pathname !== this.props.location.pathname){
            axios.get(`https://aph88-nc-news.herokuapp.com/api/articles?topic=${this.props['*']}`).then((res) => {
                console.log(res.data.articles)
                this.setState({
                    articles: [...res.data.articles]
                })
            })
        }
        
    }

    render () {
        console.log(this.props)
        return (<section>
            <h3>Listing Articles:</h3>
        {this.state.articles.map(art => {
                        return (
                            <div key={art.article_id} className="articlelist-article">
                                
                                    <Link to={`/articles/${art.article_id}`}>
                                    <h4>{art.title}</h4>
                                    </Link>
                                <p>{`Created at: ${art.created_at}, by: ${art.author}, Votes: ${art.votes} Comments: ${art.comment_count}`}</p>
                                
                                <ArticleBody article_id={art.article_id}/>
                    
                            </div>
            
            )
        })}
        </section>)
    }

}

export default ArticleList