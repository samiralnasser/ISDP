import { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MaterialUI from '../component/MaterialUI'
import firebase from 'firebase'
import firebaseConfig from '../config/firebaseConfig'
import Gauge from '../component/gauge';
import styles from '../styles/IndexStyles'

try {
    injectTapEventPlugin()
}
catch(e) {
    //Don't do anything
}

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const CustomGuage = (props) => (
    <Gauge
        style={styles.gauge}
        size={300}
        maximumValue={130}
        dialWidth={9}
        progressRotation={-45}
        progressWidth={18}
        progressFontSize={40}
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
            dustParticles: 0,
            pressure: 0
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
        db.ref('pressure').on('value', (snapshot) => {
            this.setState({ pressure: snapshot.val() })
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
                        <h1 style={styles.heading}>NOW</h1>
                    </div>

                    <div style={styles.gaugeContainer}>
                        <div style={{ display: 'inline-block' }}>
                            <h3>Temperature</h3>
                            <CustomGuage currentValue={this.state.temperature} progressFontUnits="&#176;C"/>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <h3>Humidity</h3>
                            <CustomGuage currentValue={this.state.humidity} progressFontUnits="%"/>
                        </div>
                    </div>
                    <div style={styles.gaugeContainer}>
                        <CustomGuage currentValue={this.state.dustParticles} progressFontUnits="&#176;C" />
                        <CustomGuage currentValue={this.state.pressure} progressFontUnits="mm/Hg" />
                    </div>
                </div>
            </MaterialUI>
        )
    }
}

export default Home