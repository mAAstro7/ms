import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

let MoneySaver = (props) => {
  const { moneysaved, costSkholePay, costSkholeBoss, costSkholeWorkers, firmpaymultiplier, kilometrikorvaus, skholelicens, daypay, costother, costFood, costHotel, costCar, costTeacher, salaryTemp, allppl, salaryAll, handleSubmit, pristine, reset, submitting } = props;
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="moneysaver-holder">

      
      <div className="left-side">
      <div className="section-breaker">1. Palkkataso/kk, perustiedot</div>
        <div className="section-holder">
          <label className="info-label">Työntekijän palkka</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="workerpay" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Esimiehen palkka</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="managerpay" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Johtotason palkka</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="bosspay" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Sivukulukerroin</label>
          <div className="data-holder">
            {firmpaymultiplier}
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Päiväpalkan jakaja</label>
          <div className="data-holder">
            {daypay}
          </div>
        </div>
        <div className="section-breaker">2. Perinteisen koulutuksen kustannusarvio</div>
        <div className="section-holder">
          <label className="info-label">Koulutettavien työntekijöiden lkm</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="countworker" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div className="section-holder">
          <label className="info-label">Koulutettavien esimiesten lkm</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="countmanager" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div className="section-holder">
          <label className="info-label">Koulutettavien johtotasonhenkilöiden lkm </label>
          <div className="data-holder">
            <Field className="data-input-holder" name="countboss" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div className="section-holder">
          <label className="info-label">Koulutuspäivien lukumäärä</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="daycount" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div className="section-breaker">3. Sijaitset (tarvittava määrä koulutuksen ajaksi)</div>
        <div className="section-holder">
          <label className="info-label">Työntekijät</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="tempworker" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div className="section-holder">
          <label className="info-label">Esimiehet</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="tempmanager" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Johto</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="tempboss" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Sijaispäivien määrä</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="tempdaycount" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div className="section-breaker">4. Fasiliteetit</div>
        <div className="section-holder">
          <label className="info-label">Kouluttajan palkkio</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="teacherpay" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div className="section-breaker">Kilometrikorvaus</div>
        <div className="section-holder">
          <label className="info-label">Kilometrimäärä koulutuspaikkaan</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="countkm" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Kilometrikorvaus määrä</label>
          <div className="data-holder">
              {kilometrikorvaus}
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Kuinka monelle henkilölle maksetaan</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="countkmrefund" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div className="section-breaker">Yöpymiskustannukset</div>
        <div className="section-holder">
          <label className="info-label">Huoneen hinta</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="roomcost" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Kuinka monta huonetta</label>
          <div className="data-holder">

            <Field className="data-input-holder" name="roomcount" component="input" type="text" placeholder="lkm" />

          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Yöpymis vuorokaudet</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="countroomdays" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div className="section-breaker">Kokoustarjoilu</div>

        <div className="section-holder">
          <label className="info-label">Kokoustarjottavat, hinta/hlö</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="foodcost" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Kuinka monelle henkilölle maksetaan</label>
          <div className="data-holder">

            <Field className="data-input-holder" name="foodcount" component="input" type="text" placeholder="lkm" />

          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Vuorokausimäärä</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="countfooddays" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div className="section-breaker">Muut mahdolliset kulut, esim tilavuokra</div>
        <div className="section-holder">
          <label className="info-label">Muut mahdolliset kustannukset</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="costother" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        </div>
        <div className="right-side">

        <div className="section-breaker">5. Skholen malli kustannusarvio</div>
        <div className="section-holder">
          <label className="info-label">Henkilöstömäärä yhteensä</label>
          <div className="data-holder">

              {allppl}

          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Lisenssin hinta</label>
          <div className="data-holder">
       
          <Field className="data-input-holder" name="skholelicens" component="input" type="text" placeholder="€€€" />
        
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Hallinnon viemä työaika-arvio päivissä</label>
          <div className="data-holder">
            <Field className="data-input-holder" name="countbossskholedays" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div className="section-breaker">6. Kustannusvertailu</div>
        <div className="section-holder">
          <label className="info-label">Palkat</label>
          <div className="data-holder">
      
              {salaryAll}€
          
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Sijaiset</label>
          <div className="data-holder">

              {salaryTemp}€
      
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Kouluttajan palkkio</label>
          <div className="data-holder">
       
              {costTeacher}€
            </div>
  
        </div>
        <div className="section-holder">
          <label className="info-label">Kilometrikorvaukset</label>
          <div className="data-holder">
   
              {costCar}€
            </div>
    
        </div>
        <div className="section-holder">
          <label className="info-label">Yöpymiskustannukset</label>
          <div className="data-holder">

              {costHotel}€
            </div>
       
        </div>
        <div className="section-holder">
          <label className="info-label">Kokoustarjoilut</label>
          <div className="data-holder">
     
              {costFood}€
     
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Muut mahdolliset kulut yh</label>
          <div className="data-holder">
         
              {costother}€
         
          </div>
        </div>
        <div className="section-breaker">Skholen malli</div>
        <div className="section-holder">
          <label className="info-label">Lisenssi hinta vuodeksi, rajaton käyttö</label>
          <div className="data-holder">
     
              {costSkholePay}€
         
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Arvioitu palkkakustannus hallinnoinnista</label>
          <div className="data-holder">
       
              {costSkholeBoss}€
           
          </div>
        </div>
        <div className="section-holder">
          <label className="info-label">Palkat (vaikka opiskelu tehdään työaikana)</label>
          <div className="data-holder">
   
              {costSkholeWorkers}€
      
          </div>
        </div>

         <div className="section-holder" id="money-saved">
          <label className="info-label">Kustannussäästö</label>
          <div className="data-holder">
   
              {moneysaved}€
      
          </div>
        </div>



        <div className="button-holders">
          <button onClick={()=> window.print()}>Printtaa</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Tyhjennä</button>
        </div>
      </div>
      </div>
    </form>
  )
}


MoneySaver = reduxForm({
  form: 'selectingFormValues', // a unique identifier for this form
})(MoneySaver);


// Decorate with connect to read form values
const selector = formValueSelector('selectingFormValues'); // <-- same as form name

MoneySaver = connect(state => {
  // can select values individually

  const daypay = 21.5;
  const firmpaymultiplier = 1.35;
  const kilometrikorvaus = 0.42;
  var bosspay = parseInt(selector(state, 'bosspay'), 10);
  var managerpay = parseInt(selector(state, 'managerpay'), 10);
  var workerpay = parseInt(selector(state, 'workerpay'), 10);
  var countworker = parseInt(selector(state, 'countworker'), 10);
  var countmanager = parseInt(selector(state, 'countmanager'), 10);
  var countboss = parseInt(selector(state, 'countboss'), 10);
  var daycount = parseInt(selector(state, 'daycount'), 10);

  var salaryAll = 0;
  var salaryholder = Math.round(((bosspay * countboss) + (managerpay * countmanager) + (workerpay * countworker)) * firmpaymultiplier / daypay * daycount);
  if(salaryholder >= 0) {
    salaryAll = salaryholder;
  }

  var allppl = 0;
  var allpplholder = countworker + countboss + countmanager;

  if (allpplholder >= 0) {
    allppl = allpplholder;
  }


  var costotherholder = parseInt(selector(state, 'costother'), 10);
  var costother = 0; 

  if (costotherholder>=0) {
    costother = costotherholder;
  }

  var tempworker = parseInt(selector(state, 'tempworker'), 10);
  var tempmanager = parseInt(selector(state, 'tempmanager'), 10);
  var tempboss = parseInt(selector(state, 'tempboss'), 10);
  var tempdaycount = parseInt(selector(state, 'tempdaycount'), 10);
  const skholelicens =  selector(state, 'skholelicens')

  var salaryTemp = 0;
  var salarytemphold = Math.round(((bosspay * tempboss) + (managerpay * tempmanager) + (workerpay * tempworker)) * firmpaymultiplier / daypay * tempdaycount);
  if (salarytemphold >= 0) {
      salaryTemp = salarytemphold;
  }


  var costTeacher = 0;
  var costTeacherhold = parseInt(selector(state, 'teacherpay'), 10);

  if (costTeacherhold >= 0) {
    costTeacher = costTeacherhold;
  }

  var countkm = parseInt(selector(state, 'countkm'), 10);
  var countkmrefund = parseInt(selector(state, 'countkmrefund'), 10);

  var costCar = 0;
  var costCarhold = countkm * countkmrefund * kilometrikorvaus;
  if(costCarhold >=0) {
    costCar = costCarhold;
  }

  var roomcost = parseInt(selector(state, 'roomcost'), 10);
  var roomcount = parseInt(selector(state, 'roomcount'), 10);
  var countroomdays = parseInt(selector(state, 'countroomdays'), 10);

  var costHotel = 0;
  var costHotelhold = roomcost * roomcount * countroomdays;

  if(costHotelhold >= 0) {
    costHotel = costHotelhold;
  }

  var foodcost = parseInt(selector(state, 'foodcost'), 10);
  var foodcount = parseInt(selector(state, 'foodcount'), 10);
  var countfooddays = parseInt(selector(state, 'countfooddays'), 10);

  var countbossskholedays = parseInt(selector(state, 'countbossskholedays'), 10);
  

  var costFoodHolder = foodcost * foodcount * countfooddays;
  var costFood = 0;

  if (costFoodHolder>=0) {
   costFood = costFoodHolder;
  } 

  var costskholepayholder = skholelicens*allppl;
  var costSkholePay = 0;
  if (costskholepayholder>=0) {
    costSkholePay = skholelicens*allppl;
  }
 

  var costSkholeBoss = 0;
  var costSkholeBosshold = Math.round(bosspay*firmpaymultiplier*countbossskholedays/daypay);

  if (costSkholeBosshold>=0) {
    costSkholeBoss = costSkholeBosshold;
  }


  const costSkholeWorkers = salaryAll;
  const moneysaved = Math.round(salaryAll+salaryTemp+costTeacher+costCar+costHotel+costFood+costother-costSkholePay-costSkholeBoss-costSkholeWorkers);


  return {
   moneysaved, costSkholePay, costSkholeBoss, costSkholeWorkers, kilometrikorvaus, salaryAll, allppl, costother, costFood, costHotel, costCar, costTeacher, salaryTemp, daypay, skholelicens, firmpaymultiplier
  };
})(MoneySaver);

export default MoneySaver;