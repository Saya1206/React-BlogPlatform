import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

export const CreatePost = () => {
  return (
    <section className="newPost d-flex justify-content-center" style={{ marginTop: "90px" }}>

      <div className="container text-center">
        {/* Image Preview */}
        <div className="mb-4 d-flex justify-content-center">
          <img
            id="imagePreview"
            src="https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Preview"
            className="img-fluid rounded shadow"
            style={{ height: "300px", width: "100%", maxWidth: "600px", objectFit: "cover" }}
          />
        </div>

        {/* Upload Image Button */}
        <div className="mb-4">
          <label className="btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center mx-auto" style={{ width: "150px" }}>
            <IoIosAddCircleOutline size={24} className="me-2" />
            Add Image
            <input type="file" accept="image/*" className="d-none" onChange={() => {}} />
          </label>
        </div>

        {/* Form */}
        <form className="d-flex flex-column align-items-center w-100">
          <div className="mb-3" style={{ width: "100%", maxWidth: "600px" }}>
            <input
              id="titleInput"
              type="text"
              className="form-control text-center"
              placeholder="Title"
              style={{ fontSize: "1rem" }}
            />
          </div>

          <div className="mb-3" style={{ width: "100%", maxWidth: "600px" }}>
            <textarea
              id="postContent"
              className="form-control text-center"
              rows="5"
              placeholder="Write your post..."
              style={{ fontSize: "1rem" }}
            ></textarea>
          </div>

          <button className="btn btn-primary px-4">Create Post</button>
        </form>
      </div>
    </section>
  );
};
