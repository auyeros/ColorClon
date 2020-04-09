import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import Select from "@material-ui/core/Select";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import styles from "./styles/NavBarStyles";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex", open: false };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackBar = this.closeSnackBar.bind(this);
    }
    handleFormatChange(e) {
        this.setState({ format: e.target.value, open: true });
        this.props.handleChange(e.target.value);
    }
    closeSnackBar() {
        this.setState({ open: false });
    }
    render() {
        console.log(this.state.open);
        const { level, changeLevel, showingAllColors, classes } = this.props;
        const { format } = this.state;
        return (
            <header className={classes.NavBar}>
                <div className={classes.logo}>
                    <Link to="/">reactcolorpicker</Link>
                </div>
                {showingAllColors && (
                    <div>
                        <span>Level: {level}</span>
                        <div className={classes.slider}>
                            <Slider
                                defaultValue={level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={changeLevel}
                            />
                        </div>
                    </div>
                )}
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">
                            RGB - #rgb (255,255,255)
                        </MenuItem>
                        <MenuItem value="rgba">
                            RGBA - rgba (255,255,255, 1.0)
                        </MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={
                        <span id="message-id">
                            Format Is {format.toUpperCase()}!
                        </span>
                    }
                    ContentProps={{
                        "aria-describedby": "message-id",
                    }}
                    onClose={this.closeSnackBar}
                    action={[
                        <IconButton
                            onClick={this.closeSnackBar}
                            color="inherit"
                            key="close"
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </header>
        );
    }
}

export default withStyles(styles)(NavBar);
