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
        console.log(topic)
        const params = {topic: topic}
        axios.get('https://aph88-nc-news.herokuapp.com/api/articles', {params}).then((res) => {
            this.setState({
                articles: [...res.data.articles]
            })
        })
    }

    componentDidUpdate (prevProps, prevState) {
        // console.log(this.props['*'], 'props now')
        // console.log(prevProps['*'],'props then')
        let topic = ''
        if(this.props['*']) topic = this.props['*'].split('/')[0]
        console.log(topic)
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
        return (<section>
            <h3>Listing Articles:</h3>
        {this.state.articles.map(art => {
                        return (
                            <div key={art.article_id} className="articlelist-article">
                                
                                    <Link to={`/articles/${art.topic}/${art.article_id}`}>
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