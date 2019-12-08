import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import Idea from '../components/Idea';
import Competition from '../components/Competition';

class home extends Component {

    state = {
        ideas: null,
        competitions: null
    }

    componentDidMount(){
        
        axios.get('/ideas')
            .then(res => {
                console.log("in axios ideas");
                console.log(res.data);
                this.setState({
                    ideas: res.data
                });
                
            })
            .catch(err => console.log(err));
        axios.get('/competitions')
            .then(res => {
                console.log("in axios competitions");
                console.log(res.data);
                this.setState({
                    competitions: res.data
                });
                
            })
            .catch(err => console.log(err));
        

    }

    render() {
        let recentIdeasMarkup = this.state.ideas ? (
            this.state.ideas.map(idea => <Idea key = { idea.ideaId } idea={idea}/>)
        ) : <p>Loading ...</p>;
        let recentCompetitionsMarkup = this.state.competitions ? (
            this.state.competitions.map(competition => <Competition key = { competition.competitionId } competition={competition}/>)
        ) : <p>Loading ...</p>;

        return (
            <Grid container spacing={16}>
                <Grid item sm={8} xs={12}>
                    {recentIdeasMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    {recentCompetitionsMarkup}
                </Grid>
            </Grid>
        );
    }
}
export default home;

