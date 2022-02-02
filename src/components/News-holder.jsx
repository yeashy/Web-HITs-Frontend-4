import React from "react";
import NewsTemplate from "./Card";

class NewsHolder extends React.Component {
    render() {
        if (!this.props.isLoaded) { return <h3>Loading News...</h3> }
        else {
            return (
                <div>
                    {
                        this.props.news.map(value => {
                            return (<NewsTemplate title={value.title} tags={value.tags}
                                text={value.content}
                                src={findSrc(value.id)}
                                date={getFormattedDate(value.date)}
                                likes={value.serviceInfo.likes}
                                key={value.id} id={value.id}/>)
                        })
                    }
                </div>
            )
        }
    }
}

export function getFormattedDate(datetime) {
    var date = new Date(datetime);
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return day + '.' + month + '.' + year;
}

function findSrc(n) {
    if (n === 1) return "https://git.hits.tsu.ru/Subject-Web/Web-Frontend-Manual/-/raw/master/Current/2.%20Bootstrat%20and%20fetch/media/news/img-spacex-1.jpg";
    if (n === 2) return "https://git.hits.tsu.ru/Subject-Web/Web-Frontend-Manual/-/raw/master/Current/2.%20Bootstrat%20and%20fetch/media/news/Crew-2.png";
    if (n === 3) return "https://git.hits.tsu.ru/Subject-Web/Web-Frontend-Manual/-/raw/master/Current/2.%20Bootstrat%20and%20fetch/media/news/falcon9.jpg";
    if (n === 4) return "https://git.hits.tsu.ru/Subject-Web/Web-Frontend-Manual/-/raw/master/Current/2.%20Bootstrat%20and%20fetch/media/news/SpaceX-Logo.png";
}

export default NewsHolder;