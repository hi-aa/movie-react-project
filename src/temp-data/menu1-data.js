import dayjs from "dayjs";

const initList = () => {
  const list = Array(15)
    .fill(0)
    .map((v, i) => {
      return {
        str: `문자${i}`,
        radio: i % 2 === 0 ? "Y" : "N",
        checkbox: ["cat", "dog", "rabbit"].filter((v2, i2) => i2 * 2 !== i % 2),
        ymd: dayjs().format("YYYY-MM-DD"),
      };
    });
  return list;
};

export { initList };
