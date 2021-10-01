import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    labelText: {
        color: "hsl(204, 23.8%, 95.9%) !important",
        fontFamily: "Space Grotesk,sans-serif",
        fontSize: "1.6rem",
    },
});

const InputText = (props) => {
    const { labelText } = useStyles();
    const inputConfig = {
        variant: "filled",
        fullWidth: true,
        margin: "dense",
    };
    return (
        <TextField
            {...inputConfig}
            InputLabelProps={{ className: labelText }}
            InputProps={{ className: labelText }}
            {...props}
        />
    );
};

export default InputText;
