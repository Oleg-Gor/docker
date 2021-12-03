import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { onSubmitLogin } from "../store/slices/movieSlice";
import { getData } from "../api/api";

export const LogIn = () => {
  const [data, setData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm({
    mode: "all",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const key = data.key;
    const name = data.name;
    dispatch(onSubmitLogin({ key, name }));
    navigate("/");
  };

  const setServerData = () => {
    return getData().then((res) => {
      setData(JSON.stringify(res, null, ' '));
    });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> Login </h1> <label> Your name </label>{" "}
        <input
          defaultValue=""
          {...register("name", {
            required: true,
            minLength: 2,
          })}
        />{" "}
        {errors.name && <i> Имя должно быть больше двух символов </i>} <br />
        <label> Your key </label>{" "}
        <input
          defaultValue=""
          {...register("key", {
            required: true,
            minLength: 3,
          })}
        />{" "}
        {errors.key && <i> Ключ должен быть не меньше трех символов </i>} <br />
        <button
          type="submit"
          className="btn-large  waves-effect waves-light"
          name="action"
        >
          Submit{" "}
        </button>{" "}
        <hr />
        Форма отправлена: {submitCount}{" "}
      </form>
      <button type="submit" onClick={setServerData}>
        GET
      </button>
      <div>
        DATA:
        <pre>{data}</pre>
      </div>
    </Fragment>
  );
};
