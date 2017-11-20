import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MaterialUI from '../component/MaterialUI'
import firebase from 'firebase'
import Gauge from 'react-radial-gauge';


try {
    injectTapEventPlugin()
}
catch(e) {
    //Don't do anything
}

var config = {
    apiKey: "AIzaSyBCvx1WFPYOutNvj8Hfmu_jTuxoWEQvPHc",
    authDomain: "isdp-954b3.firebaseapp.com",
    databaseURL: "https://isdp-954b3.firebaseio.com",
    projectId: "isdp-954b3",
    storageBucket: "isdp-954b3.appspot.com",
    messagingSenderId: "195263147810"
};

if (!firebase.apps.length) {
    firebase.initializeApp({});
}
const AppBarExampleIcon = () => (
    <MaterialUI>
        <style jsx>{`
              h1 {
                font-family: 'Avenir';
                font-size: 100px;
                text-align: center;
              }
            `}
        </style>
        <AppBar
            title="Intl Sensors Development Project"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div>

            <h1>NOW</h1>
        </div>

        <div>
            <div>
                <Gauge currentValue={78}/>
            </div>
            <div><Gauge currentValue={58}/></div>
            <div><Gauge currentValue={23}/></div>
        </div>
    </MaterialUI>
);

export default AppBarExampleIcon

