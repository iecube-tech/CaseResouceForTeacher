export const notEmpty = (r, v, cb) => {
  if (!v) {
    cb(new Error("不能为空"));
    return;
  }
  if (v.trim() === "") {
    cb(new Error("不能为空"));
    return;
  } else {
    cb();
    return;
  }
};
