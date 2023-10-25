const initList = () => {
  const list = Array(15)
    .fill(0)
    .map((v, i) => {
      return {
        str: `문자${i}`,
        radio: i % 3 === 0 ? "Y" : "N",
        checkbox: ["cat", "dog", "rabbit"].filter((v2, i2) => i2 !== i % 2),
        ymd: "2023-10-25",
      };
    });
  return list;
};

export { initList };
