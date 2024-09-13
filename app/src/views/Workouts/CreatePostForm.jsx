import { useState } from "react"
import logic from "../../logic"
import Button from "../../components/Button"
import Field from "../../components/Field"
import "./CreatePostForm.css"
import useContext from "../../useContext"


export default function CreatePostForm({ workoutId, onPostCreated }) {
    console.log("CreatePostForm -> render")
    const { alert } = useContext()

    const [imageName, setImageName] = useState("")

    const handleCreatePostSubmit = (event) => {

        event.preventDefault()

        const form = event.target
        const formData = new FormData()

        formData.append('image', form.image.files[0])
        formData.append('description', form.description.value)
        formData.append('time', form.time.value && Number(form.time.value))
        formData.append('repetitions', form.repetitions.value && Number(form.repetitions.value))
        formData.append('weight', form.weight.value && Number(form.weight.value))
        formData.append('workoutId', workoutId)
        console.log("FormData contents:", Array.from(formData.entries()));

        /* const image = formData.get('image') // Obtén el archivo
        const description = formData.get('description')
        const time = formData.get('time') && Number(formData.get('time'))
        const repetitions = formData.get('repetitions') && Number(formData.get('repetitions'))
        const weight = formData.get('weight') && Number(formData.get('weight')) */

        /*  const image = form.image.value
         const description = form.description.value
         const time = form.time.value && Number(form.time.value)
         const repetitions = form.repetitions.value && Number(form.repetitions.value)
         const weight = form.weight.value && Number(form.weight.value) */

        try {

            logic.createPost(formData)
                .then(() => onPostCreated())
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })

        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }

    const handleFileChange = (event) => {
        setImageName(event.target.files[0].name)
    }

    return (
        <form className="CreatePostForm" onSubmit={handleCreatePostSubmit}>
            <div className="post-form-container">
                <label className="image-label" htmlFor="image-upload">
                    <i className="fa-solid fa-camera"></i>{imageName || "Select file"}
                </label>
                <input
                    id="image-upload"
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    style={{ display: 'none' }} // Oculta el input por defecto
                />
                <Field id="description" type="text" placeholder="Description"></Field>
                <Field id="time" type="number" placeholder="Time"></Field>
                <Field id="repetitions" type="number" placeholder="Total repetitions"></Field>
                <Field id="weight" type="number" placeholder="Weight"></Field>

                <div className="form-buttons-container">
                    <Button type="submit">Share</Button>
                </div>

            </div>
        </form>
    )
}
