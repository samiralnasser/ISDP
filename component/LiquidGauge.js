import { Component } from 'react'
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import LiquidFillGauge from 'react-liquid-gauge';
import Fonts from '../themes/Fonts'

class LiquidGauge extends Component {
    constructor(props) {
        super(props)
        this.startColor = '#6495ed'; // cornflowerblue
        this.endColor = '#dc143c'; // crimson
    }

    render() {
        const { value, percent, style } = this.props
        const radius = 150;
        const interpolate = interpolateRgb(this.startColor, this.endColor);
        const fillColor = interpolate(value / 100);
        const gradientStops = [
            {
                key: '0%',
                stopColor: color(fillColor).darker(0.5).toString(),
                stopOpacity: 1,
                offset: '0%'
            },
            {
                key: '50%',
                stopColor: fillColor,
                stopOpacity: 0.75,
                offset: '50%'
            },
            {
                key: '100%',
                stopColor: color(fillColor).brighter(0.5).toString(),
                stopOpacity: 0.5,
                offset: '100%'
            }
        ];

        return (
            <LiquidFillGauge
                style={style}
                width={radius * 2}
                height={radius * 2}
                value={value}
                percent={percent}
                textSize={1}
                textOffsetX={0}
                textOffsetY={0}
                textRenderer={(props) => {
                    const value = props.value
                    const textPixels = (props.textSize * radius / 2);
                    const labelStyle = {
                        fontFamily: Fonts.type.base,
                        fontSize: textPixels * 0.5
                    };
                    let level = "low"
                    if (value < 25) {
                        level = "Low"
                    } else if (value >= 25 && value < 75) {
                        level = "Medium"
                    } else {
                        level = "High"
                    }

                    return (
                        <tspan className="value" style={labelStyle}>{level}</tspan>
                    );
                }}
                riseAnimation
                riseAnimationTime={1500}
                waveAnimation
                waveFrequency={2}
                waveAmplitude={1}
                gradient
                gradientStops={gradientStops}
                circleStyle={{
                    fill: fillColor
                }}
                waveStyle={{
                    fill: fillColor
                }}
                textStyle={{
                    fill: color('#444').toString(),
                    fontFamily: 'Arial'
                }}
                waveTextStyle={{
                    fill: color('#fff').toString(),
                    fontFamily: 'Arial'
                }}
            />
        )
    }
}

export default LiquidGauge