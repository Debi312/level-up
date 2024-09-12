import errors, { SystemError } from "com/errors"
import validate from "com/validate"

const createPost = (formData) => {
    //validate.url(image, "image")
    //validate.text(description, "description", 150)
    //if (repetitions || repetitions === 0) validate.number(repetitions, "repetitions");
   // if (weight || weight === 0) validate.number(weight, "weight");
   //if (time || time === 0) validate.time(time, "time")
//TODO validaciones 

    return fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        method: "POST",
        headers: {
            //"Content-type": "application/json",
            Authorization: `Bearer ${sessionStorage.token}`
        },
        body: formData
    })
        .catch(() => { throw new SystemError("server error") })
        .then(response => {
            if (response.status === 201) return
            return response.json()
                .catch(() => { throw new SystemError("server error") })
                .then(body => {
                    const { error, message } = body
                    const ErrorConstructor = errors[error]; // Asegúrate de que `errors` tenga las clases correctas
                    if (ErrorConstructor) {
                        throw new ErrorConstructor(message);
                    } else {
                        throw new SystemError("Unknown error occurred");
                    }
                })
        })


}

export default createPost
