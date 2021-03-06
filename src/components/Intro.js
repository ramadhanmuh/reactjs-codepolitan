import React from "react";
import "../App.css";

const Intro = props => (
    <div className="col-md-6"
        style={styles.box450}>
        <h4 style={styles.greyText}>
            {props.content}
        </h4>
        <a href="#" className="btn buttonAction">
            Pelajari Detail Program
        </a>
    </div>
);

const styles = {
    box450: {
        height: '450px'
    },
    greyText: {
        color: '#808080'
    }
};

export default Intro;