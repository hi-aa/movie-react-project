/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function MenuForm({
  formAttr,
  list,
  selectedKey,
  saveData,
  removeData,
}) {
  // form data
  const initValues = { str: "", radio: "Y", checkbox: [] };
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    // formState: { errors },
  } = useForm({ defaultValues: initValues });

  useEffect(() => {
    if (selectedKey !== 0) {
      const item = list[selectedKey] || {};
      reset({ ...item });
    } else {
      reset(initValues);
    }
  }, [selectedKey, reset]);

  const onSubmit = (data) => {
    // console.log("save", { data });
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
          {formAttr.radio.map((v, i) => (
            <div className="form-check" key={i}>
              <input
                className="form-check-input"
                type="radio"
                {...register("radio")}
                id={`radio${v.value}`}
                value={v.value}
              />
              <label className="form-check-label" htmlFor={`radio${v.value}`}>
                {v.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <div className="row mb-3">
        <legend className="col-form-label col-sm-2 pt-0">체크박스</legend>
        <div className="col-sm-10">
          {formAttr.checkbox.map((v, i) => (
            <div className="form-check" key={i}>
              <input
                className="form-check-input"
                type="checkbox"
                {...register("checkbox")}
                id={`checkbox${v.value}`}
                value={v.value}
              />

              <label
                className="form-check-label"
                htmlFor={`checkbox${v.value}`}
              >
                {v.title}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* 버튼영역 */}
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary me-md-2" type="submit">
          저장
        </button>
        <button
          type="button"
          className="btn btn-danger"
          disabled={selectedKey === 0}
          onClick={() => removeData(selectedKey)}
        >
          삭제
        </button>
      </div>
    </form>
  );
}
