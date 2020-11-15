import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "components/Button";
import { ArticleService } from "components/Article";
import { useForm,Controller } from "react-hook-form";
import { storage} from "services/firebase";
import { v4 as uuid } from "uuid";
import WYSIWYGEditor from "components/Article/editor";


export default function UpdateArticle() {
  const { register, errors, reset, handleSubmit, control } = useForm();

        const onSubmit = (article, file) => {
        ArticleService.update(article)};
        const id = uuid();
        const uploadImage = storage.ref("images").child(id);
        uploadImage.put(file[0])

        .then(() => alert("done"))
        .catch(error => console.log(error));

  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} style={{ marginTop: 16 }}>
        <Grid item xs={12}>
          <TextField
            name="title"
            label="Title"
            defaultValue=""
            variant="outlined"
            fullWidth
            inputRef={register({
              required: "Title is required",
              maxLength: {
                value: 250,
                message: "Title must be less than 250 characters"
              }
            })}
            error={!!errors.title}
            helperText={!!errors.title && errors.title.message}>
              
            </TextField>
            
          
          
        </Grid>

        <Grid item xs={24}>
        
        <Controller
          as={<WYSIWYGEditor />}
          name="body"
          control={control}
          label="Body"
          defaultValue=""
          variant="outlined"
          multiline
          fullWidth
          inputRef={register({ required: "Body is required" })}
          error={!!errors.body}
          helperText={!!errors.body && errors.body.message}
        />

        </Grid>

        <Grid item xs={12}>
        <input ref={register} name="image" type="file" accept=".jpg" />
        <button onClick={handleUpload}>Upload</button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginRight: 8 }}
          >
            Submit
          </Button>
          <Button variant="contained" type="reset" onClick={reset}>
            Reset
          </Button>
        </Grid>
      
      </Grid>
    </form>
  );
}
