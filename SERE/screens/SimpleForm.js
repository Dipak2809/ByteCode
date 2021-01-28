import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';


class SimpleForm extends Component {
    render() {
      return (
        <ChatBot
         recognitionEnable={true}
        //speechSynthesis={{ enable: true, lang: 'en' }}
          steps={[
            {
              id: '1',
              message: 'Welcome To SERE... What is your name?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '2',
            },
            {
              id: '2',
              message: 'Hi {previousValue}! Are you looking for any of these?',
              trigger: 'category',
            },
            {
              id: 'category',
              options: [
                { value: 'Earthwork', label: 'Earthwork Equipments', trigger: 'Earthwork' },
                { value: 'Concrete', label: 'Concreting Plant and Equipments', trigger: 'Concrete' },
                { value: 'Material', label: 'Material Handling Equipments', trigger: 'Concrete' },
                { value: 'Other', label: 'Not Sure or Something Else???', trigger: 'Other' },
              ],
            },
            {
              id: 'Other',
              message: 'What are you looking for? Can you explain the Material ' + 
                        'or the job for which you want the Equipments?',
              trigger: 'Machine',
            },
            {
              id: 'Machine',
              user: true,
              trigger: (value) => {
                var val = value.value.toString().toLowerCase();
                var num = val.match(/\d+/g);

                

                if (val.match(/Load/gi) && (num[0] < 1001 ) && val.match(/Kg/gi) ) {
                  return 'Loader1k';
                } else if (val.match(/Load/gi) && (num[0] < 5001 ) && val.match(/Kg/gi) ) {
                  return 'Loader5k';
                } else if (val.match(/Load/gi) && (num[0] < 51 ) && (val.match(/Hp/gi) || val.match(/horsepower/gi) ) ){
                  return 'Loader50h';
                } else if (val.match(/Load/gi) && (num[0] < 101 ) && (  val.match(/Hp/gi) || val.match(/horsepower/gi) ) ) {
                  return 'Loader100h';
                } else if (val.match(/Load/gi) ) {
                  return 'Loader';
                } else if (val.match(/Bulldozer/gi) ) {
                  return 'Bulldozer';
                } else if (val.match(/Scraper/gi) ) {
                  return 'Scrapers';
                } else if (val.match(/Backhoe/gi) ) {
                  return 'Backhoes';
                } else if (val.match(/Excavator/gi) ) {
                  return 'Excavators';
                } else if (val.match(/Generator/gi) ) {
                  return 'Generators';
                } else if (val.match(/truck/gi) ) {
                  return 'Trucks';
                } 
//----------------------------------------------------------------
                else if ( ( val.match(/Crane/gi) || val.match(/Lift/gi) ) && val.match(/Ton/gi) && val.match(/Meter/gi))
                {
                  var ton = val.indexOf("ton");
                  var meter = val.indexOf("meter");

                  if (ton > meter) {

                    if ( ( val.match(/Crane/gi) || val.match(/Lift/gi) ) && (num[0] < 101 ) && (num[1] < 101 ) ) {
                        return 'Crane1';
                      } else if ( ( val.match(/Crane/gi) || val.match(/Lift/gi) ) && (num[0] < 151 ) && (num[1] < 101 ) ){
                        return 'Crane2';
                      } else if ( ( val.match(/Crane/gi) || val.match(/Lift/gi) ) && (num[0] < 101 ) && (num[1] < 151 )  ) {
                        return 'Crane3';
                      } else if ( ( val.match(/Crane/gi) || val.match(/Lift/gi) ) && (num[0] < 151 ) && (num[1] < 151 ) ) {
                        return 'Crane4';
                      } else  {
                        return 'Cranes';
                      } 

                  }
                  else 
                  {

                    if ( ( val.match(/Crane/gi) || val.match(/Lift/gi) ) && (num[1] < 101 ) && (num[0] < 101 ) ) {
                        return 'Crane1';
                      } else if ( ( val.match(/Crane/gi) || val.match(/Lift/gi) ) && (num[1] < 151 ) && (num[0] < 101 ) ){
                        return 'Crane2';
                      } else if ( ( val.match(/Crane/gi) || val.match(/Lift/gi) ) && (num[1] < 101 ) && (num[0] < 151 )  ) {
                        return 'Crane3';
                      } else if ( ( val.match(/Crane/gi) || val.match(/Lift/gi) ) && (num[1] < 151 ) && (num[0] < 151 ) ) {
                        return 'Crane4';
                      } else  {
                        return 'Cranes';
                      } 

                  }

                      
              }

              else if( ( val.match(/Crane/gi) || val.match(/Lift/gi) ) && val.match(/Meter/gi) )
              {
                    if (   (num[0] < 101 ) ) 
                      {
                        return 'Crane13';
                      } 
                      else if (  (num[0] < 151 ) ){
                        return 'Crane24';
                      }  else  {
                        return 'Cranes';
                      }  
              }

              else if( ( val.match(/Crane/gi) || val.match(/Lift/gi) ) && val.match(/Ton/gi) )
              {
                     if (  (num[0] < 101 ) ) {
                        return 'Crane12';
                      } 
                      else if (  (num[0] < 151 ) ){
                        return 'Crane34';
                      }  else  {
                        return 'Cranes';
                      } 
              }
//-----------------------------------------------------------------
                else if (val.match(/Transport/gi) && val.match(/Concrete/gi) ) {
                  return 'CTransport';
                } else if (val.match(/Transport/gi) && ( val.match(/Material/gi) || val.match(/Earth/gi) || val.match(/Land/gi) || val.match(/debris/gi) ) ) {
                  return 'MTransport';
                } else if (val.match(/Transport/gi)) {
                  return 'ATransport';
                } else { 
                  return 'all';
                }
              
              },
            },
            //........................................................................
            //........................................................................
            {
              id: 'Loader',
              message: 'LoaderAll',
              trigger: '5',
            },
            //........................................................................
            //........................................................................

            {
              id: 'Loader1k',
              message: 'Loader1k',
              trigger: 'message-Loader1k',
            },
            {
              id: 'message-Loader1k',
              message: 'Thanks! Available Equipments are shown below as per your requirement!',
              trigger: 'result-Loader1k',
            },
            {
              id: 'result-Loader1k',
              options: [
                { value: 'Loader1', label: 'SAP Loader 500Kg', trigger: 'sap500' },
                { value: 'Loader2', label: 'SERE Loader 1000Kg', trigger: 'Sere1000' },
                { value: 'LoaderAll', label: 'Check all Loaders', trigger: 'LoaderAll' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            {
              id: 'sap500',
              message: 'Navigating to Product sap500 ',
              end: true,
            },
            {
              id: 'Sere1000',
              message: 'Navigating to Product Sere1000',
              end: true,
            },
            //........................................................................
            //........................................................................


            {
              id: 'Loader5k',
              message: 'Loader5k',
              trigger: 'message-Loader5k',
            },
            {
              id: 'message-Loader5k',
              message: 'Thanks! Available Equipments are shown below as per your requirement!',
              trigger: 'result-Loader5k',
            },
            {
              id: 'result-Loader5k',
              options: [
                { value: 'Loader1', label: 'SAP Loader 5000Kg', trigger: 'sap5000' },
                { value: 'Loader2', label: 'SERE Loader 3000Kg', trigger: 'Sere3000' },
                { value: 'LoaderAll', label: 'Check all Loaders', trigger: 'LoaderAll' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            {
              id: 'sap5000',
              message: 'Navigating to Product sap5000 ',
              end: true,
            },
            {
              id: 'Sere3000',
              message: 'Navigating to Product Sere3000',
              end: true,
            },
            //........................................................................
            //........................................................................



            {
              id: 'Loader50h',
              message: 'Loader50h',
              trigger: 'message-Loader50h',
            },
            {
              id: 'message-Loader50h',
              message: 'Thanks! Available Equipments are shown below as per your requirement!',
              trigger: 'result-Loader50h',
            },
            {
              id: 'result-Loader50h',
              options: [
                { value: 'Loader1', label: 'SAP Loader 50 HP', trigger: 'sap50' },
                { value: 'Loader2', label: 'SERE Loader 45 HP', trigger: 'Sere45' },
                { value: 'LoaderAll', label: 'Check all Loaders', trigger: 'LoaderAll' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            {
              id: 'sap50',
              message: 'Navigating to Product sap50 ',
              end: true,
            },
            {
              id: 'Sere45',
              message: 'Navigating to Product Sere45',
              end: true,
            },
            //........................................................................
            //........................................................................


            {
              id: 'Loader100h',
              message: 'Loader100h',
              trigger: 'message-Loader100h',
            },
            {
              id: 'message-Loader100h',
              message: 'Thanks! Available Equipments are shown below as per your requirement!',
              trigger: 'result-Loader100h',
            },
            {
              id: 'result-Loader100h',
              options: [
                { value: 'Loader1', label: 'SAP Loader 70 HP', trigger: 'sap70' },
                { value: 'Loader2', label: 'SERE Loader 85 HP', trigger: 'Sere85' },
                { value: 'LoaderAll', label: 'Check all Loaders', trigger: 'LoaderAll' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            {
              id: 'sap70',
              message: 'Navigating to Product sap70 ',
              end: true,
            },
            {
              id: 'Sere85',
              message: 'Navigating to Product Sere85',
              end: true,
            },
            //........................................................................
            //........................................................................
            {
              id: 'Earthwork',
              options: [
                { value: 'Loader', label: 'Loaders', trigger: 'LoaderAll' },
                { value: 'Excavators', label: 'Excavators', trigger: '5' },
                { value: 'Backhoes', label: 'Backhoes', trigger: '5' },
                { value: 'EarthworkA', label: 'Check all Earthwork Equipments', trigger: '5' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            {
              id: 'LoaderAll',
              options: [
                { value: 'Loader1', label: 'SAP Loader 50 HP', trigger: 'sap50' },
                { value: 'Loader2', label: 'SERE Loader 45 HP', trigger: 'Sere45' },
                { value: 'Loader3', label: 'SAP Loader 70 HP', trigger: 'sap70' },
                { value: 'Loader4', label: 'SERE Loader 85 HP', trigger: 'Sere85' },
                { value: 'Loader5', label: 'SAP Loader 5000Kg', trigger: 'sap5000' },
                { value: 'Loader6', label: 'SERE Loader 3000Kg', trigger: 'Sere3000' },
                { value: 'Loader7', label: 'SAP Loader 500Kg', trigger: 'sap500' },
                { value: 'Loader8', label: 'SERE Loader 1000Kg', trigger: 'Sere1000' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            //........................................................................
            //........................................................................
            {
              id: 'Concrete',
              message: 'Concrete',
              trigger: '5',
            },
            {
              id: 'Material',
              message: 'Material',
              trigger: '5',
            },
            {
              id: 'Loader',
              message: 'Loader',
              trigger: '5',
            },

            {
              id: 'Bulldozer',
              message: 'Bulldozer',
              trigger: '5',
            },

            //--------------------------------------------------------------------
            {
              id: 'Crane1',
              message: 'Cranes',
              trigger: 'message-Crane1',
            },
            {
              id: 'Crane2',
              message: 'Cranes',
              trigger: 'message-Crane2',
            },
            {
              id: 'Crane3',
              message: 'Cranes',
              trigger: 'message-Crane3',
            },
            {
              id: 'Crane4',
              message: 'Cranes',
              trigger: 'message-Crane4',
            },
            {
              id: 'Crane12',
              message: 'Cranes',
              trigger: 'message-Crane12',
            },
            {
              id: 'Crane34',
              message: 'Cranes',
              trigger: 'message-Crane34',
            },
            {
              id: 'Crane13',
              message: 'Cranes',
              trigger: 'message-Crane13',
            },
            {
              id: 'Crane24',
              message: 'Cranes',
              trigger: 'message-Crane24',
            },
            {
              id: 'Cranes',
              message: 'Cranes',
              trigger: 'message-CraneAll',
            },

//---------------------------------------------------------------

            //........................................................................
            //........................................................................

          
            {
              id: 'message-Crane1',
              message: 'Thanks! Available Equipments are shown below as per your requirement!',
              trigger: 'result-Crane1',
            },
            {
              id: 'result-Crane1',
              options: [
                { value: 'Crane1', label: 'SAP Crane 100m 100Ton ', trigger: 'crane100mt' },
                { value: 'CraneAll', label: 'Check all Cranes', trigger: 'message-CraneAll' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            {
              id: 'crane100mt',
              message: 'Navigating to Product SAP crane100mt ',
              end: true,
            },
            //........................................................................
            //........................................................................

            {
              id: 'message-Crane2',
              message: 'Thanks! Available Equipments are shown below as per your requirement!',
              trigger: 'result-Crane2',
            },
            {
              id: 'result-Crane2',
              options: [
                { value: 'Crane2', label: 'SAP Crane 150m 100Ton ', trigger: 'crane150mt' },
                { value: 'CraneAll', label: 'Check all Cranes', trigger: 'message-CraneAll' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            {
              id: 'crane150mt',
              message: 'Navigating to Product SAP crane150mt ',
              end: true,
            },
            //........................................................................
            //........................................................................

            {
              id: 'message-Crane3',
              message: 'Thanks! Available Equipments are shown below as per your requirement!',
              trigger: 'result-Crane3',
            },
            {
              id: 'result-Crane3',
              options: [
                { value: 'Crane3', label: 'SERE Crane 100m 150Ton ', trigger: 'crane100tm' },
                { value: 'CraneAll', label: 'Check all Cranes', trigger: 'message-CraneAll' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            {
              id: 'crane100tm',
              message: 'Navigating to Product SERE crane100tm ',
              end: true,
            },
            //........................................................................
            //........................................................................

            {
              id: 'message-Crane4',
              message: 'Thanks! Available Equipments are shown below as per your requirement!',
              trigger: 'result-Crane4',
            },
            {
              id: 'result-Crane4',
              options: [
                { value: 'Crane4', label: 'SERE Crane 150m 100Ton ', trigger: 'crane150tm' },
                { value: 'CraneAll', label: 'Check all Cranes', trigger: 'message-CraneAll' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            {
              id: 'crane150tm',
              message: 'Navigating to Product SERE crane150tm ',
              end: true,
            },
            //........................................................................
            //........................................................................
            
            {
              id: 'message-CraneAll',
              message: 'Thanks! Available Equipments are shown below as per your requirement!',
              trigger: 'result-CraneAll',
            },
            {
              id: 'result-CraneAll',
              options: [
                { value: 'Crane1', label: 'SAP Crane 100m 100Ton ', trigger: 'crane100mt' },
                { value: 'Crane2', label: 'SAP Crane 150m 100Ton ', trigger: 'crane150mt' },
                { value: 'Crane3', label: 'SERE Crane 100m 150Ton ', trigger: 'crane100tm' },
                { value: 'Crane4', label: 'SERE Crane 150m 100Ton ', trigger: 'crane150tm' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            //........................................................................
            //........................................................................

            {
              id: 'message-Crane12',
              message: 'Thanks! Available Equipments are shown below as per your requirement!',
              trigger: 'result-Crane12',
            },
            {
              id: 'result-Crane12',
              options: [
                { value: 'Crane1', label: 'SAP Crane 100m 100Ton ', trigger: 'crane100mt' },
                { value: 'Crane2', label: 'SAP Crane 150m 100Ton ', trigger: 'crane150mt' },
                { value: 'CraneAll', label: 'Check all Cranes', trigger: 'message-CraneAll' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            //........................................................................
            //........................................................................

            {
              id: 'message-Crane34',
              message: 'Thanks! Available Equipments are shown below as per your requirement!',
              trigger: 'result-Crane34',
            },
            {
              id: 'result-Crane34',
              options: [
                { value: 'Crane3', label: 'SERE Crane 100m 150Ton ', trigger: 'crane100tm' },
                { value: 'Crane4', label: 'SERE Crane 150m 100Ton ', trigger: 'crane150tm' },
                { value: 'CraneAll', label: 'Check all Cranes', trigger: 'message-CraneAll' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            //........................................................................
            //........................................................................
            {
              id: 'message-Crane13',
              message: 'Thanks! Available Equipments are shown below as per your requirement!',
              trigger: 'result-Crane13',
            },
            {
              id: 'result-Crane13',
              options: [
                { value: 'Crane1', label: 'SAP Crane 100m 100Ton ', trigger: 'crane100mt' },
                { value: 'Crane3', label: 'SERE Crane 100m 150Ton ', trigger: 'crane100tm' },
                { value: 'CraneAll', label: 'Check all Cranes', trigger: 'message-CraneAll' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            //........................................................................
            //........................................................................
            {
              id: 'message-Crane24',
              message: 'Thanks! Available Equipments are shown below as per your requirement!',
              trigger: 'result-Crane24',
            },
            {
              id: 'result-Crane24',
              options: [
                { value: 'Crane2', label: 'SAP Crane 150m 100Ton ', trigger: 'crane150mt' },
                { value: 'Crane4', label: 'SERE Crane 150m 100Ton ', trigger: 'crane150tm' },
                { value: 'CraneAll', label: 'Check all Cranes', trigger: 'message-CraneAll' },
                { value: 'All', label: 'Check all Equipments', trigger: 'category' },
              ],
            },
            //........................................................................
            //........................................................................








//--------------------------------------------------------------------------------------------
            {
              id: 'Scrapers',
              message: 'Scrapers',
              trigger: '5',
            },
            {
              id: 'Truck',
              message: 'Trucks',
              trigger: '5',
            },
            {
              id: 'Backhoes',
              message: 'Backhoes',
              trigger: '5',
            },
            {
              id: 'Excavators',
              message: 'Excavators',
              trigger: '5',
            },
            {
              id: 'Generators',
              message: 'Generators',
              trigger: '5',
            },
            {
              id: 'CTransport',
              message: 'Trucks',
              trigger: '5',
            },
            {
              id: 'MTransport',
              message: 'Trucks',
              trigger: '5',
            },
            {
              id: 'ATransport',
              message: 'Trucks',
              trigger: '5',
            },
            {
              id: '5',
              message: 'How old are you?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: '7',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 0) {
                  return 'value must be positive';
                } else if (/2/i.test(value)) {
                  return `${value}? Come on!`;
                }
  
                return true;
              },
            },
            {
              id: '7',
              message: 'Great! Check out your summary',
              trigger: 'review',
            },
            {
              id: 'review',
              message: 'Thanks!!',
              end: true,
            },
            {
              id: 'update',
              message: 'Would you like to update some field?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                { value: 'no', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'update-yes',
              message: 'What field would you like to update?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Name', trigger: 'update-name' },
                { value: 'Machine', label: 'Machine', trigger: 'update-Machine' },
                { value: 'age', label: 'Age', trigger: 'update-age' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'update-Machine',
              update: 'Machine',
              trigger: '7',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: '7',
            },
            {
              id: 'end-message',
              message: 'Thanks! Your data was submitted successfully!',
              end: true,
            },
          ]}
        />
      );
    }
  }
  
  export default SimpleForm;