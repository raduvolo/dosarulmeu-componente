import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
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
  IonSearchbar,
} from '@ionic/react';
import { shareOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Toolbar</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

      <IonCard color="warning"><IonCardHeader><IonCardSubtitle>Au fost gasite 3 dosare:</IonCardSubtitle></IonCardHeader></IonCard>
            
            <IonCard color="light" button="true">
            <IonCardHeader>
              <IonCardSubtitle>Curtea de Apel Pitesti</IonCardSubtitle>
              <IonCardTitle>Dosar nr. 317/1259/2021</IonCardTitle>
              <IonCardSubtitle><b>Actiune in anulare AGA</b></IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
             <p><b>Reclamant:</b> Bran Oil SA</p> 
             <p><b>Parat:</b> Electroarges SA</p> 
            </IonCardContent>
          </IonCard>    

          <IonCard color="light" button="true">
            <IonCardHeader>
              <IonCardSubtitle>Tribunalul Specializat Arges</IonCardSubtitle>
              <IonCardTitle>Dosar nr. 317/1259/2021</IonCardTitle>
              <IonCardSubtitle><b>Actiune in anulare AGA</b></IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p><b>Reclamant:</b> Bran Oil SA, in faliment, prin lichidator judiciar Dogaru, Oana si Asociatii Sprl</p>
              <p><b>Parat:</b> Electroarges SA</p>
            </IonCardContent>
          </IonCard> 

          <IonCard color="tertiary" button="true">
            <IonCardHeader>
              <IonCardSubtitle>Tribunalul Specializat Arges</IonCardSubtitle>
              <IonCardTitle>Dosar nr. 317/1259/2021*</IonCardTitle>
              <IonCardSubtitle><b>Actiune in anulare AGA</b></IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p><b>Reclamant:</b> Bran Oil SA, in faliment, prin lichidator judiciar Dogaru, Oana si Asociatii Sprl</p>
              <p><b>Parat:</b> Electroarges SA</p>
            </IonCardContent>
          </IonCard>
      
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Cautati dupa numarul dosarului: </IonCardSubtitle>
          </IonCardHeader>
          <IonSearchbar animated={true} placeholder=".../..../...."></IonSearchbar>
        </IonCard>



        <IonCard>
            <IonCardHeader color="success">
              <IonCardSubtitle>Tribunalul Specializat Arges</IonCardSubtitle>
              <IonCardTitle>Dosar nr. 317/1259/2021*</IonCardTitle>
              <IonCardSubtitle><b>Actiune in anulare AGA</b></IonCardSubtitle>
            </IonCardHeader>   
            <IonCardContent>
              <IonList lines="none">
               <IonItem><IonLabel><b>Stadiu procesual: </b><span> Fond</span></IonLabel></IonItem> 
               <IonItem><IonLabel><b>Materie: </b><span> Litigii cu profesionisti</span></IonLabel></IonItem> 
               <IonItem><IonLabel><b>Data inregistrarii: </b><span> 21.03.2023</span></IonLabel></IonItem> 
               <IonItem><IonLabel><b>Data ultimei modificari: </b><span> 21.03.2023</span></IonLabel></IonItem> 
               <IonItem><IonLabel><b></b></IonLabel></IonItem> 
               <IonItem><IonLabel><b>Parti</b></IonLabel></IonItem> 
               <IonItem><IonLabel class="ion-text-wrap"><b>Reclamant: </b><span> Bran Oil SA, in faliment, prin lichidator judiciar Dogaru, Oana si Asociatii Sprl</span></IonLabel></IonItem> 
               <IonItem><IonLabel class="ion-text-wrap"><b>Parata: </b><span> Electroarges SA</span></IonLabel></IonItem>
               <IonItem><IonIcon icon={shareOutline}></IonIcon></IonItem>           
              </IonList>
            </IonCardContent>
        </IonCard>

        <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>TERMENE</IonCardSubtitle>
            </IonCardHeader>
        </IonCard>

        <IonCard>    
            <IonCardContent>
            <IonCardHeader color="light">
              <IonCardTitle>5.10.2023</IonCardTitle>
            </IonCardHeader>
              <IonList>
               <IonItem><IonLabel><b>Ora estimata: </b><span> 10:30</span></IonLabel></IonItem> 
               <IonItem><IonLabel><b>Complet: </b><span> C11CC-fond</span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Tip solutie: </b><span>-</span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Document: </b><span> -</span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Solutia: </b><span> -</span></IonLabel></IonItem>             
              </IonList>
            </IonCardContent>
        </IonCard>

        <IonCard>    
            <IonCardContent>
            <IonCardHeader color="light">
              <IonCardTitle>26.06.2023</IonCardTitle>
            </IonCardHeader>
              <IonList>
               <IonItem><IonLabel><b>Ora estimata: </b><span> 10:30</span></IonLabel></IonItem> 
               <IonItem><IonLabel><b>Complet: </b><span> C11CC-fond</span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Tip solutie: </b><span>Amana cauza</span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Document: </b><span>Incheiere de sedinta</span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Solutia: </b><span> Admite excepţia lipsei de obiect a cererii de chemare în judecată în ceea ce priveşte anularea Hotărârii Adunării Generale Extraordinare a Acţionarilor ELECTROARGES SA nr. 104/11.12.2017. Respinge în rest excepţiile, ca neîntemeiate . Stabileşte termen pentru continuarea judecăţii în şedinţa din Camera de Consiliu din data de 05/12/2023, ora 10.30, cu citarea părţilor. Cale de atac odată cu fondul. Pronunţată prin punerea soluţiei la dispoziţia părţilor de către grefa instanţei, astăzi 26.09.2023.</span></IonLabel></IonItem>             
              </IonList>
            </IonCardContent>
        </IonCard>


        <IonCard>    
            <IonCardContent>
            <IonCardHeader color="light">
              <IonCardTitle>07.06.2023</IonCardTitle>
            </IonCardHeader>
              <IonList>
               <IonItem><IonLabel><b>Ora estimata: </b><span> 09:00</span></IonLabel></IonItem> 
               <IonItem><IonLabel><b>Complet: </b><span> C2CC-fond</span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Tip solutie: </b><span>Incheiere</span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Document: </b><span>Incheiere - abtinere 7.06.2023 </span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Solutia: </b><span> Respinge declaratia de abţinere formulată de domnul judecător Tiţa Ciprian în dosarul nr. 317/1259/2021*. Fără cale de atac. Pronunţată în şedinţa publică din 07.06.2023</span></IonLabel></IonItem>             
              </IonList>
            </IonCardContent>
        </IonCard>

        <IonCard>    
            <IonCardContent>
            <IonCardHeader color="light">
              <IonCardTitle>06.06.2023</IonCardTitle>
            </IonCardHeader>
              <IonList>
               <IonItem><IonLabel><b>Ora estimata: </b><span> 10:30</span></IonLabel></IonItem> 
               <IonItem><IonLabel><b>Complet: </b><span> C11CC-fond</span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Tip solutie: </b><span>Incheiere</span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Document: </b><span>Incheiere de sedinta din 6.06.2023 </span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Solutia: </b><span>In vederea soluţionării cererii de abţinere formulate de preşedintele completului de judecată, domnul judecător Tiţa Ciprian, amână judecata cauzei. Înaintează dosarul către completul imediat următor. Cu cale de atac odată cu fondul. Pronunţată în şedinţa publică din 06 Iunie 2023 la Tribunalul Specializat Argeş.</span></IonLabel></IonItem>             
              </IonList>
            </IonCardContent>
        </IonCard>

        <IonCard>    
            <IonCardContent>
            <IonCardHeader color="light">
              <IonCardTitle>02.05.2023</IonCardTitle>
            </IonCardHeader>
              <IonList>
               <IonItem><IonLabel><b>Ora estimata: </b><span> 10:00</span></IonLabel></IonItem> 
               <IonItem><IonLabel><b>Complet: </b><span> C3CC-fond</span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Tip solutie: </b><span>Incheiere de sedinta</span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Document: </b><span>Incheiere de sedinta din 02.05.2023 </span></IonLabel></IonItem>             
               <IonItem><IonLabel class="ion-text-wrap"><b>Solutia: </b><span>În temeiul art. 110 alin. 3 din HCSM nr. 3243/2022, înaintează cauza preşedintelui instanţei în vederea stabilirii existenţei erorii la repartizare precum şi pentru a stabili asupra necesităţii repartizării aleatorii. Cu cale de atac odată cu fondul. Pronun?ată astăzi 02.05.2023, prin punerea solu?iei la dispozi?ia păr?ilor prin mijlocirea grefei instan?ei. Document: Încheiere de şedinţă 02.05.2023</span></IonLabel></IonItem>             
              </IonList>
            </IonCardContent>
        </IonCard>



      </IonContent>
    </IonPage>
  );
};

export default Home;
