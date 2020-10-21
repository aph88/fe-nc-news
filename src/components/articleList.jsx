import React from 'react'
import { Link } from '@reach/router'
import axios from 'axios'
import ArticleBody from './article'

class ArticleList extends React.Component {
    state = {
        articles: [],
    }

    componentDidMount () {
        let topic = ''
        if(this.props['*']) topic = this.props['*'].split('/')[0]
        const params = {topic: topic}
        axios.get('https://aph88-nc-news.herokuapp.com/api/articles', {params}).then((res) => {
            this.setState({
                articles: [...res.data.articles]
            })
        })
    }

    componentDidUpdate (prevProps, prevState) {
        let topic = ''
        if(this.props['*']) topic = this.props['*'].split('/')[0]
        const params = {topic: topic}
        if (prevProps['*'] !== this.props['*'] || prevProps.path !== this.props.path){
            axios.get(`https://aph88-nc-news.herokuapp.com/api/articles`, {params}).then((res) => {
                this.setState({
                    articles: [...res.data.articles]
                })
            })
        }
         
    }

    render () {
        //                                <ArticleBody article_id={art.article_id}/>
        return (<section>
            <h3>{(this.props['*'] === '' || this.props['*'] === undefined) ? 'Listing articles' : `Listing articles for ${this.props['*']}`}</h3>
        {this.state.articles.map(art => {
                        return (
                            <div key={art.article_id} className="articlelist-article">
                                
                                    <Link to={`/articles/${art.topic}/${art.article_id}`}>
                                    <h4>{art.title}</h4>
                                    </Link>
                                <p>{`Created at: ${art.created_at}, by: ${art.author}, Votes: ${art.votes} Comments: ${art.comment_count}`}</p>
                                

                    
                            </div>            
            )
        })}
        </section>)
    }

}

export default ArticleList