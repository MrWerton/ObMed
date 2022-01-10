import {  IonPage } from '@ionic/react';
import { Header } from '../components/Header';
import { ListCard } from '../components/ListCard';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage className="Home">
      <Header/>
      <ListCard/>
    </IonPage>
  );
};

export default Home;
