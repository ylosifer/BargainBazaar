import React, { useState } from "react";
import axios from "axios";
import "./css/CreateAd.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CreateAd = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    tags: "",
    img_urls: [],
  });

  const [images, setImages] = useState([]); // State to store selected images
  const maxFileSize = 20 * 1024 * 1024; // 20 MB max file size

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "tags") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(file => file.size <= maxFileSize);

    if (validFiles.length > 5) {
      alert("You can only upload a maximum of 5 images.");
      return;
    }

    if (validFiles.length === 0) {
      alert("Please upload at least one image, each smaller than 20 MB.");
      return;
    }

    setImages(validFiles);
  };

  const uploadImages = async () => {
    const uploadedUrls = [];

    for (let image of images) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "bb-image");
      data.append("cloud_name", "dh2s3fhlj");

      try {
        const response = await fetch("https://api.cloudinary.com/v1_1/dh2s3fhlj/image/upload", {
          method: "POST",
          body: data,
        });
        const result = await response.json();
        uploadedUrls.push(result.secure_url);
      } catch (err) {
        console.error("Error uploading image:", err);
      }
    }
    return uploadedUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadedUrls = await uploadImages();
    const tagsArray = formData.tags.split(",").map(tag => tag.trim()).filter(tag => tag !== "");
    const finalFormData = { ...formData, img_urls: uploadedUrls, tags: tagsArray };

    try {
      const response = await axios.post(
        "https://a1222dc1-f638-4973-a91d-f420f75df50b-00-vzgbpa3nwwot.picard.replit.dev/ads",
        finalFormData
      );
      console.log("Ad created successfully:", response.data);
    } catch (error) {
      console.error("Error creating ad:", error);
    }

    window.alert("Ad Created");
    window.location.href = "https://e8805e7d-0d05-4804-9f1b-c2bed61f3929-00-2zqa0zvse9h3u.pike.replit.dev/";
  };

  return (
    <>
      <Navbar/>
      <div className="container">
        <h1>Create New Ad</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              className="form-control-textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Tags (separate by comma):</label>
            <textarea
              className="form-control-textarea"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Upload Images:</label>
            <input
              name="images"
              type="file"
              multiple
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Ad
          </button>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default CreateAd;
