import { Input, InputLabel } from "@material-ui/core";

const styles = {
  hidden: {
    display: "none",
  },
  importLabel: {
    color: "black",
  },
};

export default () => (
    <InputLabel htmlFor="import-button" style={styles.importLabel}>
        <Input
            id="import-button"
            inputProps={{
            accept:
                ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
            }}
            onChange={onInputChange}
            style={styles.hidden}
            type="file"
        />
        Import Spreadsheet
    </InputLabel>
)

