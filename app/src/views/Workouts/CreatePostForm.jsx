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
    const [seconds, setSeconds] = useState("")
    const [minutes, setMinutes] = useState("")


    const handleSecondsChange = (event) => {
        let value = event.target.value

        if (/^\d{0,2}$/.test(value)) {
            setSeconds(value <= 59 ? value : "59")
        }
    }

    const handleMinutesChange = (event) => {
        let value = event.target.value

        if (/^\d{0,2}$/.test(value)) {
            setMinutes(value)
        }
    }

    const handleBlur = (type) => {
        if (type === "seconds") {
            if (seconds.length === 1) {
                setSeconds(`0${seconds}`)
            }
            if (seconds === "") {
                setSeconds("00")
            }
            if (minutes === "") {
                setMinutes("00")
            }
        }
        if (type === "minutes") {
            if (minutes.length === 1) {
                setMinutes(`0${minutes}`)
            }
            if (minutes === "") {
                setMinutes("00")
            }
            if (seconds === "") {
                setSeconds("00")
            }
        }

        if ((minutes === "00" && seconds === "00") || (!minutes && seconds === "00") || (!seconds && minutes === "00")) {
            setMinutes("")
            setSeconds("")
        }
    }


    const handleCreatePostSubmit = (event) => {

        event.preventDefault()

        const form = event.target
        const formData = new FormData()

        // const minutes = form.minutes.value && Number(form.minutes.value)
        //const seconds = form.seconds.value && Number(form.seconds.value)
        const minutesValue = form.minutes.value
        const secondsValue = form.seconds.value
        const minutes = minutesValue ? Number(minutesValue) : ""
        const seconds = secondsValue ? Number(secondsValue) : ""

        let totalTime
        if (minutes === "" && seconds === "") {
            totalTime = ""
        } else if (minutes === "") {
            totalTime = Number(seconds)
        } else if (seconds === "") {
            totalTime = Number(minutes) * 60
        } else {
            totalTime = (Number(minutes) * 60) + Number(seconds)
        }

        formData.append("image", form.image.files[0])
        formData.append("description", form.description.value)

        formData.append("time", totalTime)
        formData.append("repetitions", form.repetitions.value && Number(form.repetitions.value))
        formData.append("weight", form.weight.value && Number(form.weight.value))
        formData.append("workoutId", workoutId)
        console.log("FormData contents:", Array.from(formData.entries()))

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
                    style={{ display: "none" }}
                />
                <Field id="description" type="text" placeholder="Description"></Field>

                <div className="time-container">
                    <div className="time-inputs">
                        <Field
                            className="time-field"
                            id="minutes"
                            type="text"
                            placeholder="Min"
                            value={minutes}
                            onChange={handleMinutesChange}
                            onBlur={() => handleBlur("minutes")}
                            maxLength="2"
                        />
                        <span className="time-separator">:</span>
                        <Field
                            className="time-field"
                            id="seconds"
                            type="text"
                            placeholder="Sec"
                            value={seconds}
                            onChange={handleSecondsChange}
                            onBlur={() => handleBlur("seconds")}
                            maxLength="2"
                        />
                    </div>
                    <label className="time-label">Total time</label>
                </div>

                <Field id="repetitions" type="number" placeholder="Total repetitions"></Field>
                <Field id="weight" type="number" placeholder="Weight"></Field>

                <div className="form-buttons-container">
                    <Button type="submit">Share</Button>
                </div>

            </div>
        </form>
    )
}
