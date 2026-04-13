import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaImage } from "react-icons/fa";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import API_BASE_URL from "../../config/apiConfig";

const AdminSchema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(20),
  contact: yup.string().required().min(10),
  address: yup.string().required().min(2),
  profile: yup.mixed().required(),
});

const AdminSignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AdminSchema),
  });

  const handleAdminRegister = async (data) => {
    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("email", data?.email);
    formData.append("password", data?.password);
    formData.append("contact", data?.contact);
    formData.append("address", data?.address);
    formData.append("profile", data?.profile[0]);

    if (data?.profile?.length == 0) {
      Swal.fire({
        title: "Admin Registration",
        text: "Please Upload File",
        icon: "error",
      });
      return;
    }
    const response = await axios.post(
      `${API_BASE_URL}/admin-register`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Admin Registration",
        text: response?.data?.message,
        icon: "success",
      });
      navigate("/login");
    } else {
      Swal.fire({
        title: "Admin Registration",
        text: response?.data?.message,
        icon: "error",
      });
    }
  };

  return (
    <>
      {location?.pathname !== "/" && <Navbar />}
      <div className="d-flex justify-content-center align-items-center  mt-5 t py-5">
        <div className="bg-white p-4 rounded shadow" style={{ width: "900px" }}>
          <p className="fs-3 fw-bold text-center">
            Admin Register <b className="text-danger">here</b>
          </p>
          <form onSubmit={handleSubmit((d) => handleAdminRegister(d))}>
            <div className="row g-3">
              {/* Name */}
              <div className="col-md-6">
                <label className="form-label">Admin Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    {...register("name")}
                    className="form-control"
                    placeholder="Enter admin name"
                  />
                </div>
                {errors?.name && (
                  <p className="pt-1 text-danger">{errors?.name?.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    {...register("email")}
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                {errors?.email && (
                  <p className="pt-1 text-danger">{errors?.email?.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="col-md-6">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <input
                    type="password"
                    {...register("password")}
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                {errors?.password && (
                  <p className="pt-1 text-danger">{errors?.password?.message}</p>
                )}
              </div>

              {/* Contact */}
              <div className="col-md-6">
                <label className="form-label">Contact</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaPhone />
                  </span>
                  <input
                    type="text"
                    {...register("contact")}
                    className="form-control"
                    placeholder="Enter contact number"
                  />
                </div>
                {errors?.contact && (
                  <p className="pt-1 text-danger">{errors?.contact?.message}</p>
                )}
              </div>

              {/* Address */}
              <div className="col-md-6">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  {...register("address")}
                  className="form-control"
                  placeholder="Enter address"
                />
                {errors?.address && (
                  <p className="pt-1 text-danger">{errors?.address?.message}</p>
                )}
              </div>

              {/* Profile Image */}
              <div className="col-md-6">
                <label className="form-label">Profile Image</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaImage />
                  </span>
                  <input
                    type="file"
                    {...register("profile")}
                    className="form-control"
                    accept="image/*"
                  />
                </div>
                {errors?.profile && (
                  <p className="pt-1 text-danger">{errors?.profile?.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="col-12 text-center mt-4">
                <button type="submit" className="btn btn-danger px-5 py-2">
                  Register Admin
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminSignUp;