import React, { Component } from "react";
import Palette from "./Palette.js";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
    render() {
        {
            for (let palette of seedColors) {
                console.log(palette);
                console.log(generatePalette(palette));
            }
        }
        return (
            <div>
                <Palette {...seedColors[4]} />
            </div>
        );
    }
}

export default App;
