import { Component } from 'react'
import moment from 'moment'
import firebase from 'firebase'
import firebaseConfig from '../config/firebaseConfig'

import styles from '../styles/IndexStyles'
import AppBar from 'material-ui/AppBar';
import MaterialUI from '../component/MaterialUI'
import LiquidGauge from '../component/LiquidGauge'


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const _getPercentage = (max, min, current) => {
    return ((current - min) / (max - min)) * 100
}

const GaugeContainer = ({ title, value, max, min }) => (
    <div style={{ display: 'inline-block' }}>
        <h3 style={styles.gaugeTitle}>{title}</h3>
        <p style={styles.gaugeValue}>{Math.round(value * 100000) / 100000}</p>
        <LiquidGauge
            style={styles.gauge}
            value={_getPercentage(max, min, value)}
        />
    </div>
)

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: 0,
            humidity: 0,
            dustParticles: 0,
            pressure: 0,
            timestamp: ''
        }
    }

    componentDidMount() {
        const db = firebase.database()
        db.ref('variables').on('value', (snapshot) => {
            const values = snapshot.val()
            if (values) {
                this.setState({
                    temperature: values.temperature,
                    humidity: values.humidity,
                    pressure: values.pressure,
                    dustParticles: values.dustParticles,
                    timestamp: values.timestamp
                })
            }
        })
    }

    render() {
        const { temperature, humidity, dustParticles, pressure } = this.state
        return (
            <MaterialUI>
                <div>
                    <AppBar
                        title="Intl Sensors Development Project"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <div>
                        <h1 style={styles.heading}>Real Time Updates</h1>
                        <h2 style={styles.subHeading}>Last updated: {moment(this.state.timestamp).format('kk:mm:ss DD/MM/YYYY')}</h2>
                    </div>

                    <div style={styles.gaugeContainer}>
                        <GaugeContainer
                            title="Temperature / &#176;C"
                            value={temperature}
                            max={120}
                            min={-60}
                        />
                        <GaugeContainer
                            title="Humidity / %"
                            value={humidity}
                            max={120}
                            min={-60}
                        />
                    </div>
                    <div style={styles.gaugeContainer}>
                        <GaugeContainer
                            title="Pressure / kPa"
                            value={pressure}
                            max={120}
                            min={-60}
                        />
                        <GaugeContainer
                            title="Dust Particles / %"
                            value={dustParticles}
                            max={120}
                            min={-60}
                        />
                    </div>
                </div>
            </MaterialUI>
        )
    }
}

export default Home