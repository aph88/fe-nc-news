import React from 'react'
import { Link } from '@reach/router'
import axios from 'axios'
import ArticleBody from './article'

class ArticleList extends React.Component {
    state = {
        articles: [],
    }

    componentDidMount () {
        const params = {topic: this.props.topic}
        axios.get('https://aph88-nc-news.herokuapp.com/api/articles', {params}).then((res) => {
            const newArticles = [];
            res.data.articles.forEach((article, i) => {
                newArticles.push({...article});
                newArticles[i].show = false;
            })    
        this.setState({
                articles: [...newArticles]
            })
        })
    }

    componentDidUpdate (prevProps, prevState) {
        const params = {topic: this.props.topic}
        if (prevProps.topic !== this.props.topic){
            axios.get(`https://aph88-nc-news.herokuapp.com/api/articles`, {params}).then((res) => {
                const newArticles = [];
                res.data.articles.forEach((article, i) => {
                    newArticles.push({...article});
                    newArticles[i].show = false;
                })
            this.setState({
                    articles: [...newArticles]
                })
            })
        }
    }

    showArticle = (index) => {
        this.setState((prevState) => {
            const newArticles = [];
            prevState.articles.forEach((article, i) => {
                newArticles.push({...article})
                if (i === index) newArticles[i].show = !newArticles[i].show;
            })
            return {articles: newArticles}
        })
    }

    render () {
        return (<section>
            <h3>{(this.props['*'] === '' || this.props['*'] === undefined) ? 'Listing articles' : `Listing articles for ${this.props['*']}`}</h3>
        {this.state.articles.map((art, i) => {
                        return (
                            <div key={art.article_id} className="articlelist-article">                                                                   
                                    <h4 onClick={() => {
                                        this.showArticle(i)
                                    }}>{art.title}</h4>                                        
                                <p>{`Created at: ${art.created_at}, by: ${art.author}, Votes: ${art.votes} Comments: ${art.comment_count}`}</p>
                                <Link to={`/articles/${art.topic}/${art.article_id}`}><p>Go to article directly!</p></Link>
                                { art.show ? <ArticleBody article_id={art.article_id}/> : null}
                            </div>            
            )
        })}
        </section>)
    }

}

export default ArticleList