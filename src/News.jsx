import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Navbar';
import Slider from './components/Slider';
import Title from './components/H-holder';
import Attention from './components/P-holder';
import GetNewsContainer from './components/newsHolderContainer'

class News extends React.Component {
  render(){
    return (
      <div className="Chill">
        <Header title="Navbar example" link1="News" link2="ToDoLists" />
        <Container>
          <Slider img1="https://hits.tsu.ru/sites/default/files/styles/main_slideshow_1140_300/public/start.png?itok=IULYkKfR"
            img2="https://hits.tsu.ru/sites/default/files/styles/main_slideshow_1140_300/public/ezh.png?itok=fmGF8T4v"
            img3="https://hits.tsu.ru/sites/default/files/styles/main_slideshow_1140_300/public/final.png?itok=kaDoekkt" />
          <Title text="Новости" />
          <Attention text="Данный раздел является статическим, новости не подгружаются с сервера!" />
          <GetNewsContainer/>
          
        </Container>
      </div>
    )
  }
}

export default News;