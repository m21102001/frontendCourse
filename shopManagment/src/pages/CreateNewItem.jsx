import { useState } from "react";

const CreateNewItem = () => {
    const [title, setTitle] = useState("");
    const [views, setViews] = useState("");
    const [blance, setBlance] = useState("");
    const [comments, setComments] = useState("");

    return (
        <form>
            <div className="mb-3">
                <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                > title</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                > views</label>
                <input
                    type="number"
                    className="form-control"
                    value={views}
                    onChange={(e) => setViews(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                > blance</label>
                <input
                    type="number"
                    className="form-control"
                    value={blance}
                    onChange={(e) => setBlance(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                > comments</label>
                <input
                    type="number"
                    className="form-control"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default CreateNewItem