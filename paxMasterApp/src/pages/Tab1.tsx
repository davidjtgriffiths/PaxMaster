// import React from 'react';
import React, { useState, useEffect } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import {
  IonButton,
  IonList,
  IonItem
} from '@ionic/react';

import axios from 'axios';

import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';




// const sendGetRequest = () => {
//   const  endpoint  =  `http://127.0.0.1:8000/api/message/1`;
//   return axios({
//     url: `http://127.0.0.1:8000/api/message/1`,
//     method: 'get'
//   }).then(response => {
//     console.log(response);
//     return response.data;
//   })
// };

const Tab1: React.FC = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
      `http://127.0.0.1:8000/api/message/1`
      )

      console.log(result.data.data.title)

      setItems(result.data.data.title)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Message</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Message</IonTitle>


          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Message" />
        <IonItem>
        <h1>msg: {items}</h1>
                  </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
