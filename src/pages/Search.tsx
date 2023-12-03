import React from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonIcon,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonSearchbar
} from '@ionic/react';
import './Home.css';

const Search: React.FC = () => {

    return (
    <IonPage id="search-page">
    <IonHeader>
    <IonToolbar>
      <IonTitle>Toolbar</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonContent fullscreen>

  <p> Cautati dupa numarul dosarului</p> 
  <IonSearchbar animated={true} placeholder=".../..../...."></IonSearchbar>
 </IonContent>
  </IonPage>

    );
};

export default Search;