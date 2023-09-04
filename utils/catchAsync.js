const catchAsynce = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

export default catchAsynce;
