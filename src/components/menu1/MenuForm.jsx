/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function MenuForm({ saveData }) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    // formState: { errors },
  } = useForm({ defaultValues: { str: "", radio: "N", checkbox: [] } });

  const onSubmit = (data) => {
    console.log("save", { data });
    saveData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row mb-3">
        <label htmlFor="str1" className="col-sm-2 col-form-label">
          문자 입력
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" {...register("str")} />
        </div>
      </div>

      <fieldset className="row mb-3">
        <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              {...register("radio")}
              id="radioY"
              value="Y"
            />
            <label className="form-check-label" htmlFor="radioY">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              {...register("radio")}
              id="radioN"
              value="N"
            />
            <label className="form-check-label" htmlFor="radioN">
              No
            </label>
          </div>
        </div>
      </fieldset>

      <div className="row mb-3">
        <legend className="col-form-label col-sm-2 pt-0">체크박스</legend>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              {...register("checkbox")}
              id="checkbox1"
              value="cat"
            />
            <label className="form-check-label" htmlFor="checkbox1">
              Cat
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              {...register("checkbox")}
              id="checkbox2"
              value="dog"
            />
            <label className="form-check-label" htmlFor="checkbox2">
              Dog
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              {...register("checkbox")}
              id="checkbox3"
              value="rabbit"
            />
            <label className="form-check-label" htmlFor="checkbox3">
              Rabbit
            </label>
          </div>
        </div>
      </div>
      {/* 버튼영역 */}
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary me-md-2" type="submit">
          저장
        </button>
        <button type="button" className="btn btn-danger" disabled>
          삭제
        </button>
      </div>
      {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
      {/* <a href="#" className="card-link">
                  Card link
                  </a>
                  <a href="#" className="card-link">
                  Another link
                </a> */}
    </form>
  );
}
