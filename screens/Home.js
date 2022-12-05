import React, { useEffect, useState } from 'react';
import { getPopularMovies, getUpcomingMovies } from '../services/services';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import List from '../components/List';

const dimensions = Dimensions.get('screen');
const Home = () => {
    const [movieImages, setMovieImages] = useState([]);
    const [popularMovies, setPopularMovies] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        getUpcomingMovies().then( movies => {
            const movieImagesArray = [];
            movies.forEach( movie => {
                movieImagesArray.push('https://image.tmdb.org/t/p/w500'+movie.poster_path)
            });
            setMovieImages(movieImagesArray);
        }).catch(err => {
            setError(err);
        })

        getPopularMovies().then( movies => {
            setPopularMovies(movies)
        }).catch(err => {
        setError(err);
        });
    }, []);
    return (
        <React.Fragment>
            <View>
                <SliderBox 
                    images={movieImages}
                    dotStyle={styles.dotStyle} 
                    autoplay={true} 
                    circleLoop={true}
                    sliderBoxHeight= { dimensions.height / 1.5 } //One third of height of screen
                />
                {/* <Text>Movie Name: {movie.original_title}</Text>
                <Text>Language: {movie.original_language}</Text>
                <Text>Release Date: {movie.release_date}</Text> */}
                {error && <Text style={{color: 'red'}}>Error in the Server</Text>}
            </View>
            <View>
                <List title='my list' content={popularMovies}></List>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    sliderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotStyle: {
        height: 0
    },
    carousel: {
        
    }
});

export default Home;