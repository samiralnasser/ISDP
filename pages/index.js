import { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MaterialUI from '../component/MaterialUI'
import firebase from 'firebase'
import Gauge from '../component/gauge';

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

if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
}

const CustomGuage = (props) => (
    <Gauge
        size={300}
        maximumValue={130}
        dialWidth={9}
        progressRotation={-45}
        progressWidth={18}
        progressFontSize={60}
        progressFontUnits="&#176;C"
        progressColor="rgba(95, 103, 142, 1)"
        {...props}
    />
)

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: 0,
            humidity: 0,
            dustParticles: 0
        }
    }

    componentWillMount() {
        const db = firebase.database()
        db.ref('temperature').on('value', (snapshot) => {
            this.setState({ temperature: snapshot.val() })
        })
        db.ref('humidity').on('value', (snapshot) => {
            this.setState({ humidity: snapshot.val() })
        })
        db.ref('dustParticles').on('value', (snapshot) => {
            this.setState({ dustParticles: snapshot.val() })
        })
    }

    render() {
        return (
            <MaterialUI>
                <div>
                    <AppBar
                        title="Intl Sensors Development Project"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <div>

                        <h1>NOW</h1>
                    </div>

                    <div>
                        <div>
                            <CustomGuage currentValue={this.state.temperature} />
                        </div>
                        <div>
                            <CustomGuage currentValue={this.state.humidity} />
                        </div>
                        <div>
                            <CustomGuage currentValue={this.state.dustParticles} />
                        </div>
                    </div>
                </div>
            </MaterialUI>
        )
    }
}

export default Home