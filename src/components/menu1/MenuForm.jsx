import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function MenuForm() {
  const {
    register,
    // handleSubmit,
    watch,
    getValues,
    // formState: { errors },
  } = useForm({ defaultValues: { str: "", radio: "N", checkbox: [] } });

  const watchCheckbox = watch("checkbox");
  useEffect(() => {
    console.log(getValues());
  }, [watchCheckbox]);

  return (
    <form>
      <div class="row mb-3">
        <label for="str1" class="col-sm-2 col-form-label">
          문자 입력
        </label>
        <div class="col-sm-10">
          <input type="text" className="form-control" {...register("str")} />
        </div>
      </div>

      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
        <div class="col-sm-10">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              {...register("radio")}
              id="radioY"
              value="Y"
            />
            <label class="form-check-label" for="radioY">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              {...register("radio")}
              id="radioN"
              value="N"
            />
            <label class="form-check-label" for="radioN">
              No
            </label>
          </div>
        </div>
      </fieldset>

      <div class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">체크박스</legend>
        <div class="col-sm-10">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              {...register("checkbox")}
              id="checkbox1"
              value="cat"
            />
            <label class="form-check-label" for="checkbox1">
              Cat
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              {...register("checkbox")}
              id="checkbox2"
              value="dog"
            />
            <label class="form-check-label" for="checkbox2">
              Dog
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              {...register("checkbox")}
              id="checkbox3"
              value="rabbit"
            />
            <label class="form-check-label" for="checkbox3">
              Rabbit
            </label>
          </div>
        </div>
      </div>
      {/* 버튼영역 */}
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary me-md-2" type="button">
          저장
        </button>
        <button type="button" class="btn btn-danger">
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
