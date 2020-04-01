import React, { Component } from "react";
import Palette from "./Palette.js";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
    render() {
        return (
            <div>
                <Palette palette={generatePalette(seedColors[1])} />
            </div>
        );
    }
}

export default App;
