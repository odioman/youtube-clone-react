import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar, VideoDetail } from './components'


class App extends React.Component {
    state = {
        video: [],
        selectedVideo: null,
    }
    
    render () {
        return (
            <Grid justify='center' container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                          <SearchBar onFormSubmit ={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                        <VideoDetail/>                        </Grid>
                        <Grid item xs={4}>
                        {/* VIdeo List*/}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );



        async function handleSubmit(searchTerm) {
            const { data: { items: videos } } = await youtube.get("search", {
              params: {
                part: "snippet",
                maxResults: 5,
                key: 'AIzaSyAnZtSCeBvVcqfvW3MUbD679JaprzLya5g',
                q: searchTerm,
              }
            });
        
            //setVideos(videos);
            //setSelectedVideo(videos[0]);
          }
        }
    }
export default App;